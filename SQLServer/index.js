const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

const PORT = 5000;

// middleware
app.use(cors());
app.use(express.json());

// ROUTES

// create a player

app.post('/player', async (req, res) => {
  try {
    const {
      name,
      games,
      wins,
      losses,
      goals,
      motms,
      teamGoals,
      goalsConceded,
      imageUrl,
    } = req.body;
    const newPlayer = await pool.query(
      'INSERT INTO squad (name, games, wins, losses, goals, motms, teamGoals, goalsConceded, imageUrl) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [
        name,
        games,
        wins,
        losses,
        goals,
        motms,
        teamGoals,
        goalsConceded,
        imageUrl,
      ]
    );
    res.json(newPlayer.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
