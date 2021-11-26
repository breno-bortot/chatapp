const mongoose = require('mongoose');

const chatroomSchema = new mongoose.Schema({
   name: {
      type: String,
      required: 'Nome é requerido'
   }
});

module.exports = mongoose.model('Chatroom', chatroomSchema);