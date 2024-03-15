const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1/education_dev", {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useCreateIndex: true,
    });
    console.log("connect successfully");
  } catch (error) {
    console.log("connect err", error);
  }
}
module.exports = { connect };
