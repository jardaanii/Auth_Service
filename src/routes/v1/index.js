const express = require("express");
const UserController = require("../../controllers/user-controller");
const { AuthRequestValidators } = require("../../middlewares/index");
const router = express.Router();

router.post(
  "/signup",
  AuthRequestValidators.validateUserAuth,
  UserController.create
);

router.post(
  "/signin",
  AuthRequestValidators.validateUserAuth,
  UserController.signIn
);

router.get("/isAuthenticated", UserController.isAuthenticated);
router.get(
  "/isAdmin",
  AuthRequestValidators.validateIsAdminRequest,
  UserController.isAdmin
);

router.get("/profile/:id", UserController.get);

module.exports = router;
