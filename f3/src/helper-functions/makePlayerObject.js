class MakePlayer {
  constructor(
    name,
    games,
    wins,
    losses,
    goals,
    motms,
    teamGoals,
    goalsConceded
  ) {
    this.name = name;
    this.games = games;
    this.goals = goals;
    this.wins = wins;
    this.losses = losses;
    this.draws = this.games - this.wins - this.losses;
    this.motms = motms;
    this.teamGoals = teamGoals;
    this.goalsConceded = goalsConceded;
  }
  goalsPerGame() {
    return this.goals / this.games;
  }

  winsPerGame() {
    return this.wins / this.games;
  }

  lossesPerGame() {
    return this.losses / this.games;
  }

  motmsPerGame() {
    return this.motms / this.games;
  }

  teamGoalsPerGame() {
    return this.teamGoals / this.games;
  }

  goalsConcededPerGame() {
    return this.goalsConceded / this.games;
  }

  addGame() {
    this.games++;
  }

  addGoal(num) {
    this.goals = this.goals + num;
  }

  addWin() {
    this.wins++;
  }

  calculateRating() {
    let rating =
      this.goalsPerGame() +
      this.winsPerGame() +
      this.motmsPerGame() * 3 -
      this.lossesPerGame() +
      this.teamGoalsPerGame() * 0.5 -
      this.goalsConcededPerGame() * 0.5;

    this.rating = rating;
    return rating;
  }
}

module.exports = MakePlayer;
