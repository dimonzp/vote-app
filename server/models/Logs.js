const { Schema, model } = require("mongoose");

const schema = new Schema({
  url: { type: String, required: true },
  json: { type: String },
  date: { type: Date, required: true },
  
});

module.exports = model("Logs", schema);
