const http = require('node:http')

const url = 'http://localhost:3001'

// return an instance of ClientRequest object (req)
const req = http.get(url, (res) => {
  const statusCode = res.statusCode
  if(statusCode !== 200) return
  
  res.setEncoding('utf8')
  let rawData = ''
  
  res.on('data', (chunk) => {
    rawData += chunk
  })

  res.on('end', () => {
    try {
      const parsedData = JSON.parse(rawData) 
      console.log(parsedData);
    } catch (err) {
      console.log(err.message);
    }
  })
})

req.on('error', (e) => {
  console.log(e.message);
})

