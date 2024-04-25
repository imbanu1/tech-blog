const router = require("express").Router();
const apiRoutes = require("./api");
const landingpageRoutes = require("../landingpageRoutes");

router.use("/", landingpageRoutes);
router.use("/api", apiRoutes);

module.exports = router;