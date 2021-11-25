const { cpfValidation } = require('../validations/registerValidation'); 

exports.register = async (request, response) => {
   const { name, lastName, phone, cpf, password } = request.body;

   if(!cpfValidation) throw "CPF inválido.";
   

}
exports.login = async (request, response) => {

}