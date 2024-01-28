// require library
const mongoose = require('mongoose');

// connect to database
mongoose.connect('mongodb://127.0.0.1/task_list_db');

// acquire the connection
const db = mongoose.connection;

// error
db.on('error', console.error.bind(console, 'Error Nothing'));

// db running and printing in console
db.once('open', function () {
  console.log('Successfully connected to the database');
});