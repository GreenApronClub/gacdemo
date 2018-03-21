var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StrainSchema = new Schema({
  name: {
      type: String
  },
  price: {
      type: Number
  },
  description: {
      type: String
  },
  type: {
      type: String
  },
  image: {
      type: String
  }
});

// Create user model
module.exports = mongoose.model("Strain", StrainSchema);
