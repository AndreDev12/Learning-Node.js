const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  req.on('data', (chunk) => {
    console.log('You received a chunk of data', chunk);
  });

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // res.end('hello world');
  res.end('some data');
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})