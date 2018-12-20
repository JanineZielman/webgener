var express = require('express');
var app = express();
var path = require('path');
var glob = require("glob")


var GOOGLE_DRIVE_DIR = "/Users/janinezielman/Google Drive/Website Class";

app.use(express.static('public'))

console.log(path.join(__dirname, '/index.html'));
// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join( __dirname, 'public/index.html'));
});



app.get('/list-files', function(req, res) {
  // options is optional
  glob(GOOGLE_DRIVE_DIR + "/**/*.*", {}, function (er, files) {
    console.log(files);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(files));
  })

});


app.listen(8080, function(){
  console.log("server is started and listening on http://localhost:8080")
});
