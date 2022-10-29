const express = require("express");
const router = express.Router();

router.post("/alert", (req, res) => {
  try {
    console.log(req.body);
    console.log(req.headers);
  } catch (error) {
    res.status(500).send({
      status: 0,
      message: "Internal Server Error.",
    });
  }
});

module.exports = router;
