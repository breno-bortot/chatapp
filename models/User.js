const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   nome: {
      type: String,
      required: 'Nome é um campo obrigatório'
   },
   sobrenome: {
      type: String,
   },
   telefone: {
      type: Number,
      required: 'Telefone é um campo obrigatório'
   },
   cpf: {
      type: Number,
      required: 'Cpf é um campo obrigatório'
   },
   senha: {
      type: String,
      required: 'Senha é um campo obrigatório'
   }
    
}, {
   timestamps: true,
});

module.exports = mongoose.model('User', userSchema);