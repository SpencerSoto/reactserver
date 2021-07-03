const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const journeyLogsSchema = new Schema({
  // username: {type: String, required: true},
  title: { type: String, required: true },
  description: { type: String, required: false },
  // image: { type: String, required: true },
});

module.exports = mongoose.model("JourneyLogs", journeyLogsSchema);
