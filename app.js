const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

app.use(express.static('./public'));
app.engine('handlebars', exphbs({
  layoutsDir: './views/layouts',
  defaultLayout: 'main',
}));

app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views/`);

//Load the controllers
const events = require('./controllers/events');
const facebook = require('./controllers/facebook');
const google_map = require('./controllers/google_map');
const index = require('./controllers/index');

//Mount the controllers
app.use('/events', events);
app.use('/facebook', facebook);
app.use('/google_map', google_map);
app.use('/', index);

console.log("Mounted and loaded all controllers successfully\n")

module.exports = app;
app.listen(8000);