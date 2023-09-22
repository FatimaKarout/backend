require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const app = express();
const port = 8000;
const MONGODB_URL = process.env.MONGODB_URL;

// used for sending json body in the request
app.use(express.json());
app.use(express.urlencoded());

async function main() {
  await mongoose.connect(MONGODB_URL);
}

main()
  .then(() => console.log('success'))
  .catch((err) => console.log(err));

// async function mainUsingTryCatch() {
//   try {
//     await mongoose.connect(MONGODB_URL);
//     console.log('success');
//   } catch (error) {
//     console.log(error);
//   }
// }

// mainUsingTryCatch();

const blogsSchema = new Schema({
  title: { type: String, required: true, unique: true },
  publisher: { type: String, required: true },
  date: { type: Date, required: true },
  body: { type: String, required: true },
  keyword: String,
});

const Blog = model('Blogs', blogsSchema);

app.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.status(200).json({
      success: true,
      message: 'Data retrieved successfully',
      data: blogs,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: 'unable to get data',
      error: error,
    });
  }
});

app.post('/', async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(200).json({
      success: true,
      message: 'Blog added successfully',
      data: blog,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Blog not added successfully',
      error: error,
    });
  }
});

app.put('/', (req, res) => {
  //   res.send('Hello from /put request');
});

app.delete('/:ID', async (req, res) => {
  try {
    const blog = await Blog.deleteOne({ _id: req.params.ID });
    res.status(200).json({
      success: true,
      message: 'Blog deleted successfully',
      blog: blog,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error occured while deleting the blog',
      error: error,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
