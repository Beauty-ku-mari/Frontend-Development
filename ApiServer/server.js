const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4500;

app.use(cors());  
app.use(express.json());


const data = [
  { id: 1, name: 'Java' },
  { id: 2, name: 'Python' },
  { id: 3, name: 'JavaScript' }
];


app.get('/api/data', (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
