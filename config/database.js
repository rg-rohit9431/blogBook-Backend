const mongoose  = require('mongoose');

require('dotenv').config();

const connectDb = ()=>{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
    .then(()=>{
        console.log('server is connected with database!');
    })
    .catch((error)=>{
        console.log('error occured');
        console.log(error.message);
        process.exit(1);
    })
}

module.exports = connectDb;