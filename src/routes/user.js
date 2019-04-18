/**
 * @typedef {import('sequelize').Model} Model
 */

const r = require('express').Router();
 /**
  * @type {{ User: Model }}
  */
const { User } = require('../database/models');

module.exports = () => {
  r.get('/users', async (req, res) => {
    const users = await User.findAll();
    return res.status(200).json(users);
  });

  r.post('/users', async (req, res) => {
    const newUser = await User.create({
      username: 'miun',
      password: 'test',
    });
    return res.status(200).json(newUser);
  });

  return r;
}

