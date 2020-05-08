'use strict';

var express = require('express'),
    router = express.Router(); //Routing;

const queryFinds = require('../../interface_adapters/controllers/queryFinds');
const CRUDtracks = require('../../interface_adapters/controllers/CRUDtracks');

/** Vistas  */
router.get('/oneView', queryFinds.getTracks);
router.get('/twoView', queryFinds.getAllAlbumsFilter);
router.get('/threeView', queryFinds.updateTracksWithoutArtist);
router.get('/fourView', queryFinds.getAndUpdateAlbums);
router.get('/fiveView', queryFinds.getAndUpdateUsers);
router.get('/sixView', queryFinds.getTracksDifferents);


/**CRUDS */

router.get('/tracks', CRUDtracks.getTracks);

module.exports = router;