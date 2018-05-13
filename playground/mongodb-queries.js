const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '6af84a78d723f02a74e0c9f5';

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log(todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log(todo);
// });

Todo.findById(id).then((todoById) => {
	console.log(todoById);
});