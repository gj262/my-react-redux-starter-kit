#!/usr/bin/env node

// Development static asset server

function USAGE(arg) {
  if (arg) {
    console.log('Invalid arg: ' + arg);
  }
  /*eslint no-multi-str: 0*/
  console.log('USAGE: ./server.js\n\
\t--dir=<local dir for static assets [default: dist]>\n\
\t--port=<local port to listen on    [default: 9090]>\n\
');
  process.exit();
}

var options = {
  dir:   process.env.DIR   || 'dist',
  port:  process.env.PORT  || 9090
};

var grokOption = function (option) {
  var match = new RegExp('\-?\-' + option + '\=?(.*)').exec(arg);
  if (match) {
    options[option] = match[1] || process.argv.shift();
    return true;
  }
  return false;
};

process.argv.shift();
process.argv.shift();
var arg = process.argv.shift();
while (arg) {
  if (/\-h/.test(arg)) {
    USAGE();
  }
  if (!['dir', 'port'].some(grokOption)) {
    USAGE(arg);
  }
  arg = process.argv.shift();
}

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/' + options.dir));

app.listen(options.port);
