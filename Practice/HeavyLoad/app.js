var express = require('express');
var app = express();
var fs = require('fs');
var port = process.env.PORT || 3000;

var count = 0;
app.get('/', function (req, res) {
    // var str = fs.readFile('./test.dat', function (err, data) {
    //     count = count +1;
    //     console.log(count);
    //     res.send();
    // });

    var readable = fs.createReadStream('./test.dat', {
        highWaterMark: 1024 * 1024 //nubmer of bytes we want buffersize to be
    });

    readable.on('data', function (chunk) {
        //console.log(chunk.length);
    });

    readable.on('end',function(){
        count = count +1;
        console.log(count);
        res.send();
    });
})

app.listen(port); //trace code