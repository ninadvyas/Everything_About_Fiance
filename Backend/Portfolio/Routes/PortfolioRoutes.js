const router = require('express').Router();

const portfolioControllers = require('../Controllers/PortfolioCtrl');

router.get('/display', portfolioControllers.displayStock);
router.post('/buy', portfolioControllers.buyStock);
router.post('/sell', portfolioControllers.sellStock);

module.exports = router;