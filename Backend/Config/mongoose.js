const mongoose = require('mongoose');
mongoose.connect(process.env.DB);
const db = mongoose.connection;
db.on('error',console.error.bind(console,'Error in connecting database'));
db.once('open',()=>{
    console.log('Database connnected successfully');
})
module.exports = db;