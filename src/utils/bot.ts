interface IBotPlayParams {
  player: number;
  opponentPlayer: String;
  play: (col: number) => void;
}

const randomPosition = Math.floor(Math.random() * 6);

export function botPlay({ player, opponentPlayer, play }: IBotPlayParams) {
  if (player === 2 && opponentPlayer === "Bot") {
    setTimeout(() => {
      play(randomPosition);
    }, 3000);
  }
}
