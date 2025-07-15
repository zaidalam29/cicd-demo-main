const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Zaid Alam - Full Stack Developer at Routa Digital India Pvt. Ltd.\n');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});           