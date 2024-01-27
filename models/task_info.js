const mongoose = require('mongoose');

const createSchema = new mongoose.Schema({

  // for description of the task
  desc: {
    type: String,
    required: true
  },

  // for category of the task
  cate: {
    type: String,
    required: true
  },

  // for due date of the task
  dob:
  {
    type: Date,
    required: true
  },
});

const task = mongoose.model('task', createSchema);

module.exports = task;