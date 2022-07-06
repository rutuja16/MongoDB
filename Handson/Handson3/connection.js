const mongoose=require('mongoose');

const conn='mongodb://127.0.0.1:27017/HumanResource_Mongoose';

const connectionWithMongoose=async ()=>{
    try{
        const connection=await mongoose.connect(conn);
        console.log("connected to HumanResource_Mongoose database")
        return connection;
    } catch(e){
        console.error("error while connecting DB",e)
    }
}

module.exports={connectionWithMongoose}