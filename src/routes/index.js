const express = require("express");
const router = express.Router();
const addTwoNumbers = require("../controller/addition");
const checkAuth = require("../middlewares/auth");

router.get("/add", checkAuth, addTwoNumbers);

export default router;