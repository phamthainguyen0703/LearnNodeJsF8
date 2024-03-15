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
    req.body.image = `http://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Course(req.body);
    course
      .save()
      .then(() => res.redirect("/me/stored/courses"))
      .catch((next) => {
        next;
      });
  }

  // GET /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params._id)
      .then((courses) => {
        res.render("courses/edit", {
          courses: MongooseToObject(courses),
        });
      })
      .catch(next);
  }

  // PUT /courses/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params._id }, req.body)
      .then(() => {
        res.redirect("/me/stored/courses");
      })
      .catch(next);
  }

  // DELETE /courses/:id
  delete(req, res, next) {
    Course.delete({ _id: req.params._id })
      .then(() => {
        res.redirect("back");
      })
      .catch(next);
  }

  // DELETE /courses/:id/forceDelete
  forceDelete(req, res, next) {
    Course.deleteOne({ _id: req.params._id })
      .then(() => {
        res.redirect("back");
      })
      .catch(next);
  }

  // patch /courses/:id/restore
  restore(req, res, next) {
    Course.restore({ _id: req.params._id })
      .then(() => {
        res.redirect("back");
      })
      .catch(next);
  }
}

module.exports = new CourseController();
