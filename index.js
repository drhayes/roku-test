var Client = require('node-ssdp').Client;
var client = new Client();
var Roku = require('roku');

client.once('response', function inResponse(headers, rinfo) {
  console.log('Found Roku:', headers);
  var location = headers.LOCATION;
  var device = new Roku(location);
  device.press(Roku.HOME);
  device.delay(1000);

  device.launch('spotify', function() {
    process.exit(0);
  });
});

client.search('roku:ecp');
