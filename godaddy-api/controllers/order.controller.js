const OrderDomain = require("../domains/order.domain");
const express = require("express");
const router = express.Router();

class OrderController {
  // *********** GET ALL ORDER ***********
  static getAllOrder(req, res) {
    const orderDomain = new OrderDomain();
    orderDomain.getAllOrder(req, res);
  }
  // *********** GET ORDER BY ORDER NO ***********
  static getOrderByNo(req, res) {
    const orderDomain = new OrderDomain();
    orderDomain.getOrderByNo(req, res);
  }
  // *********** CREATE ORDER ***********
  static createOrder(req, res) {
    const orderDomain = new OrderDomain();
    orderDomain.createOrder(req, res);
  }
  // *********** UPDATE ORDER ***********
  static updateOrder(req, res) {
    const orderDomain = new OrderDomain();
    orderDomain.updateOrder(req, res);
  }
  // *********** DELETE ORDER ***********
  static deleteOrder(req, res) {
    const orderDomain = new OrderDomain();
    orderDomain.deleteOrder(req, res);
  }
}

// *********** ORDER  ROUTES ***********
router.get("/", OrderController.getAllOrder);
router.get("/:orderNo", OrderController.getOrderByNo);
router.post("/", OrderController.createOrder);
router.put("/:orderId", OrderController.updateOrder);
router.delete("/:orderId", OrderController.deleteOrder);

module.exports = router;
