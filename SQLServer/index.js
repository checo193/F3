const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

const PORT = 5000;

// middleware
app.use(cors());
app.use(express.json());

// ROUTES 

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
