const DiscountDomain = require("../domains/discount.domain");
const express = require("express");
const router = express.Router();

class DiscountController {
  // *********** GET ALL DISCOUNTS ***********
  static getAllDiscounts(req, res) {
    const discountDomain = new DiscountDomain();
    discountDomain.getAllDiscounts(req, res);
  }
  // *********** GET DISCOUNTS BY PRODUCT ***********
  static getProductDiscounts(req, res) {
    const discountDomain = new DiscountDomain();
    discountDomain.getProductDiscounts(req, res);
  }
  // *********** CREATE DISCOUNT ***********
  static createDiscount(req, res) {
    const discountDomain = new DiscountDomain();
    discountDomain.createDiscount(req, res);
  }
  // *********** UPDATE DISCOUNT ***********
  static updateDiscount(req, res) {
    const discountDomain = new DiscountDomain();
    discountDomain.updateDiscount(req, res);
  }
  // *********** DELETE/DEACTIVATE DISCOUNT ***********
  static deleteDiscount(req, res) {
    const discountDomain = new DiscountDomain();
    discountDomain.deleteDiscount(req, res);
  }
  // *********** ACTIVATE DISCOUNT ***********
  static activateDiscount(req, res) {
    const discountDomain = new DiscountDomain();
    discountDomain.activateDiscount(req, res);
  }
}

// *********** DISCOUNT ROUTES ***********
router.get("/", DiscountController.getAllDiscounts);
router.get("/:productId", DiscountController.getProductDiscounts);
router.post("/", DiscountController.createDiscount);
router.put("/:discountId", DiscountController.updateDiscount);
router.delete("/:discountId", DiscountController.deleteDiscount);
router.put("/activate/:discountId", DiscountController.activateDiscount);

module.exports = router;
