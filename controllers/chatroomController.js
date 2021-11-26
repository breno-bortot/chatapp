const mongoose = require('mongoose');
const Chatroom = mongoose.model('Chatroom');

exports.createChatroom = async (request, response) => {
    const {name} = request.body;

    const nameRegex = /^[A-Za-z\s]+$/;

    if(!nameRegex.test(name)) throw "Nome da Sala só pode conter caracteres alfabéticos.";

    const chatroomExists = await Chatroom.findOne({ name });

    if(chatroomExists) throw "Sala de bate papo já existe com esse nome.";

    const chatroom = new Chatroom({
        name,
    });

    await chatroom.save();

    response.json({
        success: true,
        message: ` Sala ${name} criada.`
    });

    
}