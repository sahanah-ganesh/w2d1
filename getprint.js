var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

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
console.log(getAndPrintHTML());