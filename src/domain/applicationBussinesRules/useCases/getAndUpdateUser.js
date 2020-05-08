"use strict";
const getAndUpdateUser = (repository) => async() => {
    try {
        let dbTransaction = await repository.getUsersWithTracksAndAlbums();
        if (dbTransaction.status === "Success") {
            console.log('dbTransaction :>> ', dbTransaction);
            let setUsers = []
            for (let item of dbTransaction.data) {
                setUsers.push(item)
            }
            let allUsers = await repository.getAllUsers();
            if (allUsers.status == "Success") {
                let userRes = [];
                for (let i = 0; i < allUsers.data.length; i++) {
                    if (setUsers.find(element => element == parseInt(allUsers.data[i].id)) == undefined) {
                        allUsers.data[i].status = 0
                        userRes.push(allUsers.data[i]);
                        await repository.updateUserById(allUsers.data[i].id, ' status=0')
                    }
                }
                return {
                    codigoResultado: 200,
                    textoResultado: { data: userRes, code: 200 }
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

module.exports = getAndUpdateUser;