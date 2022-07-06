const { default: mongoose } = require("mongoose");
const { connectionWithMongoose } = require("./connection");
const { empSchema } = require("./schema");

const empModel=mongoose.model("employee",empSchema)

const deletingWithMongoose = async () => {
    try {
      await connectionWithMongoose()
      const result = await empModel.deleteMany({
        lastCompany: "Y",
      })
  
      console.log("Successfully deleted the record", result)
    } catch (e) {
      console.error("error while deleting the record", e)
    }
  }
  
  module.exports={
    deletingWithMongoose,
  }