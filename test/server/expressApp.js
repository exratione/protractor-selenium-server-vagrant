/*jshint
  node: true,
  strict: false
*/
/**
 * @fileOverview
 * An trivial Express static asset server, used when checking to see that
 * Protractor is correctly set up and functional.
 */

var http = require('http');
var path = require('path');
var express = require('express');

var app = express();
// Serve assets from a single static directory.
app.use(express.static(path.join(__dirname, '../client')));
// Launch the server.
module.exports = http.createServer(app).listen(10080);
