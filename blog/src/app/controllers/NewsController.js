class NewsController {
  // GET /news
  index(req, res) {
    res.render("news");
  }
  ///news/:slug
  show(req, res) {
    res.send("news detail");
  }
}

module.exports = new NewsController();
