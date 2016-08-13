var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  auth_id: String,
  nickname: String,
  todos: [String]
});

var User = mongoose.model('User', userSchema);

module.exports = User;
