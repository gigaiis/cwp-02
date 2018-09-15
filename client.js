// client.js
const net = require('net');
const fs = require('fs');
const port = 8124;

const client = new net.Socket();

let ARRQ;

client.setEncoding('utf8');
client.connect(port, function() {
	console.log('Connected');
  	fs.readFile('qa.json', (e, text) => {
        if (e) console.log(err);
        else {
            ARRQ = shuffle(JSON.parse(text));
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

function shuffle(array) {
	let n;
	var result = [];
	while(array.length > 0)
	{
		n = Math.floor(Math.random() * (array.length - 1));
		result.push(array[n]);
		array.splice(n, 1);
	}
	return result;
}