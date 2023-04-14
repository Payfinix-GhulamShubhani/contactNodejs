const mongoose = require("mongoose")

const dbconnect = async()=>{
    try{
        const connect = await mongoose.connect(process.env.CONNECT_DATABASE)
        console.log("connect234");
        console.log(connect.connection.host);
        console.log(connect.connection.name);

    }catch(e){
        console.log("uuu",e);
        process.exit(1)

    }
}

module.exports =dbconnect