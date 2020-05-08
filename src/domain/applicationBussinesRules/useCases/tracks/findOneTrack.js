"use strict";
const findTrack = (repository) => async(req) => {
    try {
        let dbTransaction = await repository.findTrackByID(req.params.idTrack);
        if (dbTransaction.status === "Success" && dbTransaction.data.length > 0) {
            return {
                codigoResultado: 200,
                textoResultado: { data: dbTransaction.data, code: 200 }
            };
        } else {

            return {
                codigoResultado: 200,
                textoResultado: {
                    error: {
                        message: "Recurso no disponible",
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
                    message: "Ocurrio un error durante el proceso de busqueda",
                    code: 500
                }
            }
        };
    }
};

module.exports = findTrack;