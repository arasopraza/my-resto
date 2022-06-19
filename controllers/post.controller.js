const Post = require("../models/post");

module.exports = {
  index: async (req, res) => {
    const posts = await Post.findAll();
    return res.render("post/index", {
      posts,
    });
  },

  details: async (req, res) => {
    const post = await Post.findByPk(req.params.id);
    return res.render("post/details", { post });
  },

  create: async (req, res) => {
    return res.render("post/create");
  },

  store: async (req, res) => {
    await Post.create(req.body);

    return res.redirect("/posts");
  },
};
