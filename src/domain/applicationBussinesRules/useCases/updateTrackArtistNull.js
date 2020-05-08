"use strict";
const updateTrackArtistNull = (repository) => async() => {
    try {
        let dbTransaction = await repository.getAllTrackWithArtistNull();
        if (dbTransaction.status === "Success") {
            console.log('dbTransaction :>> ', dbTransaction);
            let dataNew = [];

            for (let i = 0; i < dbTransaction.data.length; i++) {
                let update = await repository.updateTrackWithoutArtist(dbTransaction.data[i].userid, dbTransaction.data[i].id);
                let trackWithArtist = await repository.getTrackById(dbTransaction.data[i].id);
                console.log('trackWithArtist.data :>> ', trackWithArtist.data);
                dataNew.push(trackWithArtist.data)
            }


            return {
                codigoResultado: 200,
                textoResultado: { data: dataNew, code: 200 }
            };
        } else {

            return {
                codigoResultado: 200,
                message: "Ocurrio un error durante el proceso de busqueda de albums sin artista",
                textoResultado: {
                    error: {
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