'use strict';

var express = require('express'),
    router = express.Router(); //Routing;

const queryFinds = require('../../interface_adapters/controllers/queryFinds');


router.get('/oneView', queryFinds.getTracks);
router.get('/twoView', queryFinds.getAllAlbumsFilter);

module.exports = router;