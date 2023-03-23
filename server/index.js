
const path = require('path');
const express = require('express');
//TODO: FIX 
const { Tasks } = require('./db');


const port = 8020;
//TODO: FIX DIST
const distPath = path.resolve(__dirname, '..', 'dist');

const app = express();

// Middleware - every request runs thru this middleware

app.use(express.json()); // Parse the request body
app.use(express.urlencoded({ extended: true })); // Parses url
//TODO: FIX
app.use(express.static(distPath)); // Statically serve up client directory






/** Place all code above here */
app.listen(port, () => {
  console.log(`
  Listening at: http://127.0.0.1:${port}
  `);
});
