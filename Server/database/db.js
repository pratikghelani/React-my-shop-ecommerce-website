const mongoose = require('mongoose');
const URL = process.env.db_URL ;

const Connection = async ()=>{
    try{
        await mongoose.connect(URL, { useNewUrlParser : true, useUnifiedTopology : true, useUnifiedTopology: true, });
        console.log('Data Was Connect SucessFully');
    }catch(error){
        console.log('Error : ', error.message);
    }
};


module.exports = Connection;