const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '6af0df7cdae823f02b2840df11';


// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then( (todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch( (e) => console.log(e));

User.findById('5af0752eb0481a184397bdb0').then((user) => {  
  if (!user) {
    return console.log('Unable to find User');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  return console.log(e);
});