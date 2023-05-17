const http = require('node:http')

const server = http.createServer()
const responseData = { msg: 'GET request received' }
const port = 3001

// will handle GET and POST
server.on('request', (req, res) => {
  const { method } = req
  if(method === 'GET') {
    res.writeHead(200, {
      'content-type': 'application/json'
    })
    res.end(JSON.stringify(responseData))
  } else if(method === 'POST') {
    res.writeHead(201, {
      'content-type': 'application/json'
    })
    res.end(JSON.stringify({
      'msg': 'POST request received',
      'options': 'for the received data, will be updated later'
    }))
  }
})

server.listen(port, () => {
  console.log('server listening on port 3001')
})
