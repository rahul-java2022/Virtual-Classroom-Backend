const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  userRole: {
    type: String,
    required: true,
  }
  
});

module.exports = mongoose.model("admin", AdminSchema);
