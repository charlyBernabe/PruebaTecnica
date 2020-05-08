'use strict';
const mysql = require('../../frameworks_drivers/database/mysql');
const repositoryFind = require('../../../domain/domainBussinesRules/repositories/findExecuteInterface')
const repositoryFindDB = require('../storage/findExecute')
const repository = new repositoryFind(new repositoryFindDB(mysql));
const getTracks = require('../../../domain/applicationBussinesRules/useCases/findTrack')(repository);
const getAllAlbumsFilter = require('../../../domain/applicationBussinesRules/useCases/getAllAlbumsFilter')(repository);
const updateTracksWithoutArtist = require('../../../domain/applicationBussinesRules/useCases/updateTrackArtistNull')(repository);
const getAndUpdateAlbums = require('../../../domain/applicationBussinesRules/useCases/getAndUpdateAlbums')(repository);
const getAndUpdateUsers = require('../../../domain/applicationBussinesRules/useCases/getAndUpdateUser')(repository);
const getTracksDifferents = require('../../../domain/applicationBussinesRules/useCases/getTracksDifferents')(repository);
exports.getTracks = function(req, res, next) {
    getTracks().then(data => {
            console.log('data controller:>> ', data);
            if (data.textoResultado.error) {
                res.status(200).send({
                    "code": data.textoResultado.error.code,
                    "data": data.textoResultado.error.message
                });
            } else {
                res.status(200).send({
                    "code": data.codigoResultado,
                    "data": data.textoResultado.data
                });
            }
        })
        .catch(err => {
            res.status(400).send({ error: err })
        });
}

exports.getAllAlbumsFilter = function(req, res, next) {
    getAllAlbumsFilter().then(data => {
            console.log('data controller:>> ', data);
            if (data.textoResultado.error) {
                res.status(200).send({
                    "code": data.textoResultado.error.code,
                    "data": data.textoResultado.error.message
                });
            } else {
                res.status(200).send({
                    "code": data.codigoResultado,
                    "data": data.textoResultado.data
                });
            }

        })
        .catch(err => {
            res.status(400).send({ error: err })
        });
}

exports.updateTracksWithoutArtist = function(req, res, next) {
    updateTracksWithoutArtist().then(data => {
            console.log('data controller:>> ', data);
            if (data.textoResultado.error) {
                res.status(200).send({
                    "code": data.textoResultado.error.code,
                    "data": data.textoResultado.error.message
                });
            } else {
                res.status(200).send({
                    "code": data.codigoResultado,
                    "data": data.textoResultado.data
                });
            }

        })
        .catch(err => {
            res.status(400).send({ error: err })
        });
}

exports.getAndUpdateAlbums = function(req, res, next) {
    getAndUpdateAlbums().then(data => {
            console.log('data controller:>> ', data);
            if (data.textoResultado.error) {
                res.status(200).send({
                    "code": data.textoResultado.error.code,
                    "data": data.textoResultado.error.message
                });
            } else {
                res.status(200).send({
                    "code": data.codigoResultado,
                    "data": data.textoResultado.data
                });
            }

        })
        .catch(err => {
            res.status(400).send({ error: err })
        });
}

exports.getAndUpdateUsers = function(req, res, next) {
    getAndUpdateUsers().then(data => {
            console.log('data controller:>> ', data);
            if (data.textoResultado.error) {
                res.status(200).send({
                    "code": data.textoResultado.error.code,
                    "data": data.textoResultado.error.message
                });
            } else {
                res.status(200).send({
                    "code": data.codigoResultado,
                    "data": data.textoResultado.data
                });
            }

        })
        .catch(err => {
            res.status(400).send({ error: err })
        });
}


exports.getTracksDifferents = function(req, res, next) {
    getTracksDifferents().then(data => {
            console.log('data controller:>> ', data);
            if (data.textoResultado.error) {
                res.status(200).send({
                    "code": data.textoResultado.error.code,
                    "data": data.textoResultado.error.message
                });
            } else {
                res.status(200).send({
                    "code": data.codigoResultado,
                    "data": data.textoResultado.data
                });
            }

        })
        .catch(err => {
            res.status(400).send({ error: err })
        });
}