var express = require('express');
var bodyParser = require('body-parser');

var axios = require('axios');
var app = express();

app.use(bodyParser.json());

app.all('/token', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});
app.post('/token', function (req, res) {
    console.log(req.body);

    if (req.body.key === "admin" && req.body.secret === "admin") {
        res.status(200).send({ token: "AAAAAAAAAAAAAAAAAAAAAL2YzwAAAAAAlBwMTVVV1TaNg5vSzIFWlLrgM%2FY%3DAl8JAeE1zScZD7DysEKv8A74ey9ONjvtrzHSlPQPLsOu2CzCpw"});
    }

    res.status(403).send();
});

app.listen(5000, function () {
    console.log('Example app listening on port 5000!');
});