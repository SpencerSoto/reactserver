const { Schema, model } = require("mongoose");

const pinSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    latitude: {
      type: Number,
      require: true,
    },
    longitude: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

const Pin = model("Pin", pinSchema);

module.exports = Pin;