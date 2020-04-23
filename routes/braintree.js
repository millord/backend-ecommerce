const router = require("express").Router();

const { requiredSignin, isAuth } = require("../controllers/auth");
const { generateToken, processPayment } = require("../controllers/braintree");
const { userById } = require("../controllers/user");

router.get(
  "/braintree/getToken/:userId",
  requiredSignin,
  isAuth,
  generateToken
);

router.post(
  "/braintree/payment/:userId",
  requiredSignin,
  isAuth,
  processPayment
);

router.param("userId", userById);

module.exports = router;
