const express = require('express');
const app = express();

//Load and mount controllers
const events = require('./controllers/events');
app.use('/events', events);

const facebook = require('./controllers/facebook');
app.use('/facebook', events);

const google_maps = require('./controllers/google_maps');
app.use('/google_maps', events);


module.exports = app;
app.listen(8000);