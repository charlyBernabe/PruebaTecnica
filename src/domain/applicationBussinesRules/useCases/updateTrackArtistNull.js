"use strict";
const updateTrackArtistNull = (repository) => async() => {
    try {
        let dbTransaction = await repository.getAllTrackWithArtistNull();
        if (dbTransaction.status === "Success") {


            return {
                codigoResultado: 200,
                textoResultado: { data: dbTransaction.data, code: 200 }
            };
        } else {

            return {
                codigoResultado: 200,
                textoResultado: {
                    error: {
                        message: "Ocurrio un error durante el proceso de busqueda de albums sin artista",
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
                    message: "Ocurrio un error durante el proceso de busqueda de albums sin artista",
                    code: 500
                }
            }
        };
    }
};

module.exports = updateTrackArtistNull;