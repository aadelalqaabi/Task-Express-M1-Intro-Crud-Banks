const { Schema, model } = require("mongoose");

const accountSchema = new Schema({
  username: String,
  funds: Number,
});
module.exports = model("Account", accountSchema);
