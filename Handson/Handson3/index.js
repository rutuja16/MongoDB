const {insertManyWithMongoose}=require('./insert')

const {findAllWithMongoose,findWithSalaryMongoose,findWithExpMongoose,findWithTwoConditonsMongoose}=require('./read')

const {updateSalWithMongoose}=require('./update')

const {deletingWithMongoose}=require('./delete')

//insert
insertManyWithMongoose()

//read
findAllWithMongoose()
findWithSalaryMongoose()
findWithExpMongoose()
findWithTwoConditonsMongoose()

//update
updateSalWithMongoose()

//delete
deletingWithMongoose()


