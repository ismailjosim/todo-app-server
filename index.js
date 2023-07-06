const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Updated file name
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 9000;

server.use(middlewares);
server.use(router);

module.exports = server; // Export the server instance

// This block is not necessary for Vercel deployment
if (!process.env.NODE_ENV) {
    server.listen(PORT, () => {
        console.log(`JSON Server is running on port ${ PORT }`);
    });
}
