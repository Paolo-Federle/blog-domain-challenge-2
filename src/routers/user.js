const express = require("express");
const {
  createdUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  // createPost,
  // getPosts,
  // updatePost,
  // deletePost,
} = require("../controllers/user");
const router = express.Router();

router.post("/", createdUser)
router.get("/", getUsers)
router.get("/:id", getUserById)
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

// router.post("/:userId/posts", createPost);
// router.get("/:userId/posts", getPosts);
// router.put("/:userId/posts/:postId", updatePost);
// router.delete("/:userId/posts/:postId", deletePost);

module.exports = router;