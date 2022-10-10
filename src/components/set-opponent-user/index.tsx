import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { useToastCustom } from "hooks/toast";

import { FC, useState } from "react";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import {
  boardState,
  gameOverState,
  playerOpponentColorState,
  playerOpponentNameState,
  playerState,
} from "state";

const SetOpponentUser: FC = () => {
  const customToast = useToastCustom();
  const resetBoard = useResetRecoilState(boardState);
  const resetPlayer = useResetRecoilState(playerState);
  const resetGameOver = useResetRecoilState(gameOverState);
  const board = useRecoilValue(boardState);
  const [player, setPlayerState] = useRecoilState(playerOpponentNameState);
  const [playerColor, setPlayerColor] = useRecoilState(
    playerOpponentColorState
  );
  const [playerName, setPlayerName] = useState("");
  const [playingWithBot, setPlayingWithBot] = useState(false);
  const gameHasStarted = board.find((arr) => arr.length);

  function handleSaveUser() {
    if (!playerName) return;
    if (player === "Bot") {
      handleReset();
      customToast.showSuccess("Success!", "You are now playing with a bot.");
    }
    setPlayerState(playerName);
    setPlayerName("");
    customToast.showSuccess("Success!", "Player Saved.");
  }

  function handleChoosePlayerColor(color: string) {
    setPlayerColor(color);
  }

  const handleReset = () => {
    resetBoard();
    resetPlayer();
    resetGameOver();
  };

  function handlePlayWithBot() {
    if (gameHasStarted) {
      handleReset();
    }
    customToast.showSuccess("Success!", "You are now playing with a bot.");
    setPlayerState("Bot");
    setPlayingWithBot(true);
    setPlayerName("");
  }

  function handlePlayWithFriend() {
    if (gameHasStarted) {
      handleReset();
    }
    customToast.showSuccess("Success!", "You are now playing with a friend.");
    setPlayerState("Player 2");
    setPlayingWithBot(false);
    setPlayerName("");
  }

  return (
    <Flex>
      <Box flex="1" bg="tomato" p={10}>
        <FormControl>
          <Text>{player === "2" ? "Player 2" : player}</Text>
          <FormLabel>Type your name</FormLabel>
          <Input
            placeholder="Your name"
            value={playerName}
            type="text"
            onChange={(e) => setPlayerName(e.target.value)}
          />
        </FormControl>
        <Spacer mt={10} />
        <FormControl as="fieldset">
          <FormLabel as="legend">Choose Your Color</FormLabel>
          <RadioGroup defaultValue={playerColor}>
            <HStack spacing="24px">
              <Radio onClick={() => handleChoosePlayerColor("red")} value="red">
                Red
              </Radio>
              <Radio
                onClick={() => handleChoosePlayerColor("yellow")}
                value="yellow"
              >
                Yellow
              </Radio>
              <Radio
                onClick={() => handleChoosePlayerColor("green")}
                value="green"
              >
                Green
              </Radio>
              <Radio
                onClick={() => handleChoosePlayerColor("blue")}
                value="blue"
              >
                Blue
              </Radio>
            </HStack>
          </RadioGroup>
          <Spacer mt={10} />
          <Button
            color="black"
            onClick={handleSaveUser}
            disabled={!playerName || playerName.includes("Player 2")}
          >
            Save
          </Button>
          <Spacer mt={5} />
          <Button
            color="black"
            onClick={handlePlayWithBot}
            disabled={playingWithBot}
          >
            Play With Bot
          </Button>
          <Spacer mt={5} />
          <Button
            color="black"
            onClick={handlePlayWithFriend}
            disabled={!playingWithBot}
          >
            Play With Your Friend
          </Button>
        </FormControl>
      </Box>
    </Flex>
  );
};

export default SetOpponentUser;
