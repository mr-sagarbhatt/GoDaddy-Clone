const ProfileModel = require("../models/profile.model");
const { validateUserProfile } = require("../utils/joi.validations");

class ProfileDomain {
  // *********** GET USER PROFILE ***********
  async getUserProfile(req, res) {
    try {
      const _id = parseInt(req.params.userId);
      const profile = await ProfileModel.find({
        userId: _id,
        isActive: 1,
      }).populate("userId", "-_id -__v");
      if (profile.length > 0) {
        res.send(profile);
      } else {
        res.json(`No results found!`);
      }
    } catch (err) {
      console.log(err);
    }
  }

  // *********** UPDATE USER PROFILE ***********
  async updateUserProfile(req, res) {
    try {
      const _id = parseInt(req.params.userId);
      const data = req.body;
      // * VALIDATE BODY DATA *
      const { error } = validateUserProfile(data);
      if (error) {
        return res.status(400).json({
          message: error.details[0].message,
        });
      }
      // * UPDATE PROFILE *
      const profile = await ProfileModel.findOneAndUpdate(
        { userId: _id, isActive: 1 },
        { $set: data },
        { new: 1, runValidators: true }
      ).populate("userId", "-_id -__v");
      if (profile) {
        res.send(profile);
      } else {
        res.status(400).json({
          message: "User Not Found!",
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = ProfileDomain;
