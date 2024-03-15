const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongoose_delete = require("mongoose-delete");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema(
  {
    name: { type: String, require: true },
    description: { type: String },
    image: { type: String },
    videoId: { type: String, require: true },
    level: { type: String },
    slug: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true,
  }
);

// add plugins
mongoose.plugin(slug);
Course.plugin(mongoose_delete, { deletedAt: true, overrideMethods: "all" });

module.exports = mongoose.model("Course", Course);
