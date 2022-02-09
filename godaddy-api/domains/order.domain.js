const _ = require("lodash");
const OrderDetailsModel = require("../models/order.details");
const OrderItemsModel = require("../models/order.items");
const CartItemsModel = require("../models/cart.items");
const DiscountModel = require("../models/discount.model");
const PromoModel = require("../models/promo.model");
const { validateOrder } = require("../utils/joi.validations");
const { getOrderNo } = require("../utils/functions");

class OrderDomain {
  // *********** GET ORDER BY ORDER NO ***********
  async getOrderByNo(req, res) {
    try {
      const orderNo = req.params.orderNo;
      let order = [];
      const orderDetails = await OrderDetailsModel.find({
        isActive: 1,
        orderNo,
      }).populate({
        path: "userId",
        path: "promoId",
      });
      for (let item of orderDetails) {
        let orderNo = item.orderNo;
        item = _.pick(item, [
          "_id",
          "orderNo",
          "total",
          "promoId",
          "updatedTotal",
          "userId",
        ]);
        const orderItems = await OrderItemsModel.find({ orderNo });
        order.push({ ...item, orderItems });
      }
      console.log(order);
      if (order) {
        res.send(order);
      } else {
        res.json({
          message: `No results found!`,
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  // *********** GET ORDERS ***********
  async getAllOrder(req, res) {
    try {
      const userId = req.decoded._id;
      let order = [];
      const orderDetails = await OrderDetailsModel.find({
        isActive: 1,
        userId,
      }).populate({
        path: "userId",
        path: "promoId",
      });
      for (let item of orderDetails) {
        let orderNo = item.orderNo;
        item = _.pick(item, [
          "_id",
          "orderNo",
          "total",
          "promoId",
          "updatedTotal",
          "userId",
        ]);
        const orderItems = await OrderItemsModel.find({ orderNo });
        order.push({ ...item, orderItems });
      }
      if (order) {
        res.send(order);
      } else {
        res.json({
          message: `No results found!`,
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  // *********** PLACE ORDER ***********
  async createOrder(req, res) {
    try {
      // * GET CURRENT USER *
      const userId = await req.decoded._id;
      // * GET ORDER NO *
      const orderNo = await getOrderNo();
      let data = req.body;
      // * VALIDATE BODY DATA *
      const { error } = validateOrder(data);
      if (error) {
        return res.status(400).json({
          message: error.details[0].message,
        });
      }
      // * GET USER CART *
      const cart = await CartItemsModel.find({ userId });
      if (cart.length > 0) {
        const cartPrices = cart.map((item) => item.updatedPrice);
        const total = cartPrices.reduce((acc, val) => acc + val, 0);
        // * GET USER PROMO CODE *
        const promo = await PromoModel.findOne({
          _id: data.promoId,
          isActive: 1,
        });
        let orderDetails;
        // * IF PROMO CODE AVAILABLE *
        if (promo) {
          const calculatedValue = (total * promo.percentage) / 100;
          const updatedTotal = total - calculatedValue;
          orderDetails = {
            userId,
            orderNo,
            total,
            promoId: data.promoId,
            updatedTotal,
          };
        } else {
          const updatedTotal = total;
          orderDetails = {
            userId,
            orderNo,
            total,
            updatedTotal,
          };
        }
        // * SAVE ORDER DETAILS *
        const orderDetailsData = new OrderDetailsModel(orderDetails);
        const saveOrderDetails = await orderDetailsData.save();

        // * SAVE ORDER ITEMS *
        // let saveOrderItems = cart.map(async (item) => {
        let orderItems = [];
        for (let item of cart) {
          const discount = await DiscountModel.findById(item.discountId);
          let months;
          if (discount) {
            months = discount.months;
          } else {
            months = 1;
          }
          const { productId, updatedPrice, ...extra } = item;
          const startTime = new Date();
          const currentMonth = startTime.getMonth();
          const endTime = new Date(new Date().setMonth(currentMonth + months));
          let item2 = {
            productId,
            months,
            productPrice: updatedPrice,
            orderNo,
            startTime,
            endTime,
          };
          const orderItemsData = new OrderItemsModel(item2);
          let saveOrderItem = await orderItemsData.save();
          orderItems.push(saveOrderItem);
        }
        // });
        let order = [];
        const orderDetailsObj = _.pick(saveOrderDetails, [
          "_id",
          "orderNo",
          "total",
          "promoId",
          "updatedTotal",
          "userId",
        ]);
        order.push({ ...orderDetailsObj, orderItems });

        // * GET ORDER *
        if (saveOrderDetails && orderItems) {
          // * DELETE CART ITEMS *
          const deletedCart = await CartItemsModel.deleteMany({ cart });
          if (deletedCart) {
            res.send(order);
          }
        } else {
          res.status(400).json({
            message: "Please try again later!",
          });
        }
      } else {
        res.status(400).json({
          message: "Your cart is empty!",
        });
      }
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  }

  // *********** DELETE ORDER ***********
  async deleteOrder(req, res) {
    try {
      const _id = parseInt(req.params.orderDetailsId);
      const order = await OrderDetailsModel.findByIdAndUpdate(
        { _id },
        { $set: { isActive: 0 } },
        { new: 1 }
      );
      if (order) {
        res.send(order);
      } else {
        res.status(400).json({
          message: "Order Not Found!",
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = OrderDomain;

// // * TRANSACTION
// const mongoose = require("mongoose");
// // * TRANSACTION *
// // * START SESSION *
// const session = await startSession();
// // * START TRANSACTION *
// session.startTransaction();
// try {
//   const options = { session, new: 1 };

//   // * IF ORDER PLACED *
//   await session.commitTransaction();
//   session.endSession();
//   res.json({ message: `Transaction Successful!` });
// } catch (e) {
//   await session.abortTransaction();
//   session.endSession();
//   res.status(400).json({ message: `Transaction Failed!` });
// }
