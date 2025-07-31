const express = require('express');
require('dotenv').config();
const cors = require('cors');
const db = require('./config/dbConnect');

const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  console.log('Root API hit');
  res.send('Welcome to the AarogyaCraft API');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
