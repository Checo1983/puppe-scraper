const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const testController = require('../controllers/test.controller');


// a simple test url to check that all of our files are communicating correctly.
router.post('/test', testController.test);
module.exports = router;