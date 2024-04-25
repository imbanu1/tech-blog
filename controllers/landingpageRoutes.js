const router = require('express').Router();
const { Comment, BlogPost, User } = require('../models');
const authenticateSession = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const blogPostData = await BlogPost.findAll({
            include: [{ model: User, attributes: ['username'] }]
        });

        const blogPosts = blogPostData.map((post) => post.get({ plain: true }));

        res.render('homepage', {
            blogPosts,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;