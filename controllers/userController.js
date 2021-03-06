const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcrypt');
const jwt = require('jwt-then');

const { cpfValidation, phoneValidation } = require('../validations/registerValidation'); 

exports.register = async (request, response) => {
   const { name, lastName, phone, cpf, password, passwordCheck } = request.body;

   if(!cpfValidation(cpf)) throw "CPF inválido.";
   if(!phoneValidation(phone)) throw "Formato de número de telefone inválido.";
   if(password !== passwordCheck) throw "As senhas informadas não conferem";
  
   const userExists = await User.findOne({ cpf });
   if(userExists) throw "Usuário com este CPF já existe";
  

   const hashedPasswrod = await bcrypt.hash(password, 10);
   const user = new User({ name, lastName, phone, cpf, password: hashedPasswrod });

   await user.save();

   response.json({
      "success": true,
      "message": `Usuário [${name} ${lastName}] registrado com sucesso!`
   });
};
exports.login = async (request, response) => {
   const { cpf, password } = request.body;
   const user = await User.findOne({ cpf });
   if(!user) throw "Informações de CPF não armazenadas";
   if(!await bcrypt.compare(password, user.password)) throw "Senha incorreta!";

   const token = await jwt.sign({ id: user._id }, process.env.SECRET);
   
   response.json({
      success: true,
      message: "Usuário logado com sucesso!",
      userId: user._id,
      token,
   });
};

// User is not allowed to change inital CPF
exports.edit = async (request, response) => {
   const { name, lastName, phone, password, passwordCheck } = request.body;

   if(request.params.id !== request.payload.id) throw "Acesso negado! Id fornecido para Operação difere do id de usuário logado";
   if(!phoneValidation(phone)) throw "Formato de número de telefone inválido.";
   if(password !== passwordCheck) throw "As senhas informadas não conferem";
   
   const hashedPasswrod = await bcrypt.hash(password, 10);
   
   const userId = request.params.id;
   const updates =  { name, lastName, phone, password: hashedPasswrod }
   const options = { new: true, select: { password: 0} }

   const userEdited = await User.findByIdAndUpdate(userId, updates, options);
   if(!userEdited) throw `Usuário id: ${userId} não existe mais`;

   response.json({
      "success": true,
      "message": `Usuário editado com sucesso!`,
      userEdited
   });
};

exports.delete = async (request, response) => {
   if(request.params.id !== request.payload.id) throw "Acesso negado! Id fornecido para Operação difere do id de usuário logado";
   
   const userId = request.params.id;
   const userDeleted = await User.findByIdAndDelete(userId);
   if(!userDeleted) throw `Usuário id: ${userId} não existe mais`;
   
   response.json({
      "success": true,
      "message": `Usuário ${userDeleted.name} com id:${userDeleted._id} deletado!!`,
   });
};

exports.listAll = async (request, response) => {
   
   const userList = await User.find({}, { _id: 0, phone: 0, cpf: 0, password: 0 });
   
   if(!userList || userList.length == 0) throw 'Nenhum usuário cadastrado';
  
   response.json({
      "success": true,
      userList
   });
};


