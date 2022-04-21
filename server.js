const express = require('express')
const next = require('next')
const { MongoClient, ServerApiVersion } = require('mongodb')


//database connection
const uri = 'mongodb+srv://mernstack:mernstack@cluster0.cpuxp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
})

client.connect((err) => {
  const collection = client.db('test').collection('devices')
  // perform actions on the collection object
  client.close()
})

const dbName = '<dbname>';

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.all('*', (req, res) => {
    return handle(req, res);
  })

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  })
})

