require('dotenv').config();
const sequelize = require('./config/connection');
const express = require('express');
const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers');
const exphbs = require('express-handlebars');

const helpers = require('./utils/formatDate');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'chimamkpam',
  cookie: {
    maxAge: 1600000, // 10-minute session before user logout
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Sorry, something broke!');
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});