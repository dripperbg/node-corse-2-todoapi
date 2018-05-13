// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
	if (err) {
		return console.log('Unable to connect to the Database');
	}

	console.log('Connected to Database');
	const db = client.db('TodoApp');

	// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// });

	// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// });

	// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	// 	console.log(result);
	// });	

	// db.collection('Users').deleteMany({name: "Ivo"}).then((result) => {
	// 	console.log(result);
	// })

	// db.collection('Users').deleteOne({_id: new ObjectID('5af8077a0d44951b3804052a')}).then((result) => {
	// 	console.log(result);
	// })

	// client.close();
});