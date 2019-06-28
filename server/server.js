const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

require('./models/User');
require('./services/passport');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  session({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    secret: keys.cookieKey
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/auth')(app);

if (['production'].includes(process.env.NODE_ENV)) {
  app.use(express.static('public'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('public', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});
