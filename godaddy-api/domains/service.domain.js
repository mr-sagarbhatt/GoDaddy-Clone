const ServiceModel = require("../models/services.model");
const { validateService } = require("../utils/joi.validations");

class ServiceDomain {
  // *********** GET ALL ACTIVE SERVICES ***********
  async getAllServices(req, res) {
    try {
      const service = await ServiceModel.find({ isActive: 1 });
      if (service.length > 0) {
        res.send(service);
      } else {
        res.json({
          message: `No results found!`,
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  // *********** CREATE SERVICE ***********
  async createService(req, res) {
    try {
      const data = req.body;
      // * VALIDATE BODY DATA *
      const { error } = validateService(data);
      if (error) {
        return res.status(400).json({
          message: error.details[0].message,
        });
      }
      // * SAVE SERVICE *
      const service = new ServiceModel(data);
      const saveService = await service.save();
      if (saveService) {
        res.send(saveService);
      } else {
        res.status(400).json({
          message: "Please try again later!",
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  // *********** UPDATE SERVICE ***********
  async updateService(req, res) {
    try {
      const _id = parseInt(req.params.serviceId);
      const data = req.body;
      // * VALIDATE BODY DATA *
      const { error } = validateService(data);
      if (error) {
        return res.status(400).json({
          message: error.details[0].message,
        });
      }
      // * UPDATE SERVICE *
      const service = await ServiceModel.findOneAndUpdate(
        { _id, isActive: 1 },
        { $set: data },
        { new: 1, runValidators: true }
      );
      if (service) {
        res.send(service);
      } else {
        res.status(400).json({
          message: "Service Not Found!",
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  // *********** DELETE SERVICE ***********
  async deleteService(req, res) {
    try {
      const _id = parseInt(req.params.serviceId);
      const service = await ServiceModel.findByIdAndUpdate(
        { _id },
        { $set: { isActive: 0 } },
        { new: 1 }
      );
      if (service) {
        res.send(service);
      } else {
        res.status(400).json({
          message: "Service Not Found!",
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  // *********** ACTIVATE SERVICE ***********
  async activateService(req, res) {
    try {
      const _id = parseInt(req.params.serviceId);
      const service = await ServiceModel.findByIdAndUpdate(
        { _id },
        { $set: { isActive: 1 } },
        { new: 1 }
      );
      if (service) {
        res.send(service);
      } else {
        res.status(400).json({
          message: "Service Not Found!",
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = ServiceDomain;
