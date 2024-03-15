const newsRoutes = require("./news");
const meRoutes = require("./me");
const siteController = require("./site");
const coursesRoutes = require("./courses");

function route(app) {
  app.use("/news", newsRoutes);
  app.use("/me", meRoutes);
  app.use("/courses", coursesRoutes);

  app.use("/", siteController);
}
module.exports = route;
