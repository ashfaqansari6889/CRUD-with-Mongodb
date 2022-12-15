const mongoose = require("../config/db");
const userModel = require("../models/user.model");

module.exports = {
  create: (req, res) => {
      const { first_name , last_name , gender , email , password , number } = req.body;

      const userData = new userModel({ first_name : first_name, last_name : last_name , gender : gender , email : email , password : password , number :number });

      userData.save((error, results, fields) => {
        if (error) {
          res(error);
        }
        return res(null, results);
      }
    );
  },

  getUserByUserEmail: (email, callBack) => {

    // pool.query(
    //   `select * from registration where email = ?`,
    //   [email],
    //   (error, results, fields) => {
    //     if (error) {
    //       callBack(error);
    //     }
    //     return callBack(null, results[0]);
    //   }
    // );
  },
};
