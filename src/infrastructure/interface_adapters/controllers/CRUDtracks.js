'use strict';
const mysql = require('../../frameworks_drivers/database/mysql');
const repositoryFind = require('../../../domain/domainBussinesRules/repositories/findExecuteInterface')
const repositoryFindDB = require('../storage/findExecute')
const repository = new repositoryFind(new repositoryFindDB(mysql));
const getTracks = require('../../../domain/applicationBussinesRules/useCases/tracks/findAllTrack')(repository);
const objectTrack = require('../../../domain/domainBussinesRules/entities/track');

const persistTrack = require('../../../domain/applicationBussinesRules/useCases/tracks/createTrack')(repository, objectTrack);
const { check, validationResult } = require('express-validator');

exports.getTracks = function(req, res, next) {

    if (req.body) {
        persistTrack(req).then(data => {
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
    } else {
        res.status(400).send({ error: 'Cuerpo de solicitud no valido' })

    }

}

exports.persistTrack = function(req, res, next) {
    const errors = validationResult(req);
    console.log('errors :>> ', errors);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    persistTrack(req).then(data => {
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