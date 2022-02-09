const BillingDomain = require("../domains/billing.domain");
const express = require("express");
const router = express.Router();

class BillingController {
  // *********** GET ALL BILLS ***********
  static getAllBills(req, res) {
    const billingDomain = new BillingDomain();
    billingDomain.getAllBills(req, res);
  }
  // *********** CREATE BILL ***********
  static createBill(req, res) {
    const billingDomain = new BillingDomain();
    billingDomain.createBill(req, res);
  }
  // *********** UPDATE BILL ***********
  static updateBill(req, res) {
    const billingDomain = new BillingDomain();
    billingDomain.updateBill(req, res);
  }
  // *********** DELETE BILL ***********
  static deleteBill(req, res) {
    const billingDomain = new BillingDomain();
    billingDomain.deleteBill(req, res);
  }
}

// *********** BILLING ROUTES ***********
router.get("/", BillingController.getAllBills);
router.post("/", BillingController.createBill);
router.put("/:billId", BillingController.updateBill);
router.delete("/:billId", BillingController.deleteBill);

module.exports = router;
