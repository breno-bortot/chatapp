const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   name: {
      type: String,
      required: 'Nome é requerido'
   },
   lastName: {
      type: String,
      required: 'Sobrenome é requerido'
   },
   phone: {
      type: String,
      required: 'Telefone é requerido'
   },
   cpf: {
      type: Number,
      required: 'Cpf é requerido'
   },
   password: {
      type: String,
      required: 'Senha é requerida'
   }
    
}, {
   timestamps: true,
});

module.exports = mongoose.model('User', userSchema);