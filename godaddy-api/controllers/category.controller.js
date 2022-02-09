const CategoryDomain = require("../domains/category.domain");
const express = require("express");
const router = express.Router();

class CategoryController {
  // *********** GET ALL CATEGORIES ***********
  static getAllCategories(req, res) {
    const categoryDomain = new CategoryDomain();
    categoryDomain.getAllCategories(req, res);
  }
  // *********** CREATE CATEGORY ***********
  static createCategory(req, res) {
    const categoryDomain = new CategoryDomain();
    categoryDomain.createCategory(req, res);
  }
  // *********** UPDATE CATEGORY ***********
  static updateCategory(req, res) {
    const categoryDomain = new CategoryDomain();
    categoryDomain.updateCategory(req, res);
  }
  // *********** DELETE/DEACTIVATE CATEGORY ***********
  static deleteCategory(req, res) {
    const categoryDomain = new CategoryDomain();
    categoryDomain.deleteCategory(req, res);
  }
  // *********** ACTIVATE CATEGORY ***********
  static activateCategory(req, res) {
    const categoryDomain = new CategoryDomain();
    categoryDomain.activateCategory(req, res);
  }
}

// *********** CATEGORY ROUTES ***********
router.get("/", CategoryController.getAllCategories);
router.post("/", CategoryController.createCategory);
router.put("/:categoryId", CategoryController.updateCategory);
router.delete("/:categoryId", CategoryController.deleteCategory);
router.put("/activate/:categoryId", CategoryController.activateCategory);

module.exports = router;
