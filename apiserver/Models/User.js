// Mongoose Model class
const mongoose = require("mongoose");
const { Schema } = mongoose;

// Data model
const userSchema = new Schema({
  googleId: String
});
// 1st arg is collection in MongoDB, 2nd is the schema to use
mongoose.model("users", userSchema);
