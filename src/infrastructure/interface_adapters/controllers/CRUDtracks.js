'use strict';
const mysql = require('../../frameworks_drivers/database/mysql');
const repositoryFind = require('../../../domain/domainBussinesRules/repositories/findExecuteInterface')
const repositoryFindDB = require('../storage/findExecute')
const repository = new repositoryFind(new repositoryFindDB(mysql));
const getTracks = require('../../../domain/applicationBussinesRules/useCases/tracks/findAllTrack')(repository);

exports.getTracks = function(req, res, next) {
    getTracks(req).then(data => {
            console.log('data controller:>> ');
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