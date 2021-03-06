const {Schema, model } = require('mongoose');

const schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    sparse: true
  },
  password: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
  },
  // avatar: {
  //   type: String,
  // }
});

module.exports = model('User', schema);