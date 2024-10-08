
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost:27017/form', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const formDataSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const FormData = mongoose.model('FormData', formDataSchema);


app.post('/api/form', async (req, res) => {
  const { name, email } = req.body;
  const newData = new FormData({ name, email });
  await newData.save();
  res.status(201).json(newData);
});

app.get('/api/form', async (req, res) => {
  const data = await FormData.find();
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
