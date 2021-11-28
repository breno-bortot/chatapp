const jwt = require('jwt-then');

module.exports = async (request, response, next) => {
    try{
        if(!request.headers.authorization) throw "Acesso negado!";

        const token = request.headers.authorization.split(" ")[1];
        console.log()
        const payload = await jwt.verify(token, process.env.SECRET); 
        
        request.payload = payload;
       
        next();
    } catch (error) {
        console.log(error)
        response.status(401).json({
            message: error
        });
    }
};