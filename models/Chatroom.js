const mongoose = require('mongoose');

const chatroomSchema = new mongoose.Schema({
   nome: {
      type: String,
      required: 'Nome é um campo obrigatório'
   },
   sobrenome: {
      type: String,
      required: 'Nome é um campo obrigatório'
   }
    
});

module.exports = mongoose.model('Chatroom', chatroomSchema);