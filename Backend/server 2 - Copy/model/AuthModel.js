const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
    required: true,
  },
});

module.exports = mongoose.model("Auth", AuthSchema);

// -> Email
// -> Password
// -> Role: P, U
// -> ObjID
// -> Timestamps
