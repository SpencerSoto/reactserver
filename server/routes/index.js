const router = require("express").Router();
const authRoutes = require("./auth.routes");
const journeylogRoutes = require("./journeylog.routes");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// You put the next routes here 👇
router.use("/auth", authRoutes);

router.use("/journeylog", journeylogRoutes);

module.exports = router;
