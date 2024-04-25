const { User } = require('../models');

const userData = [
  {
    name: 'Alice Smith',
    username: 'aliceSmith',
    email: 'asmith@gmail.com',
    password: 'smith123'
  },
  {
    name: 'Bob Johnson',
    username: 'bobJohnson',
    email: 'bjohnson@gmail.com',
    password: 'johnson123'
  },
  {
    name: 'Carol Williams',
    username: 'carolWilliams',
    email: 'cwill@gmail.com',
    password: 'swilliams123'
  }
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;

