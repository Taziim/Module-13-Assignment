const http = require('http');
http.createServer((req, res) => res.end('Hello from Jenkins CI/CD')).listen(3000);
console.log('App running on port http://localhost:3000');