const { multipleMongooseToObject } = require("../../util/mongoose");
const Course = require("../models/Course");

class MeController {
  // GET /me/stored/courses
  storedCourses(req, res, next) {
    Course.find({})
      .then((courses) =>
        res.render("me/stored-courses", {
          courses: multipleMongooseToObject(courses),
        })
      )
      .catch(next);
  }

  // GET /me/trash/courses
  trashCourses(req, res, next) {
    Course.findDeleted({ deleted: true })
      .then((courses) =>
        res.render("me/trash-courses", {
          courses: multipleMongooseToObject(
            courses.filter((course) => course.deleted)
          ),
        })
      )
      .catch(next);
  }
}

module.exports = new MeController();
