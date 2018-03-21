var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ItemSchema = new Schema({
  _id: String,
  product: { productID: String },
}, { _id: false });

var CartSchema = new Schema({
  userID: { type: String, unique: true },
  cart_items: [ItemSchema]
});


// Create user model
module.exports = mongoose.model("Cart", CartSchema);
