"use strict";
const deleteTrack = (repository) => async(req) => {
    try {

        let dbTransaction = await repository.deleteTrack(req.params['idTrack']);
        console.log('dbTransaction :>> ', dbTransaction);
        if (dbTransaction.status === "Success") {
            return {
                codigoResultado: 200,
                textoResultado: { data: "Track eliminado satisfactoriamente", code: 200 }
            };
        } else {
            return {
                codigoResultado: 200,
                textoResultado: {
                    error: {
                        message: "Ocurrio un error durante el proceso de eliminacion en el track",
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
                    message: "Ocurrio un error durante el proceso de eliminacion",
                    code: 500
                }
            }
        };
    }
};

module.exports = deleteTrack;