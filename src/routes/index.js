const express = require("express");
const router = express.Router();
const {addTwoNumbers} = require("../controller/addition");
const {checkAuth} = require("../middlewares/auth");
const { generateJWTToken } = require("../controller/generate-jwt-token");
const { validateQueryParams } = require("../middlewares/validate-request");

router.get("/add", checkAuth, validateQueryParams, addTwoNumbers);
router.post("/auth", generateJWTToken);

module.exports = router;