import { Circle, Flex } from "@chakra-ui/react";
import { boardRows } from "const";
import { usePlayPiece } from "hooks";
import { FC, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import {
  boardState,
  gameOverState,
  playerColorState,
  playerOpponentColorState,
  playerOpponentNameState,
  playerState,
} from "state";
import { botPlay } from "utils/bot";
import { chooseColor } from "utils/chooseColor";

const padCol = (col: number[]): number[] =>
  col.join("").padEnd(boardRows, "0").split("").map(Number);

const Board: FC = () => {
  const play = usePlayPiece();
  const board = useRecoilValue(boardState);
  const player = useRecoilValue(playerState);
  const opponentPlayer = useRecoilValue(playerOpponentNameState);
  const playerColor = useRecoilValue(playerColorState);
  const playerOpponentColor = useRecoilValue(playerOpponentColorState);
  const gameOver = useRecoilValue(gameOverState);
  const [color, setColor] = useState(playerColor);
  const [opponentColor, setOpponentColor] = useState(playerOpponentColor);

  useEffect(() => {
    setColor(playerColor);
  }, [playerColor]);

  useEffect(() => {
    setOpponentColor(playerOpponentColor);
  }, [playerOpponentColor]);

  useEffect(() => {
    botPlay({ player, opponentPlayer, play });
  }, [player]);

  return (
    <Flex justify="center">
      {board.map((col, i) => (
        <Flex
          key={i}
          role="group"
          onClick={() => play(i)}
          flexDirection="column-reverse"
          cursor={gameOver ? "auto" : "pointer"}
        >
          {padCol(col).map((p, j) => {
            return (
              <Circle
                m={1}
                size="40px"
                key={`${i}-${j}`}
                boxShadow="inner"
                bg={chooseColor({ p, color, opponentColor })}
              />
            );
          })}
          <Circle
            m={1}
            size="40px"
            boxShadow="base"
            visibility="hidden"
            bg={chooseColor({ p: player, opponentColor, color })}
            _groupHover={{
              visibility: gameOver ? "hidden" : "visible",
            }}
          />
        </Flex>
      ))}
    </Flex>
  );
};

export default Board;
