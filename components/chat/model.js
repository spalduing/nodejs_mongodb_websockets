const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chatSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  users: [{ type: Schema.ObjectId, ref: 'user', required: true }],
});

const model = mongoose.model('chat', chatSchema);

module.exports = model;
