var express = require('express'),
    app = express();
app.use(express.static('public'));
require('dotenv').config();
port = process.env.PORT;


//api version
app.get('/api', (req, res) => {
    res.type('application/json');
    res.status(200).send({
        name: 'Prueba tecnica KABAK',
        version: '1.0.0',
    });
});
let queryExecutes = require("./src/infrastructure/server/routes/findExecute")
app.use('/api', queryExecutes);
app.use(function(req, res) {
    res.status(404).send({
        "errors": [{
            "code": 404,
            "message": "Not found.",
            "description": "There is no resource behind the URI: " + req.originalUrl
        }]
    })
});


app.listen(process.env.port, () => console.log('Server running on port 9000!'))