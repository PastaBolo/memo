const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(__dirname + '/db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

var bodyParser = require('body-parser')
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

server.post('/memos', function(req, res, next) {
  req.body.creationDate = Date.now()
  next()
})

server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
