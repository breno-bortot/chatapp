const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcrypt');

const { cpfValidation, phoneValidation } = require('../validations/registerValidation'); 

exports.register = async (request, response) => {
   const { name, lastName, phone, cpf, password, passwordCheck } = request.body;

   if(!cpfValidation(cpf)) throw "CPF inválido.";
   if(!phoneValidation(phone)) throw "Formato de número de telefone inválido.";
   if(password !== passwordCheck) throw "As senhas informadas não conferem";

   const salt = await bcrypt.genSalt();
   const hashedPasswrod = await bcrypt.hash(password, salt);
   const user = new User({ name, lastName, phone, cpf, password: hashedPasswrod });

   await user.save();

   response.json({
      "success": true,
      "message": `Usuário [${name} ${lastName}] registrado com sucesso!`
   })
}
/* exports.login = async (request, response) => {


} */