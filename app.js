const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/users', (req, res) => {
  const users = [
    {
      id: 1,
      name: 'juan',
      email: 'juan@correo',
    },
    {
      id: 2,
      name: 'juan2',
      email: 'juan2@correo',
    },
  ];

  const json = {
    response: 'ok',
    data: users,
    total: 2,
  };

  res.send(json);
});

app.get('/users/:userId', (req, res) => {
  const user = {
    id: req.params.userId,
    name: `juan${req.params.userId}`,
    email: `juan${req.params.userId}@correo`,
  };

  res.send(user);
});

app.post('/users', (req, res) => {
  console.log(req.body);
  const json = {
    response: 'ok',
    data: {
      id: 100,
      name: req.body.name,
    },
  };

  res.send(json);
});

app.put('/users/:userId', (req, res) => {
  res.send('editado lindo');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
