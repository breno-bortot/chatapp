const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
   chatroom: {
      type: mongoose.Schema.Types.ObjectId,
      required: 'Chatroom é requerido',
      ref: 'Chatroom',
   },   
   user: {
      type: mongoose.Schema.Types.ObjectId,
      required: 'Usuário é requerido',
      ref: 'User',
   },
   message: {
      type: String,
      required: 'Mensagem é requerida',
      ref: 'User',
   },
   
   
    
});

module.exports = mongoose.model('Message', messageSchema);