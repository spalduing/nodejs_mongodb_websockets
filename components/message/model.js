const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  user: { type: Schema.ObjectId, ref: 'user' },
  chat: { type: Schema.ObjectId, ref: 'chat' },
  message: { type: String, required: true },
  file: String,
  date: Date,
});

const model = mongoose.model('message', messageSchema);

module.exports = model;
