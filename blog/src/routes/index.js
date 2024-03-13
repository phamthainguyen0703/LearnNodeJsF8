const newsRoutes = require("./news");
const siteController = require("./site");
const coursesRoutes = require("./courses");

function route(app) {
  app.use("/news", newsRoutes);
  app.use("/courses", coursesRoutes);

  app.use("/", siteController);
}
module.exports = route;
