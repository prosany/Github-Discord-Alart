const express = require("express");
const router = express.Router();

router
  .route("/alert")
  .post((req, res) => {
    try {
      console.log(req.body);
      console.log(req.headers);
    } catch (error) {
      res.status(500).send({
        status: 0,
        message: "Internal Server Error.",
      });
    }
  })
  .get((req, res) => {
    try {
      res.status(200).send({
        status: 1,
        message: "Alert working!",
      });
    } catch (error) {
      res.status(500).send({
        status: 0,
        message: "Internal Server Error.",
      });
    }
  });

module.exports = router;
