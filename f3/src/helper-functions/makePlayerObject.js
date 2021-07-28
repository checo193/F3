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
    return Math.round((this.goals / this.games) * 100) / 100;
  }

  winsPerGame() {
    return Math.round((this.wins / this.games) * 100) / 100;
  }

  lossesPerGame() {
    return Math.round((this.losses / this.games) * 100) / 100;
  }

  motmsPerGame() {
    return Math.round((this.motms / this.games) * 100) / 100;
  }

  teamGoalsPerGame() {
    return Math.round((this.teamGoals / this.games) * 100) / 100;
  }

  goalsConcededPerGame() {
    return Math.round((this.goalsConceded / this.games) * 100) / 100;
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
