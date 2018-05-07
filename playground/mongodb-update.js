// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connect to MongoDB server');
  
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5aefb1ec17d73479aeea7f02')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returOrinigal: false
  // }).then( (result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5aef653b10ea752994af76c2')
  }, {
    $set: {
      name: 'Javier'
    },
    $inc: {
      age: -1
    }
  }, {
    returOrinigal: false
  }).then( (result) => {
    console.log(result);
  });

  // db.close();
});