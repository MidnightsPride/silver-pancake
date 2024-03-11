const router = require("express").Router();
const { Post, Comment, User } = require("../../models/");
const withAuth = require("../../utils/auth");


router.post('/', withAuth, (req, res) => {
    Post.create({
        content: req.body.content,
        user_id: req.session.user_id
        })
    })
    .then(newPost => {
      res.json(newPost);
    })
    .catch(err => {
      res.status(500).json(err);
    });

router.put("/:id", withAuth, (req, res) => {
    console.log(req.body, req.params.id)
    Post.update(req.body, {
      where: {
        id: req.params.id
      }
    })  }).then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    router.delete('/:id', withAuth, (req, res) => {
        Post.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(affectedRows => {
                if (affectedRows > 0) {
                  res.status(200).end();
                } else {
                  res.status(404).end();
                }
              })
              .catch(err => {
                res.status(500).json(err);
              });
          });

          module.exports = router;
