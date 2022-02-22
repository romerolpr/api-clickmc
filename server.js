const http = require('http');
const app = require('./app');
const port = 3001;
const server = http.createServer(app);

// Iniciando o servidor
server.listen(port, () => {
    console.log('[running] Express server listening on port:', port)
});