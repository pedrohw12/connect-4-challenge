import { Button } from "@chakra-ui/react";
import { useToastCustom } from "hooks/toast";
import { FC } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { boardState, gameOverState, playerState } from "state";

const GameControls: FC = () => {
  const board = useRecoilValue(boardState);
  const player = useRecoilValue(playerState);
  const resetBoard = useResetRecoilState(boardState);
  const resetPlayer = useResetRecoilState(playerState);
  const resetGameOver = useResetRecoilState(gameOverState);
  const gameOver = useRecoilValue(gameOverState);
  const customToast = useToastCustom();
  const toastDescription =
    player === 1 && gameOver
      ? "Let's win it again?"
      : "You have now a new chance to win!";

  const handleReset = () => {
    resetBoard();
    resetPlayer();
    resetGameOver();
    customToast.showSuccess("Success!", toastDescription);
  };

  return (
    <Button
      color="black"
      onClick={handleReset}
      isDisabled={!board.some((col) => col.length)}
    >
      Reset
    </Button>
  );
};

export default GameControls;
