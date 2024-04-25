const router = require('express').Router();
const apiRoutes = require('./api');
router.use('/api', apiRoutes);

const homeRouteRoutes = require('./landingpageRoutes');
router.use('/', homeRouteRoutes);

module.exports = router;