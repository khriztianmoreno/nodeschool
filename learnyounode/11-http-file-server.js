const http = require('http');
const fs = require('fs');

console.log(process.argv)

const portNumber = process.argv[2];
const fileToRead = process.argv[3];

const server = http.createServer(function(req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' });

  const stream = fs.createReadStream(fileToRead);
  stream.pipe(res);
});

server.listen(portNumber);
