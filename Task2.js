const http = require('http')

function serverOp(req, res) {
    res.writeHead(200, {'Content-Type':'text/html'})
    res.end('<h1>Hello Node!!!!</h1>\n')
}

http.createServer(serverOp).listen(3000)

console.log('Server listening on http://localhost:3000')