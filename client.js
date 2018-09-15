// client.js
const net = require('net');
const port = 8124;

const client = new net.Socket();

let ARRQ;

client.setEncoding('utf8');
client.connect(port, function() {
	console.log('Connected');
  	fs.readFile('qa.json', (e, text) => {
        if (e) console.log(err);
        else {
            ARRQ = JSON.parse(text);
            client.write('QA');
        }
    });
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