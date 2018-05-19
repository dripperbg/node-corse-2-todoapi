const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// })

Todo.findByIdAndRemove('5b002200734d1d0aaaac8157').then((todo) => {
	console.log(todo);
})