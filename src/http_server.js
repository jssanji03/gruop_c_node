const http = require('http');

const server = http.createServer((req, res)=>{
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
    });
    res.end(`
        <meta charset="UTF-8">
        <h2>Hello 您好</h2>
        <p>${req.url}</p>
    `);
});

server.listen(3000);


