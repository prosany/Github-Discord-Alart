const express = require("express");
const loaclTime = require("../Helper/localTime");
const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.status(200).send({
      status: 1,
      message: "Server is working correctly.",
    });
  } catch (error) {
    res.status(500).send({
      status: 0,
      message: "Internal Server Error.",
    });
  }
});

router.get("/health", (req, res) => {
  try {
    res.status(200).send({
      status: 1,
      message: "Server is working correctly.",
      time: loaclTime(new Date()),
      uptime: process.uptime(),
    });
  } catch (error) {
    res.status(500).send({
      status: 0,
      message: "Internal Server Error.",
    });
  }
});

module.exports = router;
