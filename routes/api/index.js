const router = require("express").Router();
const waterRoutes = require("./water");

// Book routes
router.use("/water", waterRoutes);

module.exports = router;
