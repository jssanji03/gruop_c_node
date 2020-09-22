const http = require('http');

const server = http.createServer((req, res)=>{
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end(`
        <h2>Hello</h2>
        <p>${req.url}</p>
    `);
});

server.listen(3000);


