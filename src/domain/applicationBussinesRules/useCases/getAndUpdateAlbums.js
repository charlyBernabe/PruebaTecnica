"use strict";
const getAndUpdateAlbums = (repository) => async() => {
    try {
        let dbTransaction = await repository.getAlbumsWithTrack();
        if (dbTransaction.status === "Success") {
            console.log('dbTransaction :>> ', dbTransaction);
            let albumsWithTracks = [];
            dbTransaction.data.forEach(element => {
                albumsWithTracks.push(element.albumid)
            });
            let allAlbums = await repository.getAllAlbums();
            if (allAlbums.status == "Success") {
                let albumsRes = [];
                for (let i = 0; i < allAlbums.data.length; i++) {
                    if (albumsWithTracks.find(element => element == parseInt(allAlbums.data[i].id)) == undefined) {
                        console.log('sin tracks :>>', allAlbums.data[i].id);
                        allAlbums.data[i].status = 0
                        albumsRes.push(allAlbums.data[i]);
                        await repository.updateAlbumById(allAlbums.data[i].id, ' status=0')
                    }
                }
                return {
                    codigoResultado: 200,
                    textoResultado: { data: albumsRes, code: 200 }
                };
            }

        } else {
            return {
                codigoResultado: 200,
                message: "Ocurrio un error durante el proceso de la busqueda",
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
                    message: "Ocurrio un error durante el proceso",
                    code: 500
                }
            }
        };
    }
};

module.exports = getAndUpdateAlbums;