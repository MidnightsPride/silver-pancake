const router = require("express").Router();
const { Post, Comment, User } = require("../models");

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get("/signup", (req, res) => {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }
  
    res.render("signup");
  });
  

router.get("/", (req, res) => {
    Post.findAll({
      include: [User],
    })
    .then((dbPostData) => {
        const posts = dbPostData.map((post) => post.get({ plain: true }));
        res.render("all-posts", { posts });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
router.get("/post/:id", (req, res) => {
Post.findOne(req.params.id, {
    include: [User,
        {
          model: Comment,
          include: [User],
        },
      ],
    })
    then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        const post = dbPostData.get({ plain: true });
        console.log(post);
        res.render('single-post', { post, loggedIn: req.session.loggedIn });


    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;