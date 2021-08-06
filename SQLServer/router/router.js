
const { Player } = require("../models/index");

const router = require("express").Router();

router.get("/", async (req, res) => {
  res.send("hello app.get");
});

router.get("/squad", async (req, res) => {
  try {
    const squad = await Player.findAll();
    console.log(squad);
    res.send(squad);
  } catch (err) {
    console.log(err);
  }
});

router.post("/player", async (req, res) => {
  try {
    // console.log(req.body);
    const newPlayer = Player.create(req.body);
    res.send(newPlayer).status(201);
  } catch (err) {
    console.error(err);
  }
})

router.put("/player/:id", async (req, res) => {
  try {
    const playerToUpdate = await Player.findOne({ id: req.params.id });
    console.log(playerToUpdate, "player to update");
    // const updatePlayer = await Player.update(req.body, { id: req.params.id });
    // res.send(updatedPlayer).status(201);
  } catch (err) {
    console.error(err);
  }
})

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

module.exports = router;
