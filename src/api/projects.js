import express from 'express';
import mysql from 'mysql2/promise';

const app = express();
const port = process.env.PORT || 3000;

// Create a connection to the database
const db = mysql.createPool({
  host: 'localhost',
  user: 'your-username',
  password: 'your-password',
  database: 'your-database'
});

app.get('/api/projects', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM projects');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
