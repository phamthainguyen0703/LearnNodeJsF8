const { MongooseToObject } = require("../../util/mongoose");
const Course = require("../models/Course");

class CourseController {
  // GET /courses/:slug

  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((courses) => {
        res.render("courses/detail", {
          courses: MongooseToObject(courses),
        });
      })
      .catch(next);
  }
  // GET /courses/create

  create(req, res, next) {
    res.render("courses/create");
  }

  // POST /courses/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `http://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {
        next;
      });
  }
}

module.exports = new CourseController();
