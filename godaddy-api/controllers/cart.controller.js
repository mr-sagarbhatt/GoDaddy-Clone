const CartDomain = require("../domains/cart.domain");
const express = require("express");
const router = express.Router();

class CartController {
  // *********** GET USER CART ***********
  static getUserCart(req, res) {
    const cartDomain = new CartDomain();
    cartDomain.getUserCart(req, res);
  }
  // *********** CREATE CART ***********
  static addToCart(req, res) {
    const cartDomain = new CartDomain();
    cartDomain.addToCart(req, res);
  }
  // *********** UPDATE CART ***********
  static updateCartItem(req, res) {
    const cartDomain = new CartDomain();
    cartDomain.updateCartItem(req, res);
  }
  // *********** DELETE CART ITEMS ***********
  static deleteCartItem(req, res) {
    const cartDomain = new CartDomain();
    cartDomain.deleteCartItem(req, res);
  }
  // *********** DELETE CART ***********
  static deleteCart(req, res) {
    const cartDomain = new CartDomain();
    cartDomain.deleteCart(req, res);
  }
}

// *********** CART  ROUTES ***********
router.get("/", CartController.getUserCart);
router.post("/", CartController.addToCart);
router.put("/:cartId", CartController.updateCartItem);
router.delete("/:cartId", CartController.deleteCartItem);
router.delete("/", CartController.deleteCart);

module.exports = router;
