const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const blogSchema = newSchema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Blog = mongeese.model("Test", blogSchema);
module.exports = Blog;
