const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // Define the path to your index.html file (assumes it's in the same folder)
  const filePath = path.join(__dirname, 'index.html');

  // Read the HTML file from the file system
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // If the file is missing or there's an error, return a 404
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('404 Not Found: index.html missing');
    } else {
      // Successfully read the file, send it with a 200 OK status and HTML content type
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});