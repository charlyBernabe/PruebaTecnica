"use strict";
const findTrack = (repository, track) => async(req) => {
    try {
        let trackObject = new track(req.body.title, req.body.artist, req.body.isrc, req.body.albumid, req.body.genre, req.body.userid, req.body.status);
        let dbTransaction = await repository.persistTrack(trackObject);
        console.log('dbTransaction :>> ', dbTransaction);
        if (dbTransaction.status === "Success") {
            return {
                codigoResultado: 200,
                textoResultado: { data: trackObject, code: 200 }
            };
        } else {

            return {
                codigoResultado: 200,
                textoResultado: {
                    error: {
                        message: "Ocurrio un error durante el proceso de guardado en el track",
                        code: 400
                    }
                }
            };
        }
    } catch (err) {
        //Internal Server Error, regresar error?
        console.log('err :>> ', err);
        return {
            codigoResultado: 200,
            textoResultado: {
                error: {
                    message: "Ocurrio un error durante el proceso de guardado",
                    code: 500
                }
            }
        };
    }
};

module.exports = findTrack;