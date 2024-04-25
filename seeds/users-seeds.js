
const { User } = require('../models');


const userData = [
  {
    username: 'aliceSmith',
    password: 'smith123'
  },
  {
    username: 'bobJohnson',
    password: 'johnson123'
  },
  {
    username: 'carolWilliams',
    password: 'swilliams123'
  }
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
