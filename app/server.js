const express = require("express");
const path = require("path");
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
require('dotenv').config()

const app = express();

const PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/home.html'));
});


var session = require('express-session');

// config express-session
var sess = {
  secret: 'OTbXGLo1wcxsjxz6CpXYYOYUD_Y1CBveqda3WLsNVoCggpptj1jp74Fs8sTvIUBP',
  cookie: {},
  resave: false,
  saveUninitialized: true
};

if (app.get('env') === 'production') {
  sess.cookie.secure = true; // serve secure cookies, requires https
}

app.use(session(sess));




// Configure Passport to use Auth0
var strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL:
      process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
  },
  function (accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
  }
);

passport.use(strategy);

// You can use this section to keep a smaller payload
passport.serializeUser(function (user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function (user, done) {
    done(null, user);
  });

  // app.js
  require('./routing/apiRoutes.js')(app);
  require('./routing/htmlRoutes.js')(app);
  
var userInViews = require('./lib/middleware/userInViews');
var authRouter = require('./routing/auth');
var indexRouter = require('./routing/index');
var usersRouter = require('./routing/users');

// ..
app.use(userInViews());
app.use('/', authRouter);
app.use('/', indexRouter);
app.use('/', usersRouter);
// ..


app.listen(PORT, function(){
    console.log(`App is now listening on PORT ${PORT}`)
});