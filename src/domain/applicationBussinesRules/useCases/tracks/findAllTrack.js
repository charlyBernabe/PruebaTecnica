"use strict";
const findTrack = (repository) => async(req) => {
    try {
        console.log('req :>> ', req.query);
        //search = cuando & order = title & by = desc & username = Desire & status = 0
        let expresion = ``;
        let order = ``;
        expresion = Object.keys(req.query).length > 0 ? ' WHERE ' : '';
        if (req.query["search"]) {
            expresion = expresion + ` (tracks.title LIKE "%${req.query["search"]}%" or tracks.artist LIKE "%${req.query["search"]}%" or
             tracks.isrc LIKE "%${req.query["search"]}%" or tracks.genre LIKE "%${req.query["search"]}%" or users.name LIKE "%${req.query["search"]}%" )`
        }
        let and = ''
        if (req.query["search"]) {
            and = ' and '
        }
        expresion += req.query["username"] != undefined ? ` ${and} users.name="${req.query["username"]}"` : '';
        if (req.query["username"]) {
            and = ' and '
        }
        expresion += req.query["status"] != undefined ? ` ${and} tracks.status="${req.query["status"]}"` : '';
        order = req.query["order"] != undefined ? ` order by ${req.query["order"]}` : '';
        order += req.query["by"] != undefined ? `  ${req.query["by"]}` : '';
        console.log('order', order);
        let dbTransaction = await repository.trackAllList(expresion, order);
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
                        message: "Ocurrio un error durante el proceso de busqueda",
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