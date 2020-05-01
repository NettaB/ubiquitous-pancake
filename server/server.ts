const express = require('express');

const app = express();
const Router = express.Router();

const port = process.env.PORT || 3030;

Router.route('/foo').get((req, res) => {
  const mockRes = { foo: 'bar' };
  res.json(mockRes);
});

app.use('/', Router);

app.get('/', (req, res) => {
  res.send('HELLO HAI');
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
