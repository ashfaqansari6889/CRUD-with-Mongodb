const router = require("express").Router();
// const { checkToken } = require("../../auth/token_validation");

const {
  createUser,
  login,
} = require("../controllers/user.controller");

router.post("/createUser", createUser);
router.post("/login", login);

module.exports = router;