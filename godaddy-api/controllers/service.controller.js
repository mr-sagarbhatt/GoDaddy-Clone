const ServiceDomain = require("../domains/service.domain");
const express = require("express");
const router = express.Router();

class ServiceController {
  // *********** GET ALL SERVICES ***********
  static getAllServices(req, res) {
    const serviceDomain = new ServiceDomain();
    serviceDomain.getAllServices(req, res);
  }
  // *********** CREATE SERVICE ***********
  static createService(req, res) {
    const serviceDomain = new ServiceDomain();
    serviceDomain.createService(req, res);
  }
  // *********** UPDATE SERVICE ***********
  static updateService(req, res) {
    const serviceDomain = new ServiceDomain();
    serviceDomain.updateService(req, res);
  }
  // *********** DELETE/DEACTIVATE SERVICE ***********
  static deleteService(req, res) {
    const serviceDomain = new ServiceDomain();
    serviceDomain.deleteService(req, res);
  }
  // *********** ACTIVATE SERVICE ***********
  static activateService(req, res) {
    const serviceDomain = new ServiceDomain();
    serviceDomain.activateService(req, res);
  }
}

// *********** SERVICE ROUTES ***********
router.get("/", ServiceController.getAllServices);
router.post("/", ServiceController.createService);
router.put("/:serviceId", ServiceController.updateService);
router.delete("/:serviceId", ServiceController.deleteService);
router.put("/activate/:serviceId", ServiceController.activateService);

module.exports = router;
