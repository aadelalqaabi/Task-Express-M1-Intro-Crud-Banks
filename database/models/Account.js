const { Schema, model } = require("mongoose");

const accountSchema = new Schema({
  username: { type: String, required: true },
  funds: { type: Number, default: 0 },
});
module.exports = model("Account", accountSchema);
