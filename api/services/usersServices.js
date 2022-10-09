const { User } = require("../models");

class UsersServices {
  static async serviceResgisterUser(req) {
    try {
      const res = await User.create(req.body);
      const data = res.dataValues;
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  static async serviceLogin(req) {
    try {
      const user = await User.findOne({
        where: { email: req.body.email },
        attributes: {
          exclude: ["password", "salt"],
        },
      });
      return user;
    } catch (err) {
      console.error(err);
    }
  }

  static async serviceGetMe(req) {
    try {
      return req.user ? req.user : null;
    } catch (err) {
      console.error(err);
    }
  }

  static async serviceGetUsers() {
    try {
      const users = await User.findAll();
      return users;
    } catch (err) {
      console.error(err);
    }
  }

  static async serviceGetOneUser(req, next) {
    try {
      const user = await User.findOne({
        where: {
          id: req.params.id,
        },
      });
      return user;
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = UsersServices;
