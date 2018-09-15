// server.js
const net = require('net');
const port = 8124;
let seed = 0;

const server = net.createServer((client) => {
	console.log('Client connected');
	client.id = seed++;
	client.setEncoding('utf8');

	client.on('data', (data) => {

	});

	client.on('end', () => {

	});
});

server.listen(port, () => {
	console.log(`Server listening on localhost:${port}`);
});