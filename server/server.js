const fs = require('fs');
const express = require('express');
const cors = require('cors');
const squad = require('./mockDB.json');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/squad', (req, res) => {
  res.json(squad);
});

app.post('/squad', (req, res) => {
  const { name, games, wins, losses, goals, motms, teamGoals, goalsConceded } =
    req.body;

  const player_ids = squad.map((player) => player.id);

  const player = {
    id: (player_ids.length > 0 ? Math.max(...player_ids) : 0) + 1,
    name,
    games,
    wins,
    losses,
    goals,
    motms,
    teamGoals,
    goalsConceded,
  };

  const new_squad = squad.concat(player);

  fs.writeFile('./mockDB.json', JSON.stringify(new_squad), (err) =>
    console.log(err)
  );

  res.json(new_squad);
});

app.put('/squad/:id', (req, res) => {
  const { id } = req.params;
  const { name, games, wins, losses, goals, motms, teamGoals, goalsConceded, cardUrl, needWhiteWriting } =
    req.body;

  const old_player = squad.find((player) => player.id == id);

  if (name) {
    old_player.name = name;
  }

  if (games || games === 0) {
    old_player.games = games;
  }
  if (wins || wins === 0) {
    old_player.wins = wins;
  }
  if (losses || losses === 0) {
    old_player.losses = losses;
  }
  if (motms || motms === 0) {
    old_player.motms = motms;
  }
  if (teamGoals || teamGoals === 0) {
    old_player.teamGoals = teamGoals;
  }
  if (goalsConceded || goalsConceded === 0) {
    old_player.goalsConceded = goalsConceded;
  }
  if (goals || goals === 0) {
    old_player.goals = goals;
  }

  if (cardUrl) {
    old_player.cardUrl = cardUrl;
  }
    old_player.needWhiteWriting = needWhiteWriting || false


  fs.writeFile('./mockDB.json', JSON.stringify(squad), (err) =>
    console.log(err)
  );

  res.json(squad);
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`http://localhost:${PORT}`);
  }
});
