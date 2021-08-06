const express = require("express");
const app = express();
const cors = require("cors");
const { Player } = require('./models/index');

const PORT = 5432;

// middleware
app.use(cors());
app.use(express.json());

// ROUTES

const router = require('./router/router');
app.use(router);

// app.get("/", async (req, res) => {
//   res.send("hello app.get");
// })

// create a player

// app.post("/player", async (req, res) => {
//   try {
//     const {
//       name,
//       games,
//       wins,
//       losses,
//       goals,
//       motms,
//       teamGoals,
//       goalsConceded,
//       imageUrl,
//     } = req.body;
//     const newPlayer = await pool.query(
//       "INSERT INTO squad (name, games, wins, losses, goals, motms, teamGoals, goalsConceded, imageUrl) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
//       [
//         name,
//         games,
//         wins,
//         losses,
//         goals,
//         motms,
//         teamGoals,
//         goalsConceded,
//         imageUrl,
//       ]
//     );
//     res.json(newPlayer.rows[0]);
//   } catch (err) {
//     console.log(err.message);
//   }
// });

// //get all players (squad);

// app.get("/squad", async (req, res) => {
//   try {
//     const squad = await pool.query("SELECT * FROM squad");
//     res.json(squad.rows);
//   } catch (err) {
//     console.log(err.message);
//   }
// });

// // update a player

// app.put("/player/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const {
//       name,
//       games,
//       wins,
//       losses,
//       goals,
//       motms,
//       teamGoals,
//       goalsConceded,
//       imageUrl,
//     } = req.body;

//     if (name) {
//       const updateName = await pool.query(
//         "UPDATE squad SET name = $1 WHERE id = $2",
//         [name, id]
//       );
//     }
//     if (games || games === 0) {
//       const updateGames = await pool.query(
//         "UPDATE squad SET games = $1 WHERE id = $2",
//         [games, id]
//       );
//     }
//     if (wins || wins === 0) {
//       const updateWins = await pool.query(
//         "UPDATE squad SET wins = $1 WHERE id = $2",
//         [wins, id]
//       );
//     }
//     if (losses || losses === 0) {
//       const updateLosses = await pool.query(
//         "UPDATE squad SET losses = $1 WHERE id = $2",
//         [losses, id]
//       );
//     }
//     if (goals || goals === 0) {
//       const updateGoals = await pool.query(
//         "UPDATE squad SET goals = $1 WHERE id = $2",
//         [goals, id]
//       );
//     }
//     if (motms || motms === 0) {
//       const updateMotms = await pool.query(
//         "UPDATE squad SET motms = $1 WHERE id = $2",
//         [motms, id]
//       );
//     }
//     if (teamGoals || teamGoals === 0) {
//       const updateTeamGoals = await pool.query(
//         "UPDATE squad SET teamGoals = $1 WHERE id = $2",
//         [teamGoals, id]
//       );
//     }
//     if (goalsConceded || goalsConceded === 0) {
//       const updateGoalsConceded = await pool.query(
//         "UPDATE squad SET goalsConceded = $1 WHERE id = $2",
//         [goalsConceded, id]
//       );
//     }
//     if (imageUrl) {
//       const updateImageUrl = await pool.query(
//         "UPDATE squad SET imageUrl = $1 WHERE id = $2",
//         [imageUrl, id]
//       );
//     }
//     res.json("Player was updated");
//   } catch (err) {
//     console.log(err.message);
//   }
// });

// (async () => {

//   await Player.sequelize.sync({ force: false });

// })();

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});


