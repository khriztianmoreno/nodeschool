const url  = require('url');
const http = require('http');

const portNumber = Number(process.argv[2]);

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime: time.getTime() }
}

const server = http.createServer(function(req, res) {
  // const parsedUrl = new URL(req.url, 'http://example.com')
  // const time = new Date(parsedUrl.searchParams.get('iso'))

  const parsedUrl = url.parse(req.url, true);
  const route = parsedUrl.pathname;
  const time = new Date(parsedUrl.query.iso);

  let result;

  if (route === '/api/parsetime') {
    result = parsetime(time);
  } else if(route === '/api/unixtime') {
    result= unixtime(time);
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
});

server.listen(portNumber);
