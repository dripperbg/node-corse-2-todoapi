// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
	if (err) {
		return console.log('Unable to connect to the Database');
	}

	console.log('Connected to Database');
	const db = client.db('TodoApp');

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('5af816be1251762438d875f6')
	// }, {
	// 	$set: {
	// 		completed: false
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// })

	db.collection("Users").findOneAndUpdate({
		_id: new ObjectID('5af812ad1251762438d875f0')
	}, {
		$set: {
			name: "Ivo"
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((res) => {
		console.log(res);
	})

	// client.close();
});