const router = require('express').Router();
const { BlogPost } = require('../../models');

router.get('/', (req, res) => {
  BlogPost.findAll({}).then(response => res.json(response))
})

router.post('/', async (req, res) => {
  try {
    const newBlogPost = await BlogPost.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlogPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const BlogPostData = await BlogPost.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!BlogPostData) {
      res.status(404).json({ message: 'No Blog Post found with this id!' });
      return;
    }

    res.status(200).json(BlogPostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
