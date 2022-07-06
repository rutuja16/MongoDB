const { default: mongoose } = require("mongoose");
const { connectionWithMongoose } = require("./connection");
const { empSchema } = require("./schema");

const empModel=mongoose.model("employee",empSchema)

const findAllWithMongoose = async () => {
    try {
        await connectionWithMongoose();
        const result = await empModel.find();

        console.log("Successfully fetched all record", result);
    } catch (e) {
        console.error("error while inserting record", e);
    }
}

  
  const findWithSalaryMongoose = async () => {
    try {
      await connectionWithMongoose()
      const result = await empModel.find({ salary: { $gt: 30000 } })
  
      console.log("Successfully fetched the record", result)
    } catch (e) {
      console.error("error while fetching the record", e)
    }
  }
  const findWithExpMongoose = async () => {
    try {
      await connectionWithMongoose()
      const result = await empModel.find({ overallExp: { $gt: 1 } })
  
      console.log("Successfully fetched the record", result)
    } catch (e) {
      console.error("error while fetching the record", e)
    }
  }
  const findWithTwoConditonsMongoose = async () => {
    try {
      await connectionWithMongoose()
      const result = await empModel.find({
        $and: [{ yearGrad: { $gt: 2015 } }, { overallExp: { $gt: 1 } }],
      })
  
      console.log("Successfully fetched the record", result)
    } catch (e) {
      console.error("error while fetching the record", e)
    }
  }

  module.exports={
    findAllWithMongoose,
    findWithSalaryMongoose,
    findWithExpMongoose,
    findWithTwoConditonsMongoose
  }