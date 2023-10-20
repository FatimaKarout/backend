const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const blogsSchema = new Schema({
  title: { type: String, required: true, unique: true },
  publisher: { type: String, required: true },
  category: { type: String, required: true },
  body: { type: String, required: true },
  keyword: String,
  timestamps: true
});

const Blog = model('Blogs', blogsSchema);

module.exports = Blog;



const mongoose = require('mongoose');



