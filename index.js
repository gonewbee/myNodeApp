/**
 * Created by zsy on 2015/12/27.
 */

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/ynote', function (req, res) {
    res.send('Hello ynote!');
});

var server = app.listen(80, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
