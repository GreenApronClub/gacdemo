const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StrainSchema = new Schema({
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
