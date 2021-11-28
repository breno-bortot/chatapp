require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE);

mongoose.connection.on('error', (err) => {
   console.log(`Mongoose Connection ERROR: ${err.message}`);
});

mongoose.connection.once('open', () => {
   console.log('MongoDB Connected!');
});

// Importing Models
require('./models/User');
require('./models/Chatroom');
require('./models/Message');

const app = require('./app');

app.listen(5000, () =>{
   console.log("Server listenig on port 5000");
});