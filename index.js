const express = require('express')
const server = express()
const mongoose = require('mongoose');


//mongoDB connection string
const url = 'mongodb+srv://user:<password>@node-api-8r36a.mongodb.net/test?retryWrites=true';

server.get('/', (req, res) => {
  try {
    res.status(200).json({ message: 'Root endpoint is functional.' });
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
});

mongoose.connect(url,{useNewUrlParser: true})
  .then(()=>{
    app.listen(3000);
    console.log('database connected!');})
  .catch(err => console.log(err));
  
const port = process.env.PORT || 5000;
server.listen(port, () => {
  const serverRunMsg = `Server is active and listening on http://127.0.0.1:${port}`
  console.log(serverRunMsg)
})

module.exports = server;