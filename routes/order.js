const router = require("express").Router();

const { requiredSignin, isAuth, isAdmin } = require("../controllers/auth");
const { create, listOrders } = require("../controllers/order");
const { userById, addOrderToUserHistory } = require("../controllers/user");
const { decreaseQuantity } = require("../controllers/product");

router.post(
  "/order/create/:userId",
  requiredSignin,
  isAuth,
  addOrderToUserHistory,
  decreaseQuantity,
  create
);

router.get("/order/list/:userId", requiredSignin, isAuth, isAdmin, listOrders);

router.param("userId", userById);

module.exports = router;
