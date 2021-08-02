export default function playersByRating(squad){
  const newSquad = [...squad];
  return newSquad.sort((currentPlayer, nextPlayer) => {
    return nextPlayer.calculateRating() - currentPlayer.calculateRating();
  });
};
