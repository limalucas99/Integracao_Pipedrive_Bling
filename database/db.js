const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://minhocosamdb:minhocosamdb@cluster0.qgh4c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("myFirstDataBase").collection("deals");
  // perform actions on the collection object

  console.log(deals);
  
  client.close();
});

module.exports = {}