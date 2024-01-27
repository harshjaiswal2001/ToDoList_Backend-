
const express = require('express');
const path = require('path');
const port = 8001;

const db = require('./config/data');
const task = require('./models/task_info');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

app.use('/', require('./router'));

app.get('/', (req, resp) => {
  let task = task.find({})
})

app.listen(port, (err) => {
  if (err) {
    console.log("Error!", err);
    return;
  }
  console.log(`Server is Up: ${port}`);
})