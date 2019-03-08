const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
console.log(path.join(__dirname, 'db.json') );
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3001, () => {
    console.log('JSON Server is running')
})