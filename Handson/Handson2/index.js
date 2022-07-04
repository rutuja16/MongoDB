const mongoClient=require('mongodb').MongoClient;

const connectionString='mongodb://127.0.0.1:27017';

//import
const employeeArr=require("./employee.json")

mongoClient.connect(connectionString, async (err, db) => {
    if(err) {
        console.error("Error while connecting", err);
        return;
    }
    console.log("Connected to Database")
    
    const database = db.db("HumanResource_mongoClient")
    //console.log(database);

    const addRecord = await database.collection("employee").insertMany(employeeArr);
    console.log(addRecord);

    const findAll = await database.collection("employee").find().toArray();
    console.log(findAll);

    const findWithGtSal = await database.collection("employee").find({"salary": {$gt: "30000"}}).toArray();
    console.log(findWithGtSal);

    const findWithGtExp = await database.collection("employee").find({"overallExp": {$gt: "1"}}).toArray();
    console.log(findWithGtExp);

    const findWithAnd = await database.collection("employee").find({$and: [{"yearGrad": {$gt: "2015"}}, {"overallExp": {$gt: "1"}}]}).toArray();
    console.log(findWithAnd);

    const updateSalary = await database.collection("employee").updateMany({"salary": {$gt: "30000"}}, {$set: {"salary": "28000"}});
    console.log(updateSalary);

    const deleteWithLastCompany = await database.collection("employee").deleteMany({"lastCompany": "Y"});
    console.log(deleteWithLastCompany);
})