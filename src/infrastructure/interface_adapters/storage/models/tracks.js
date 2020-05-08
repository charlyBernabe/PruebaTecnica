const Sequelize = require('../../../frameworks_drivers/database/sequelize')

const Model = Sequelize.Model;
class Tracks extends Model {}
Tracks.init({
    // attributes
    id: {
        type: Sequelize.INTEGER,

    },
    title: {
        type: Sequelize.STRING

    },
    artist: {
        type: Sequelize.STRING

    },
    isrc: {
        type: Sequelize.STRING

    },
    albumid: {
        type: Sequelize.STRING

    },
    isrc: {
        type: Sequelize.STRING

    }
}, {
    sequelize,
    modelName: 'tracks'
        // options
});