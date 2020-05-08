"use strict";
const getAllAlbumsFilter = (repository) => async() => {
    try {
        let dbTransaction = await repository.getAllAlbumsFilter();
        if (dbTransaction.status === "Success") {
            console.log('succes case_use :>> ');
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

module.exports = getAllAlbumsFilter;