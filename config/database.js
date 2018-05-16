//Connection to mongodb
require('dotenv').config();

if(process.env.NODE_ENV === 'development') {
  module.exports = {
    'secret': process.env.JWT_SECRET,
    'url' : process.env.DB_LOCAL_HOST
  };
}

if(process.env.NODE_ENV === 'production') {
  module.exports = {
    'secret': process.env.JWT_SECRET,
    'url': process.env.DB_HOST
  };
}
