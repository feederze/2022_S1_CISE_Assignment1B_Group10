// routes/api/article.js

const express = require("express");
const router = express.Router();

// Load Article model
const Article = require("../../models/Article");

// @route GET api/article/test
// @description tests article route
// @access Public
router.get("/test", (req, res) => res.send("article route testing!"));

// @route GET api/article
// @description Get all article
// @access Public
router.get("/", (req, res) => {
  Article.find()
    .then((article) => res.json(article))
    .catch((err) => res.status(404).json({ nobooksfound: "No Matches found" }));
});

// @route GET api/article
// @description add/save article
// @access Public
router.post("/", (req, res) => {
  Article.create(req.body)
    .then((article) => res.json({ msg: "Added successfully" }))
    .catch((err) => res.status(400).json({ error: "Unable to add" }));
});

// @route GET api/article/searchArticle
// @description get article by title
// @access Public
router.post('/search_article', (req, res) => {
  Article.find({'title':req.body.title})
    .then(articles => res.json(articles))
    .catch(err => res.status(404).json({ nobooksfound: 'No article found' }));
});

// @route GET api/article/:id
// @description Update article
// @access Public
router.put("/:id", (req, res) => {
  Article.findByIdAndUpdate(req.params.id, req.body)
    .then((article) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// @route GET api/article/:id
// @description Delete article by id
// @access Public
router.delete("/:id", (req, res) => {
  Article.findByIdAndRemove(req.params.id, req.body)
    .then((article) => res.json({ mgs: "Deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such a article" }));
});

module.exports = router;
