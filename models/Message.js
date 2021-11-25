const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
   chatroom: {
      type: mongoose.Schema.Types.ObjectId,
      required: 'Chatroom é um campo obrigatório',
      ref: 'Chatroom',
   },   
   user: {
      type: mongoose.Schema.Types.ObjectId,
      required: 'User é um campo obrigatório',
      ref: 'User',
   },
   message: {
      type: String,
      required: 'Message é um campo obrigatório',
      ref: 'User',
   },
   
   
    
});

module.exports = mongoose.model('Message', messageSchema);