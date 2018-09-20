const { Router } = require('express');

const dateMidd = require('../middlewares');

const db = require('../db');

const router = Router();

router.get('/', (req, res) => {
  const users = db.getAll('users');

  const json = {
    response: 'ok',
    data: users,
    data2: req.body,
    total: 2,
  };

  res.send(json);
});

router.get('/:userId', (req, res) => {
  const user = {
    id: req.params.userId,
    name: `juan${req.params.userId}`,
    email: `juan${req.params.userId}@correo`,
  };

  res.send(user);
});

router.post('/', (req, res) => {
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

router.put('/:userId', (req, res) => {
  res.send('editado lindo');
});


module.exports = router;
