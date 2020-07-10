const http = require('http');
const fs = require('fs');

module.exports.serverRun = () =>{
    let server = http.createServer((req, res) => {
        if (req.url === '/') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            let myReadStream = fs.createReadStream(__dirname + '/home.html', 'utf8');
            myReadStream.pipe(res);
        }
        else if (req.url === '/data') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            let myReadStream = fs.createReadStream(__dirname + '/TicTacToeLog.txt', 'utf8');
            myReadStream.pipe(res);
        }
        else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('404 not found');
        }
    
    })
    server.listen(3001, '127.0.0.1');
    console.log('listening to port 3001');
}
