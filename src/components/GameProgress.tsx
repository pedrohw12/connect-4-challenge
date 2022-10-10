import { Heading } from "@chakra-ui/react";
import { FC } from "react";
import { useRecoilValue } from "recoil";
import {
  gameOverState,
  playerNameState,
  playerOpponentNameState,
  playerState,
} from "state";
import { chooseName } from "utils/chooseName";

const GameProgress: FC = () => {
  const player = useRecoilValue(playerState);
  const opponentPlayer = useRecoilValue(playerOpponentNameState);
  const playerName = useRecoilValue(playerNameState);
  const gameOver = useRecoilValue(gameOverState);

  return (
    <Heading as="h3" size="lg" color="#000">
      {gameOver
        ? `${chooseName({ player, playerName, opponentPlayer })} wins!`
        : `${chooseName({ player, playerName, opponentPlayer })}'s turn`}
    </Heading>
  );
};

export default GameProgress;
