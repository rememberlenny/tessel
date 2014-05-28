var tessel = require('tessel');

var led1 = tessel.led[0].output().high();
var led2 = tessel.led[1].output().low();

setInterval(function () {
  console.log("I'm blinking! (Press CTRL + C to stop)");
  led1.toggle();
  led2.toggle();
}, 100);

