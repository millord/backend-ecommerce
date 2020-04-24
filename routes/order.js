const router = require("express").Router();

const { requiredSignin, isAuth, isAdmin } = require("../controllers/auth");
const {
  create,
  listOrders,
  getStatusValues,
  updateOrderStatus,
  orderById,
  purchaseHistory,
} = require("../controllers/order");
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

router.get(
  "/order/status-values/:userId",
  requiredSignin,
  isAuth,
  isAdmin,
  getStatusValues
);

router.put(
  "/order/:orderId/status/:userId",
  requiredSignin,
  isAuth,
  isAdmin,
  updateOrderStatus
);

router.get("/orders/by/user/:userId", requiredSignin, isAuth, purchaseHistory);

router.param("orderId", orderById);
router.param("userId", userById);

module.exports = router;
