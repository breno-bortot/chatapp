const mongoose = require('mongoose');

const chatroomSchema = new mongoose.Schema({
   name: {
      type: String,
      required: 'Nome é requerido'
   },
   lastName: {
      type: String,
      required: 'Sobrenome é requerido'
   }
    
});

module.exports = mongoose.model('Chatroom', chatroomSchema);