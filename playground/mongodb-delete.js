// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connect to MongoDB server');
  
  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then( (result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({text: "Eat lunch"}).then( (result) => {
  //   console.log(result);
  // });

  db.collection('Users').deleteMany({ name: 'Maira'}).then( (result) => {
    console.log(result);
  });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5aef843c3820d1ddce807b39')    
  }).then( (result) => {
    console.log(result);
  });

  // db.close();
});