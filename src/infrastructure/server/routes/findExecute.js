'use strict';

var express = require('express'),
    router = express.Router(); //Routing;
const { check, validationResult } = require('express-validator');

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
router.post('/tracks', [
    // username must be an email
    check('title').isString(),
    // password must be at least 5 chars long
    check('artist').isString(),
    check('isrc').isString(),
    check('albumid').isInt(),
    check('genre').isString(),
    check('userid').isInt(),
    check('status').isInt()
], CRUDtracks.persistTrack);

module.exports = router;