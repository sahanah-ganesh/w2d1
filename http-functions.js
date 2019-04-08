var https = require('https');

module.exports = function getHTML (options, callback) {

  var output;

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {

      output += data, '\n';

      console.log('Chunks received:', output, '\n');
    });

    response.on('end', function() {

      console.log('Response stream complete.');
    });

  });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};


