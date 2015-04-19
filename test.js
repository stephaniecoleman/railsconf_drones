var arDrone = require('ar-drone');
var client  = arDrone.createClient();

client.takeoff();

client.after(10000, function(){
	this.animate('wave', 2000);
});

// client.animate('wave', 2000);

client.stop();
client.land();