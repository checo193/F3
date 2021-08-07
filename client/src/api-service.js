import axios from "axios";

// Functions to update all the players stats after a game and reflect changes in the database.

// const getSquad = async () => {
//   let test = await axios.get("http://localhost:3001/squad").data;
//   //   console.log(test, "fqeoifqpo");
//   return test;
// };
const getSquad = () => {
  axios
    .get("http://localhost:3001/squad")
    .then(function (response) {
      // handle success
      //   console.log(response);
      return response;
    })
    .catch(function (error) {
      // handle error
      //   console.log(error);
    })
    .then(function () {
      // always executed
    });
};

export { getSquad };

// // When user clicks 'create teams' button, arranged the selected squad in order of skill rating.
// const orderSquad = () => {
//   setOrderedSquad(playersByRating(playingSquad));
//   setPlayingSquad([]);
// };

// function updatePlayerStats(player, newGoals, newMotms) {
//   console.log(player.id);
//   fetch(`http://localhost:3001/squad/${player.id}`, {
//     // this should be /player/id
//     method: "PUT",
//     body: JSON.stringify({ goals: newGoals, motms: newMotms }),
//     headers: { "Content-Type": "application/json" },
//   }).then((response) => {
//     return response.json().then((data) => {
//       setSquad(data);
//     });
//   });
// }

// function updateGameStats(player, newGames) {
//   fetch(`http://localhost:3001/squad/${player.id}`, {
//     method: "PUT",
//     body: JSON.stringify({ games: newGames }),
//     headers: { "Content-Type": "application/json" },
//   }).then((response) => {
//     return response.json().then((data) => {
//       setSquad(data);
//     });
//   });
// }
// function updatePlayerWins(player, newWins) {
//   fetch(`http://localhost:3001/squad/${player.id}`, {
//     method: "PUT",
//     body: JSON.stringify({ wins: newWins }),
//     headers: { "Content-Type": "application/json" },
//   }).then((response) => {
//     return response.json().then((data) => {
//       setSquad(data);
//     });
//   });
// }
// function updatePlayerLosses(player, newLosses) {
//   fetch(`http://localhost:3001/squad/${player.id}`, {
//     method: "PUT",
//     body: JSON.stringify({ losses: newLosses }),
//     headers: { "Content-Type": "application/json" },
//   }).then((response) => {
//     return response.json().then((data) => {
//       setSquad(data);
//     });
//   });
// }

// function updateTeamGoals(player, newTeamGoals) {
//   fetch(`http://localhost:3001/squad/${player.id}`, {
//     method: "PUT",
//     body: JSON.stringify({ teamGoals: newTeamGoals }),
//     headers: { "Content-Type": "application/json" },
//   }).then((response) => {
//     return response.json().then((data) => {
//       setSquad(data);
//     });
//   });
// }

// function updateGoalsConceded(player, newGoalsConceded) {
//   fetch(`http://localhost:3001/squad/${player.id}`, {
//     method: "PUT",
//     body: JSON.stringify({ goalsConceded: newGoalsConceded }),
//     headers: { "Content-Type": "application/json" },
//   }).then((response) => {
//     return response.json().then((data) => {
//       setSquad(data);
//     });
//   });
// }
