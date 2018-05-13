var mongoose = require('mongoose');

var User = mongoose.model('User', {
	email: {
		type: String,
		trim: true,
		required: true,
		minlength: 1
	}
})

// var newUser = new User({
// 	email: 'test@example.com'
// });

// newUser.save().then((doc) => {
// 	console.log(doc);
// }, (err) => {
// 	console.log(err)
// });

module.export = { User }