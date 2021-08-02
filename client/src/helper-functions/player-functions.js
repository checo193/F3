export default function determinePlayerNameClass(player) {
  let className = '';
  player.games >= 20
    ? (className = 'Player_whitePlayerName')
    : (className = 'Player_playerName');
  player.motms >= 10
    ? (className = 'Player_whitePlayerName')
    : (className = className);

  return className;
}
