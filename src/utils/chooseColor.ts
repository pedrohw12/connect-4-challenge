import { playerColor } from "const";

interface IChooseColorParams {
  p: number;
  color: string;
  opponentColor: string;
}

export function chooseColor({ p, color, opponentColor }: IChooseColorParams) {
  if (p === 1) {
    return playerColor[color];
  }

  if (p === 2) {
    return playerColor[opponentColor];
  }

  return "gray.300";
}
