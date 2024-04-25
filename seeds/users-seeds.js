const { User } = require('../models');

const userData = [
  {
    name: 'Alice Smith',
    username: 'aliceSmith',
    password: 'smith123'
  },
  {
    name: 'Bob Johnson',
    username: 'bobJohnson',
    password: 'johnson123'
  },
  {
    name: 'Carol Williams',
    username: 'carolWilliams',
    password: 'swilliams123'
  }
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;

