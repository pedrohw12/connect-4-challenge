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
import { useRecoilState } from "recoil";
import { playerColorState, playerNameState } from "state";

const SetUser: FC = () => {
  const customToast = useToastCustom();
  const [player, setPlayerState] = useRecoilState(playerNameState);
  const [playerColor, setPlayerColor] = useRecoilState(playerColorState);
  const [playerName, setPlayerName] = useState("");

  function handleSaveUser() {
    if (!playerName) return;
    setPlayerState(playerName);
    setPlayerName("");
    customToast.showSuccess("Success!", "Player Saved.");
  }

  function handleChoosePlayerColor(color: string) {
    setPlayerColor(color);
  }

  return (
    <Flex>
      <Box flex="1" bg="tomato" p={10}>
        <FormControl>
          <Text>{player === "1" ? "Player 1" : player}</Text>
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
            disabled={!playerName || playerName.includes("Player 1")}
          >
            Save
          </Button>
        </FormControl>
      </Box>
    </Flex>
  );
};

export default SetUser;
