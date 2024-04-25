const { Comment } = require('../models');

const commentData = [
  {
    content: 'Great insights! Looking forward to more posts.',
    user_Id: 3,
    blogPost_Id: 1
  },
  {
    content: 'I never thought about it that way. Thanks for sharing your perspective!',
    user_Id: 2,
    blogPost_Id: 2
  },
  {
    content: 'This article really resonated with me. Keep up the good work!',
    user_Id: 1,
    blogPost_Id: 1
  }
];


const seedComments = () => Comment.bulkCreate(commentData);


module.exports = seedComments;
