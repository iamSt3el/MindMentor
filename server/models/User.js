const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: {type: String, required: true, unique: true},
  password: { type: String, required: true },
});

const UserModel = model("newUser", UserSchema);

module.exports = UserModel;