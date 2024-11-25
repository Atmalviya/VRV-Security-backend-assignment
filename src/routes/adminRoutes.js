const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { authenticateToken, checkPermission } = require("../middleware/auth");
const { PERMISSIONS } = require("../constants/roles");

router.get(
  "/",
  authenticateToken,
  checkPermission(PERMISSIONS.MANAGE_USERS),
  adminController.getAllUsers,
);

router.patch(
  "/role",
  authenticateToken,
  checkPermission(PERMISSIONS.MANAGE_USERS),
  adminController.updateUserRole,
);

module.exports = router;
