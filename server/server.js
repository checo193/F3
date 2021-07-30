const fs = require('fs');
const express = require('express');
const squad = require('./mockDB.json');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/squad', (req, res) => {
  res.json(squad);
});

app.post('/squad', (req, res) => {
  console.log(req.body);

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
  const { name, games, wins, losses, goals, motms, teamGoals, goalsConceded } =
    req.body;

    console.log(name, goals);

  const old_player = squad.find((player) => player.id == id);

  if (name) {
    old_player.name = name;
  }

  if (games) {old_player.games = games}
  if (wins) {old_player.wins = wins}
  if (losses) {old_player.losses = losses}
  if (motms) {old_player.motms = motms}
  if (teamGoals) {old_player.teamGoals = teamGoals}
  if (goalsConceded) {old_player.goalsConceded = goalsConceded}
  if (goals) {old_player.goals = goals}

  // old_player.name = name;
  // old_player.games = games;
  // old_player.wins = wins;
  // old_player.losses = losses;
  // old_player.motms = motms;
  // old_player.teamGoals = teamGoals;
  // old_player.goalsConceded = goalsConceded;
  // old_player.goals = goals;

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
