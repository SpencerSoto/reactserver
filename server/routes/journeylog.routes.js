const express = require("express");
const router = express.Router();
const Journeylog = require("../models/JourneyLogs.model");
//const Popup = require('popups');

router.get("/", (req, res, next) => {
  Journeylog.find().then((journeylogsFromDB) => {
    res.status(200).json({ journeylogs: journeylogsFromDB });
  });
});

// CREATE
router.post("/", (req, res, next) => {
  Journeylog.create({
    title: req.body.title,
    description: req.body.description,
    // image: req.body.image
  })
    .then((journeylog) => {
      //Popup.alert({ content: 'You have successfully added a journeylog!'})
      res.json({ journeylog });
    })
    .catch((err) => {
      console.log(err);
      res.json({ err });
    });
});

module.exports = router;
