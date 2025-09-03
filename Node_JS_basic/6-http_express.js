// 6-http_express.js
const express = require('express');
const app = express();

// define the route
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// listen on port 1245
app.listen(1245);

// export app variable
module.exports = app;
