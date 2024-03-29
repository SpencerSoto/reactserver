const router = require("express").Router();
const Pin = require("../models/Pin.model");

router.post("/", async (req, res) => {
  const newPin = new Pin(req.body);
  try {
    const savedPin = await newPin.save();
    res.status(200).json(savedPin);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const pins = await Pin.find();
    res.status(200).json(pins);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/:id/delete", (req, res, next) => {
  Pin.findByIdAndRemove(req.params.id).then((_) => {
    res.status(200).json({ message: "Successfully removed the pin" });
  });
});

module.exports = router;