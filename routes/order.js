const router = require("express").Router();

const { requiredSignin, isAuth } = require("../controllers/auth");
const { create } = require("../controllers/order");
const { userById } = require("../controllers/user");

router.post("/order/create/:userId", requiredSignin, isAuth, create);

router.param("userId", userById);

module.exports = router;
