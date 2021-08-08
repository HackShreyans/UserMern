const express = require("express");
const {
  addUser,
  deleteUser,
  findUser,
  updateUser,
  loginUser
} = require("../Controllers/signupController");
const router = express.Router();

router.post("/User/api/post", addUser);
router.get("/User/api/get", findUser);
router.put("/User/api/put/:id", updateUser);
router.delete("/User/api/delete/:id", deleteUser);

//login user route
router.post("/User/api/login", loginUser);

module.exports = router;
