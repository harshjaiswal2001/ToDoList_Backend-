const taskList = require('../models/task_info');

module.exports.home = function (req, resp) {
  taskList.find({}, function (err, task) {
    if (err) {
      console.log("Error in fetching the data from db", err);
      return;
    }
    return resp.render('index', {
      title: 'Your Awesome ToDo App',
      history_task: task
    });
  });
}

module.exports.add = function (req, resp) {
  taskList.create(req.body, function (err, task) {
    if (err) { console.log('error in creating the list', err); return; }
    console.log(task);
    return resp.redirect('/');
  });

};

module.exports.delete = function (req, resp) {
  //getting the id of selected boxes
  let id = req.query;
  console.log(id);

  //gives the length of the selected checkboxes
  let checkboxes = Object.keys(id).length;

  //iterating over each selected boxes
  for (let i = 0; i < checkboxes; i++) {
    // find the item in the database using id and delete it
    taskList.findByIdAndDelete(Object.keys(id)[i], function (err) {
      if (err) {
        console.log("error in deleting the item");
        return;
      }

    })
  }
  return resp.redirect('back');
};