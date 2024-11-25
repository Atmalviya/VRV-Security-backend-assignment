const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const { authenticateToken, checkPermission } = require("../middleware/auth");
const { PERMISSIONS } = require("../constants/roles");

router.get(
  "/",
  authenticateToken,
  checkPermission(PERMISSIONS.READ),
  postController.getAllPosts,
);

router.post(
  "/",
  authenticateToken,
  checkPermission(PERMISSIONS.WRITE),
  postController.createPost,
);

router.delete(
  "/:id",
  authenticateToken,
  checkPermission(PERMISSIONS.DELETE),
  postController.deletePost,
);

module.exports = router;
