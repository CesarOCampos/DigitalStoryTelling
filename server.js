const express = require('express')
const next = require('next')
const {MongoClient} = require('mongodb')

//database connection
const url = 'mongodb+srv://mernstack:mernstack@cluster0.cpuxp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const client = new MongoClient(url)

const dbName = 'digitalstorytelling'

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
