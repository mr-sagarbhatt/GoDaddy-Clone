const ProductModel = require("../models/product.model");
const SubCategoryModel = require("../models/subcategory.model");
const DiscountModel = require("../models/discount.model");
const { validateProduct } = require("../utils/joi.validations");

class ProductDomain {
  // *********** GET ALL ACTIVE PRODUCT ***********
  async getAllProducts(req, res) {
    try {
      const product = await ProductModel.find({ isActive: 1 }).populate({
        path: "subCategoryId",
      });
      if (product.length > 0) {
        res.send(product);
      } else {
        res.json({
          message: `No results found!`,
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  // *********** CREATE PRODUCT ***********
  async createProduct(req, res) {
    try {
      let data = req.body;
      // * VALIDATE BODY DATA *
      const { error } = validateProduct(data);
      if (error) {
        return res.status(400).json({
          message: error.details[0].message,
        });
      }
      // * CHECK IF SUB CATEGORY ID EXISTS *
      const subCategoryId = await SubCategoryModel.findOne({
        _id: data.subCategoryId,
      });
      if (subCategoryId) {
        // if (data.discountId) {
        // * CHECK IF DISCOUNT ID EXISTS *
        //   const discount = await DiscountModel.findOne({
        //     _id: data.discountId,
        //   });
        //   if (discount) {
        //     const discountValue = (data.price * discount.percentage) / 100;
        //     const updatedPrice = data.price - discountValue;
        //     data = {
        //       ...data,
        //       updatedPrice,
        //     };
        //   } else {
        //     return res.status(400).json({
        //       message: `Discount Not found!`,
        //     });
        //   }
        // } else {
        //   data = {
        //     ...data,
        //     updatedPrice: data.price,
        //   };
        // }
        // * SAVE PRODUCT *
        const product = new ProductModel(data);
        const saveProduct = await product.save();
        if (saveProduct) {
          res.send(saveProduct);
        } else {
          res.status(400).json({
            message: "Please try again later!",
          });
        }
      } else {
        return res.status(400).json({
          message: `Sub Category Not found!`,
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  // *********** UPDATE PRODUCT ***********
  async updateProduct(req, res) {
    try {
      const _id = parseInt(req.params.productId);
      let data = req.body;
      // * VALIDATE BODY DATA *
      const { error } = validateProduct(data);
      if (error) {
        return res.status(400).json({
          message: error.details[0].message,
        });
      }
      // * CHECK IF SUB CATEGORY ID EXISTS *
      const subCategoryId = await SubCategoryModel.findOne({
        _id: data.subCategoryId,
      });
      if (subCategoryId) {
        // if (data.discountId) {
        // * CHECK IF DISCOUNT ID EXISTS *
        //   const discount = await DiscountModel.findOne({
        //     _id: data.discountId,
        //   });
        //   if (discount) {
        //     const discountValue = (data.price * discount.percentage) / 100;
        //     const updatedPrice = data.price - discountValue;
        //     data = {
        //       ...data,
        //       updatedPrice,
        //     };
        //   } else {
        //     return res.status(400).json({
        //       message: `Discount Not found!`,
        //     });
        //   }
        // } else {
        //   data = {
        //     ...data,
        //     updatedPrice: data.price,
        //   };
        // }
        // * UPDATE PRODUCT *
        const product = await ProductModel.findOneAndUpdate(
          { _id, isActive: 1 },
          { $set: data },
          { new: 1, runValidators: true }
        );
        if (product) {
          res.send(product);
        } else {
          res.status(400).json({
            message: "Product Not Found!",
          });
        }
      } else {
        return res.status(400).json({
          message: `Sub Category Not found!`,
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  // *********** DELETE/DEACTIVATE PRODUCT ***********
  async deleteProduct(req, res) {
    try {
      const _id = parseInt(req.params.productId);
      const product = await ProductModel.findByIdAndUpdate(
        { _id },
        { $set: { isActive: 0 } },
        { new: 1 }
      );
      if (product) {
        res.send(product);
      } else {
        res.status(400).json({
          message: "Product Not Found!",
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  // *********** ACTIVATE PRODUCT ***********
  async activateProduct(req, res) {
    try {
      const _id = parseInt(req.params.productId);
      const product = await ProductModel.findByIdAndUpdate(
        { _id },
        { $set: { isActive: 1 } },
        { new: 1 }
      );
      if (product) {
        res.send(product);
      } else {
        res.status(400).json({
          message: "Product Not Found!",
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = ProductDomain;
