import { boardCols } from "const";
import { atom } from "recoil";
import { localStorageEffect } from "recoil-effects/localStorageEffect";
import { Board, Player } from "types";

export const boardState = atom<Board>({
  key: "boardState",
  default: Array(boardCols).fill([]),
  effects: [localStorageEffect("boardState")],
});

export const playerState = atom<Player>({
  key: "playerState",
  default: 1,
});

export const playerColorState = atom<string>({
  key: "playerColorState",
  default: "green",
});

export const playerOpponentColorState = atom<string>({
  key: "playerOpponentColorState",
  default: "blue",
});

export const playerNameState = atom<String>({
  key: "playerNameState",
  default: "1",
});

export const playerOpponentNameState = atom<String>({
  key: "playerOpponentNameState",
  default: "2",
});

export const gameOverState = atom<boolean>({
  key: "gameOverState",
  default: false,
});
