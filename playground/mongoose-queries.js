const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5af83419ffb25e2a10497ed9';

// if (!ObjectID.isValid(id)) {
// 	console.log('ID not valid!')
// }

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

// Todo.findById(id).then((todo) => {
// 	if (!todo) {
// 		return console.log('Not found');
// 	}
// 	console.log(todo);
// }).catch((e) => {
// 	console.log(e);
// })

User.findById({
	_id: id
}).then((user) => {
	if (!user) {
		console.log("Not found");
	}

	console.log('Todo', user);
}).catch(e => {
	console.log(e);
});