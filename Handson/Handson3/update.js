const { default: mongoose } = require("mongoose");
const { connectionWithMongoose } = require("./connection");
const { empSchema } = require("./schema");

const empModel=mongoose.model("employee",empSchema)

const updateSalWithMongoose = async () => {
    try {
      await connectionWithMongoose()
      const result = await empModel.updateMany(
        { salary: { $gt: 30000 } },
        { $set: { salary: 28000 } }
      )
  
      console.log("Successfully updated the record", result)
    } catch (e) {
      console.error("error while updating the record", e)
    }
  }

  module.exports={
    updateSalWithMongoose,
  }