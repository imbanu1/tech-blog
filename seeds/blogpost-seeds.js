const { BlogPost } = require('../models');


const blogpostData = [
  {
    title: 'The Importance of Setting SMART Goals',
    content: 'Setting SMART (Specific, Measurable, Achievable, Relevant, Time-bound) goals is crucial for personal and professional development. They provide clarity, focus, and a clear path to success.',
    user_Id: 1
  },
  {
    title: 'Mastering Time Management Techniques',
    content: 'Effective time management is key to productivity and success. Techniques like the Pomodoro Technique, time blocking, and prioritization can help individuals maximize their efficiency and accomplish more in less time.',
    user_Id: 2
  },
  {
    title: 'The Power of Positive Thinking',
    content: 'Positive thinking has been shown to have numerous benefits for mental and physical health. It can reduce stress, improve mood, and increase resilience in the face of challenges. Cultivating a positive mindset can lead to greater happiness and success in life.',
    user_Id: 3
  }
];


const seedBlogPosts = () => BlogPost.bulkCreate(blogpostData);


module.exports = seedBlogPosts;
