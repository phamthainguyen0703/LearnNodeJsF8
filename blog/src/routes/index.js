const newsRoutes = require("./news");
const siteController = require("./site");

function route(app) {
  app.use("/news", newsRoutes);
  app.use("/", siteController);
}
module.exports = route;
