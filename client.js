// client.js
const net = require('net');
const port = 8124;

const client = new net.Socket();

client.setEncoding('utf8');

client.connect(port, function() {
	console.log('Connected');
  
});

client.on('data', function(data) {
	//console.log(data);
	if (data === 'DEC') client.destroy();
	else if (data === 'ACK') { }
	else { }
});

client.on('close', function() {
  console.log('Connection closed');
});