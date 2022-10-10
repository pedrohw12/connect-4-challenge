interface IChooseNameParams {
  player: number;
  playerName: String;
  opponentPlayer: String;
}

export function chooseName({
  player,
  playerName,
  opponentPlayer,
}: IChooseNameParams) {
  if (player === 1) {
    if (playerName === "1") return `Player ${playerName}`;
    return playerName;
  }

  if (opponentPlayer === "2") return `Player ${opponentPlayer}`;
  return opponentPlayer;
}
