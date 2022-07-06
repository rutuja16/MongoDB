const mongoose=require("mongoose")

const empSchema=mongoose.Schema({
    firstName:{type:String,require:true} ,
    lastName:{type:String,require:true},
    salary:Number,
    department:{type:String,require:true},
    lastCompany:{type:String,require:true},
    lastSalary:Number,
    overallExp:Number,
    contactInfo:Number,
    yearGrad:Number,
    gradStream:{type:String,require:true},


})

module.exports={
    empSchema
}