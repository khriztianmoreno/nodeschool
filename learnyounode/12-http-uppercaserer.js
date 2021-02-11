const { Console } = require('console');
const http = require('http')
const map = require('through2-map');

const port = Number(process.argv[2]);

const server = http.createServer(function (req, res) {
  if (req.method !== 'POST') {
    return res.end('send me a POST')
  }

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(port);
