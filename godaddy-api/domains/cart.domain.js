const _ = require("lodash");
const CartItemsModel = require("../models/cart.items");
const ProductModel = require("../models/product.model");
const DiscountModel = require("../models/discount.model");
const {
  validateCartItems,
  updateCartItems,
} = require("../utils/joi.validations");

class CartDomain {
  // *********** GET CART ***********
  async getUserCart(req, res) {
    try {
      const userId = req.decoded._id;
      const cart = await CartItemsModel.find({ userId }).populate({
        path: "productId",
      });
      if (cart.length > 0) {
        res.send(cart);
      } else {
        res.json({
          message: `No results found!`,
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  // *********** CREATE CART ***********
  async addToCart(req, res) {
    try {
      const userId = await req.decoded._id;
      let data = req.body;
      // * VALIDATE BODY DATA *
      const { error } = validateCartItems(data);
      if (error) {
        return res.status(400).json({
          message: error.details[0].message,
        });
      }
      const productId = await ProductModel.findOne({
        _id: data.productId,
      });
      const discountId = await DiscountModel.findOne({
        _id: data.discountId,
      });
      // * PRODUCT PRICE *
      const price = productId.price;
      // * CHECK IF USER ID EXISTS *
      if (userId) {
        // * CHECK IF PRODUCT ID EXISTS *
        if (productId) {
          // * CHECK IF DISCOUNT ID EXISTS *
          if (discountId) {
            // * UPDATED PRICE *
            const calcValue = (productId.price * discountId.percentage) / 100;
            const updatedPrice = price - calcValue;
            data = {
              ...data,
              userId,
              price,
              updatedPrice,
            };
          } else {
            // * UPDATED PRICE *
            const price = productId.price;
            const updatedPrice = price;
            data = {
              ...data,
              userId,
              price,
              updatedPrice,
            };
          }
          // * SAVE CART DETAILS *
          const cart = new CartItemsModel(data);
          const saveCart = await cart.save();
          if (saveCart) {
            res.send(saveCart);
          } else {
            res.status(400).json({
              message: "Please try again later!",
            });
          }
        } else {
          return res.status(400).json({
            message: `Product Not found!`,
          });
        }
      } else {
        return res.status(400).json({
          message: `User Not found!`,
        });
      }
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  }

  // *********** UPDATE CART ***********
  async updateCartItem(req, res) {
    try {
      const _id = parseInt(req.params.cartId);
      const userId = await req.decoded._id;
      let data = req.body;
      // * VALIDATE BODY DATA *
      const { error } = updateCartItems(data);
      if (error) {
        return res.status(400).json({
          message: error.details[0].message,
        });
      }
      const discountId = await DiscountModel.findOne({
        _id: data.discountId,
      });
      const cart = await CartItemsModel.findById(_id);
      const productId = await ProductModel.findById(cart.productId);
      // * PRODUCT PRICE *
      const price = productId.price;
      // * CHECK IF USER ID EXISTS *
      if (userId) {
        // * CHECK IF DISCOUNT ID EXISTS *
        if (discountId) {
          // * UPDATED PRICE *
          const calcValue = (productId.price * discountId.percentage) / 100;
          const updatedPrice = price - calcValue;
          data = {
            ...data,
            userId,
            price,
            updatedPrice,
          };
        } else {
          await CartItemsModel.findByIdAndUpdate(
            { _id },
            { $unset: { discountId: 1 } }
          );
          // * UPDATED PRICE *
          const price = productId.price;
          const updatedPrice = price;
          data = {
            ...data,
            userId,
            price,
            updatedPrice,
          };
        }
        // * UPDATE CART DETAILS *
        const cart = await CartItemsModel.findOneAndUpdate(
          { _id },
          { $set: data },
          { new: 1, runValidators: true }
        );
        if (cart) {
          res.send(cart);
        } else {
          res.status(400).json({
            message: "Cart Not Found!",
          });
        }
      } else {
        return res.status(400).json({
          message: `User Not found!`,
        });
      }
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  }

  // *********** DELETE CART ITEMS ***********
  async deleteCartItem(req, res) {
    try {
      const _id = parseInt(req.params.cartId);
      const cart = await CartItemsModel.findByIdAndDelete(_id);
      if (cart) {
        res.send(cart);
      } else {
        res.status(400).json({
          message: "Cart Item Not Found!",
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  // *********** DELETE CART ***********
  async deleteCart(req, res) {
    try {
      const userId = req.decoded._id;
      console.log(userId);
      const cart = await CartItemsModel.deleteMany({ userId });
      if (cart) {
        res.json({
          message: `Your cart has been empty!`,
        });
      } else {
        res.json({
          message: `No results found!`,
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = CartDomain;
