const Course = require("../models/Course");

class SiteController {
  // GET /home
  async index(req, res) {
    try {
      const courses = await Course.find({});
      res.json(courses);
    } catch (error) {
      res.status(400).json({ error: "ERROR!!!" });
    }
    // res.render("home");
  }
  // GET /search

  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
