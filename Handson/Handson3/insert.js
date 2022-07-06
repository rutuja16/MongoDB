const { default: mongoose } = require("mongoose");
const { connectionWithMongoose } = require("./connection");
const { empSchema } = require("./schema");

const empModel=mongoose.model("employee",empSchema)

const insertManyWithMongoose=async()=>{
    try{
        await connectionWithMongoose();
        const emp1 = await empModel({
            firstName: "John",
            lastName: "Doe",
            salary: 25000,
            department: "HR",
            lastCompany: "X",
            lastSalary: 10000,
            overallExp: 2,
            contactInfo: 1234567890,
            yearGrad: 2016,
            gradStream: "CSE",
          })
      
          const emp2 = await empModel({
            firstName: "Rohan",
            lastName: "Jame",
            salary: 30000,
            department: "Technical",
            lastCompany: "Y",
            lastSalary: 15000,
            overallExp: 1,
            contactInfo: 1234567860,
            yearGrad: 2015,
            gradStream: "CSE",
          })
      
          const emp3 = await empModel({
            firstName: "Jame",
            lastName: "Doe",
            salary: 35000,
            department: "Accounts",
            lastCompany: "Z",
            lastSalary: 20000,
            overallExp: 1,
            contactInfo: 123567890,
            yearGrad: 2019,
            gradStream: "ECE",
          })
      
          const emp4 = await empModel({
            firstName: "Sao",
            lastName: "Avika",
            salary: 30000,
            department: "Sales",
            lastCompany: "Y",
            lastSalary: 15000,
            overallExp: 2,
            contactInfo: 1234567860,
            yearGrad: 2015,
            gradStream: "CSE",
          })
      
          const emp5 = await empModel({
            firstName: "Jame",
            lastName: "roh",
            salary: 35000,
            department: "Accounts",
            lastCompany: "Z",
            lastSalary: 15000,
            overallExp: 2,
            contactInfo: 123567890,
            yearGrad: 2019,
            gradStream: "EEE",
          })
      
          const emp6 = await empModel({
            firstName: "Rohan",
            lastName: "Jame",
            salary: 30000,
            department: "Technical",
            lastCompany: "Y",
            lastSalary: 15000,
            overallExp: 1,
            contactInfo: 1234567860,
            yearGrad: 2015,
            gradStream: "CSE",
          })
      
          const emp7 = await empModel({
            firstName: "Jame",
            lastName: "Doe",
            salary: 35000,
            department: "Accounts",
            lastCompany: "Z",
            lastSalary: 20000,
            overallExp: 1,
            contactInfo: 123567890,
            yearGrad: 2019,
            gradStream: "ECE",
          })
      
          const emp8 = await empModel({
            firstName: "Sao",
            lastName: "Avika",
            salary: 30000,
            department: "Sales",
            lastCompany: "Y",
            lastSalary: 15000,
            overallExp: 2,
            contactInfo: 1234567860,
            yearGrad: 2015,
            gradStream: "CSE",
          })
      
          const emp9 = await empModel({
            firstName: "Jame",
            lastName: "Doe",
            salary: 35000,
            department: "Accounts",
            lastCompany: "Z",
            lastSalary: 15000,
            overallExp: 2,
            contactInfo: 123567890,
            yearGrad: 2019,
            gradStream: "EEE",
          })
      
          const emp10 = await empModel({
            firstName: "Rohan",
            lastName: "Jame",
            salary: 30000,
            department: "Technical",
            lastCompany: "Y",
            lastSalary: 15000,
            overallExp: 1,
            contactInfo: 1234567860,
            yearGrad: 2015,
            gradStream: "CSE",
          })
      
          const emp11 = await empModel({
            firstName: "Jame",
            lastName: "Doe",
            salary: 35000,
            department: "Accounts",
            lastCompany: "Z",
            lastSalary: 20000,
            overallExp: 1,
            contactInfo: 123567890,
            yearGrad: 2019,
            gradStream: "ECE",
          })
      
          const emp12 = await empModel({
            firstName: "Sao",
            lastName: "Avika",
            salary: 30000,
            department: "Sales",
            lastCompany: "Y",
            lastSalary: 15000,
            overallExp: 2,
            contactInfo: 1234567860,
            yearGrad: 2015,
            gradStream: "CSE",
          })
      
          const emp13 = await empModel({
            firstName: "Jame",
            lastName: "Doe",
            salary: 35000,
            department: "Accounts",
            lastCompany: "Z",
            lastSalary: 15000,
            overallExp: 2,
            contactInfo: 123567890,
            yearGrad: 2019,
            gradStream: "EEE",
          })
        
        var empArr=[emp1,emp2,emp3,emp4,emp5,emp6,emp7,emp8,emp9,emp10,emp11,emp12,emp13]
        const result=await empModel.insertMany(empArr);
        console.log('successfully inserted record',result)
    }
    catch(e){
        console.log("error while inserting record",e)
    }

}

module.exports = {
    insertManyWithMongoose,
  }

