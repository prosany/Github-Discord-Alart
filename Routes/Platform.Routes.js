const express = require("express");
const router = express.Router();

router
  .route("/alert")
  .post((req, res) => {
    try {
      const {
        repository,
        updated_at,
        language,
        pusher,
        sender,
        commits,
        modified,
      } = req.body;
      // repository.name
      // pusher.name
      // sender.avatar_url
      // sender.login
      // sender.followers_url
      // commits.message
      console.log(req.body);
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
