const express = require('express');
const app = express();

//Load the controllers
const events = require('./controllers/events');
const facebook = require('./controllers/facebook');
const google_map = require('./controllers/google_map');

//Mount the controllers
app.use('/events', events);
app.use('/facebook', events);
app.use('/google_map', events);
console.log("Mounted and loaded all controllers successfully")

module.exports = app;
app.listen(8000);