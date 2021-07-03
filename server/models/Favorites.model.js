const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavoritesSchema = new Schema({
  location: { type: String, required: true },
  description: { type: String, required: true }
  url: { type: String, required: true },
});

module.exports = mongoose.model("Favorites", FavoritesSchema);


