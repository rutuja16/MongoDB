> use Human_Resource
switched to db Human_Resource

//Create a database , give it name like ""Human_Resource"". Create a collection inside this named ""employee""
> db.employee.insertMany([{"firstName": "John","lastName": "Doe","salary": "25000","department": "HR","lastCompany": "X","lastSalary": "10000","overallExp": "2","contactInfo": "1234567890","yearGrad": "2016","gradStream": "CSE"},
... {"firstName": "Rohan","lastName": "Jame","salary": "30000","department": "Technical","lastCompany": "Y","lastSalary": "15000","overallExp": "1","contactInfo": "1234567860","yearGrad": "2015","gradStream": "CSE"},
... {"firstName": "Jame","lastName": "Doe","salary": "35000","department": "Accounts","lastCompany": "Z","lastSalary": "20000","overallExp": "1","contactInfo": "123567890","yearGrad": "2019","gradStream": "ECE"},
... {"firstName": "Sao","lastName": "Avika","salary": "30000","department": "Sales","lastCompany": "Y","lastSalary": "15000","overallExp": "2","contactInfo": "1234567860","yearGrad": "2015","gradStream": "CSE"},
... {"firstName": "Jame","lastName": "roh","salary": "35000","department": "Accounts","lastCompany": "Z","lastSalary": "15000","overallExp": "2","contactInfo": "123567890","yearGrad": "2019","gradStream": "EEE"},
... {"firstName": "Rohan","lastName": "Jame","salary": "30000","department": "Technical","lastCompany": "Y","lastSalary": "15000","overallExp": "1","contactInfo": "1234567860","yearGrad": "2015","gradStream": "CSE"},
... {"firstName": "Jame","lastName": "Doe","salary": "35000","department": "Accounts","lastCompany": "Z","lastSalary": "20000","overallExp": "1","contactInfo": "123567890","yearGrad": "2019","gradStream": "ECE"},
... {"firstName": "Sao","lastName": "Avika","salary": "30000","department": "Sales","lastCompany": "Y","lastSalary": "15000","overallExp": "2","contactInfo": "1234567860","yearGrad": "2015","gradStream": "CSE"},
... {"firstName": "Jame","lastName": "Doe","salary": "35000","department": "Accounts","lastCompany": "Z","lastSalary": "15000","overallExp": "2","contactInfo": "123567890","yearGrad": "2019","gradStream": "EEE"},
... {"firstName": "Rohan","lastName": "Jame","salary": "30000","department": "Technical","lastCompany": "Y","lastSalary": "15000","overallExp": "1","contactInfo": "1234567860","yearGrad": "2015","gradStream": "CSE"},
... {"firstName": "Jame","lastName": "Doe","salary": "35000","department": "Accounts","lastCompany": "Z","lastSalary": "20000","overallExp": "1","contactInfo": "123567890","yearGrad": "2019","gradStream": "ECE"},
... {"firstName": "Sao","lastName": "Avika","salary": "30000","department": "Sales","lastCompany": "Y","lastSalary": "15000","overallExp": "2","contactInfo": "1234567860","yearGrad": "2015","gradStream": "CSE"},
... {"firstName": "Jame","lastName": "Doe","salary": "35000","department": "Accounts","lastCompany": "Z","lastSalary": "15000","overallExp": "2","contactInfo": "123567890","yearGrad": "2019","gradStream": "EEE"}])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("62bdc8457f8ca4cbf501212c"),
                ObjectId("62bdc8457f8ca4cbf501212d"),
                ObjectId("62bdc8457f8ca4cbf501212e"),
                ObjectId("62bdc8457f8ca4cbf501212f"),
                ObjectId("62bdc8457f8ca4cbf5012130"),
                ObjectId("62bdc8457f8ca4cbf5012131"),
                ObjectId("62bdc8457f8ca4cbf5012132"),
                ObjectId("62bdc8457f8ca4cbf5012133"),
                ObjectId("62bdc8457f8ca4cbf5012134"),
                ObjectId("62bdc8467f8ca4cbf5012135"),
                ObjectId("62bdc8467f8ca4cbf5012136"),
                ObjectId("62bdc8467f8ca4cbf5012137"),
                ObjectId("62bdc8467f8ca4cbf5012138")
        ]
}

//Query the collection ""employee"" and list all the documents

> db.employee.find()
{ "_id" : ObjectId("62bdc8457f8ca4cbf501212c"), "firstName" : "John", "lastName" : "Doe", "salary" : "25000", "department" : "HR", "lastCompany" : "X", "lastSalary" : "10000", "overallExp" : "2", "contactInfo" : "1234567890", "yearGrad" : "2016", "gradStream" : "CSE" }
{ "_id" : ObjectId("62bdc8457f8ca4cbf501212d"), "firstName" : "Rohan", "lastName" : "Jame", "salary" : "30000", "department" : "Technical", "lastCompany" : "Y", "lastSalary" : "15000", "overallExp" : "1", "contactInfo" : "1234567860", "yearGrad" : "2015", "gradStream" : "CSE" }
{ "_id" : ObjectId("62bdc8457f8ca4cbf501212e"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "20000", "overallExp" : "1", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "ECE" }
{ "_id" : ObjectId("62bdc8457f8ca4cbf501212f"), "firstName" : "Sao", "lastName" : "Avika", "salary" : "30000", "department" : "Sales", "lastCompany" : "Y", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "1234567860", "yearGrad" : "2015", "gradStream" : "CSE" }
{ "_id" : ObjectId("62bdc8457f8ca4cbf5012130"), "firstName" : "Jame", "lastName" : "roh", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }
{ "_id" : ObjectId("62bdc8457f8ca4cbf5012131"), "firstName" : "Rohan", "lastName" : "Jame", "salary" : "30000", "department" : "Technical", "lastCompany" : "Y", "lastSalary" : "15000", "overallExp" : "1", "contactInfo" : "1234567860", "yearGrad" : "2015", "gradStream" : "CSE" }
{ "_id" : ObjectId("62bdc8457f8ca4cbf5012132"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "20000", "overallExp" : "1", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "ECE" }
{ "_id" : ObjectId("62bdc8457f8ca4cbf5012133"), "firstName" : "Sao", "lastName" : "Avika", "salary" : "30000", "department" : "Sales", "lastCompany" : "Y", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "1234567860", "yearGrad" : "2015", "gradStream" : "CSE" }
{ "_id" : ObjectId("62bdc8457f8ca4cbf5012134"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }
{ "_id" : ObjectId("62bdc8467f8ca4cbf5012135"), "firstName" : "Rohan", "lastName" : "Jame", "salary" : "30000", "department" : "Technical", "lastCompany" : "Y", "lastSalary" : "15000", "overallExp" : "1", "contactInfo" : "1234567860", "yearGrad" : "2015", "gradStream" : "CSE" }
{ "_id" : ObjectId("62bdc8467f8ca4cbf5012136"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "20000", "overallExp" : "1", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "ECE" }
{ "_id" : ObjectId("62bdc8467f8ca4cbf5012137"), "firstName" : "Sao", "lastName" : "Avika", "salary" : "30000", "department" : "Sales", "lastCompany" : "Y", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "1234567860", "yearGrad" : "2015", "gradStream" : "CSE" }
{ "_id" : ObjectId("62bdc8467f8ca4cbf5012138"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }

//Query the collection ""employee"" and list the employees who are having salary more than 30000
> db.employee.find({salary:{$gt:"30000"}})
{ "_id" : ObjectId("62bdc8457f8ca4cbf501212e"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "20000", "overallExp" : "1", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "ECE" }
{ "_id" : ObjectId("62bdc8457f8ca4cbf5012130"), "firstName" : "Jame", "lastName" : "roh", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }
{ "_id" : ObjectId("62bdc8457f8ca4cbf5012132"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "20000", "overallExp" : "1", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "ECE" }
{ "_id" : ObjectId("62bdc8457f8ca4cbf5012134"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }
{ "_id" : ObjectId("62bdc8467f8ca4cbf5012136"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "20000", "overallExp" : "1", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "ECE" }
{ "_id" : ObjectId("62bdc8467f8ca4cbf5012138"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }

// Query the collection ""employee"" and list the employees who are having experience more than 2 years.
db.employee.find({overallExp:{$gt:"2"}})

// Query the collection ""employee"" and list the employees who are graduated after 2015 and having experience more than 1 year 
> db.employee.find({$and:[{yearGrad:{$gt:"2015"}},{overallExp:{$gt:"1"}}]})
{ "_id" : ObjectId("62bdc8457f8ca4cbf501212c"), "firstName" : "John", "lastName" : "Doe", "salary" : "25000", "department" : "HR", "lastCompany" : "X", "lastSalary" : "10000", "overallExp" : "2", "contactInfo" : "1234567890", "yearGrad" : "2016", "gradStream" : "CSE" }
{ "_id" : ObjectId("62bdc8457f8ca4cbf5012130"), "firstName" : "Jame", "lastName" : "roh", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }
{ "_id" : ObjectId("62bdc8457f8ca4cbf5012134"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }
{ "_id" : ObjectId("62bdc8467f8ca4cbf5012138"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }

// Query the collection ""employee"" and update the salary of the employee whose salary is greater than 70000 to 65000.
> db.employee.updateMany({salary:{$gt:"30000"}},{$set:{salary:"65000"}})
{ "acknowledged" : true, "matchedCount" : 6, "modifiedCount" : 6 }
> db.employee.find({salary:"65000"})
{ "_id" : ObjectId("62bdc8457f8ca4cbf501212e"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "65000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "20000", "overallExp" : "1", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "ECE" }
{ "_id" : ObjectId("62bdc8457f8ca4cbf5012130"), "firstName" : "Jame", "lastName" : "roh", "salary" : "65000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }
{ "_id" : ObjectId("62bdc8457f8ca4cbf5012132"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "65000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "20000", "overallExp" : "1", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "ECE" }
{ "_id" : ObjectId("62bdc8457f8ca4cbf5012134"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "65000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }
{ "_id" : ObjectId("62bdc8467f8ca4cbf5012136"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "65000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "20000", "overallExp" : "1", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "ECE" }
{ "_id" : ObjectId("62bdc8467f8ca4cbf5012138"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "65000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }

// Delete all the documents from ""employee"" where last company is Y"
> db.employee.deleteMany({lastCompany:"Y"})
{ "acknowledged" : true, "deletedCount" : 6 }

//show remaining record
> db.employee.find()
{ "_id" : ObjectId("62bdc8457f8ca4cbf501212c"), "firstName" : "John", "lastName" : "Doe", "salary" : "25000", "department" : "HR", "lastCompany" : "X", "lastSalary" : "10000", "overallExp" : "2", "contactInfo" : "1234567890", "yearGrad" : "2016", "gradStream" : "CSE" }
{ "_id" : ObjectId("62bdc8457f8ca4cbf501212e"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "65000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "20000", "overallExp" : "1", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "ECE" }
{ "_id" : ObjectId("62bdc8457f8ca4cbf5012130"), "firstName" : "Jame", "lastName" : "roh", "salary" : "65000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }
{ "_id" : ObjectId("62bdc8457f8ca4cbf5012132"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "65000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "20000", "overallExp" : "1", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "ECE" }
{ "_id" : ObjectId("62bdc8457f8ca4cbf5012134"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "65000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }
{ "_id" : ObjectId("62bdc8467f8ca4cbf5012136"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "65000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "20000", "overallExp" : "1", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "ECE" }
{ "_id" : ObjectId("62bdc8467f8ca4cbf5012138"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "65000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }