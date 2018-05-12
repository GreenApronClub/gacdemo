var express               = require("express"),
    app                   = express(),
    port                  = process.env.PORT || 8080,
    passport              = require("passport"),
    helmet                = require("helmet"),
    mongoose              = require("mongoose"),
    morgan                = require("morgan"),
    cors                  = require("cors"),
    bodyParser            = require("body-parser"),
    loginRoutes           = require("./api/routes/login"),
    signupRoutes          = require("./api/routes/signup"),
    strainRoutes          = require("./api/routes/strains"),
    userRoutes            = require("./api/routes/user"),
    cartRoutes            = require("./api/routes/cart"),
    manageRoutes          = require("./api/routes/manage"),
    methodOverride        = require("method-override");

var configDb = require("./config/database.js");
const ErrorController = require('./controllers/error');

// Mongoose config
mongoose.Promise = global.Promise;
mongoose.connect(configDb.url) // Uses specified url to connect to mongodb
.then(() => console.log('MongoDb Connection Established: http://localhost:27017'))
.catch((err) => console.log(err));


app.use(express.static("public")); // Css/js resources
app.use(express.static("uploads"));
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Enables cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  // res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

// Passport config
console.log("INITIALIZING PASSPORT...");
app.use(passport.initialize());


// Routes
app.get('/', (req, res) => {
  res.render('home');
});
app.get('/signup', (req, res) => {
  res.render('signup');
});
app.get('/login', (req, res) => {
  res.render('login');
});
app.use('/login', loginRoutes);
app.use('/signup', signupRoutes);
app.use('/manage/strains', manageRoutes);
app.use('/shop/strains', strainRoutes);
app.use('/cart', cartRoutes);
app.use('/user', userRoutes);
if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // Like main.js or main.css
  app.use(express.static('client/build'));

  // Express will serve up index.html file
  // If server does not recongnize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
app.use((req, res, next) => {
  const error = new Error('Page unavailable');
  error.status = 404;
  next(error);
});
// Exception handler
app.use(ErrorController.manage_exceptions);


//  Listens to port 3000 on http://localhost:3000
app.listen(port, () => {
  console.log("Server Started: http://localhost:"+port);
});
