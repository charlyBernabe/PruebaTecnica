'use strict';

var express = require('express'),
    router = express.Router(); //Routing;

const queryFinds = require('../../interface_adapters/controllers/queryFinds');

/** Vistas  */
router.get('/oneView', queryFinds.getTracks);
router.get('/twoView', queryFinds.getAllAlbumsFilter);
router.get('/threeView', queryFinds.updateTracksWithoutArtist);
router.get('/fourView', queryFinds.getAndUpdateAlbums);
router.get('/fiveView', queryFinds.getAndUpdateUsers);
router.get('/sixView', queryFinds.getTracksDifferents);


/**CRUDS */

router.get('/fiveView', queryFinds.getAndUpdateUsers);

module.exports = router;