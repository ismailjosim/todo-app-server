const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db_todos.json');
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 9000; // Use the provided environment port or 9000 as fallback

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${ PORT }`);
});
