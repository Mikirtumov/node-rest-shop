const http = require('http');
const app = require('./app')

const port = process.env.PORT || 3000; //process.env.PORT || 3000 means: whatever is in the environment variable PORT, or 3000 if there's nothing there.

const server = http.createServer(app);

server.listen(port);