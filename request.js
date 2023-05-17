const http = require('node:http')

const url = 'http://localhost:3001'
const postData = JSON.stringify({
  'msg': 'hello'
})
const options = {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'content-length': Buffer.byteLength(postData)
  }
}

const req = http.request(url, options, (res) => {
  const { statusCode } = res
  if(statusCode !== 201) return
  res.setEncoding('utf8')
  res.on('data', chunk => {
    console.log(chunk);
  })
  res.on('end', () => {
    console.log('done!');
  })
})

req.on('error', (e) => {
  console.log(e.message);
})

// we need to invoke the following methods to send the data
// but get-request invoke these methods authomatically
req.write(postData)
req.end()
