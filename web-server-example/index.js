const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer( (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<h1>Hello World</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et necessitatibus veniam fugiat assumenda! Odit, qui architecto molestias temporibus voluptatibus autem unde quo eum? Doloremque in, quos quidem iusto nihil id.</p>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});