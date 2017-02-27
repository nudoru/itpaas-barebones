//  OpenShift sample Node application
var express = require('express'),
    fs      = require('fs'),
    path    = require('path'),
    app     = express();
    
Object.assign=require('object-assign');

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.use(express.static('./views/'));

app.get('/', function (req, res) {
  res.sendFile(path.resolve('./views/index.html'));
});

// error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});

// app.listen(port, ip);
// console.log('Server running on http://%s:%s', ip, port);

app.listen(port, ip, function () {
  console.log('Server started on ' + new Date(Date.now()) + ' at http://' + ip + ':' + port);
});

module.exports = app ;
