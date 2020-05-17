const express = require('express');
const mongoose = require('mongoose');
import { TodayTask, LongtermTask } from './models';

const app = express();
mongoose.connect('mongodb://localhost/test', {
  useNewUrlParser: true,
});
const db = mongoose.connection;
//TODO error handling conventions with mongoose
db.on('error', console.error.bind(console, 'connection error'));

/* Mongoose pseudo

const todayTask = mongoose.model('TodayTasks', taskSchema);
const longtermTask = mongoose.model('LongtermTasks', taskSchema);
const testTask = new taskSchema()
*/

const Router = express.Router();

const port = process.env.PORT || 3030;

Router.route('/today-tasks').get((req, res) => {
  TodayTask.find((err, tasks) => {
    if (err) {
      return res.send(err);
    }
    console.log('hi', tasks);
    return res.json(tasks);
  });
});

app.use('/', Router);

app.get('/', (req, res) => {
  res.send('HELLO HAI');
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
