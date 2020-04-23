const router = require("express").Router();

const { requiredSignin, isAuth } = require("../controllers/auth");
const { create } = require("../controllers/order");
const { userById, addOrderToUserHistory } = require("../controllers/user");

router.post(
  "/order/create/:userId",
  requiredSignin,
  isAuth,
  addOrderToUserHistory,
  create
);

router.param("userId", userById);

module.exports = router;
