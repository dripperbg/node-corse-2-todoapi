const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://dripper:159753@ds229380.mlab.com:29380/todos'
};
mongoose.connect(db.mlab || db.localhost);

module.exports = { mongoose };