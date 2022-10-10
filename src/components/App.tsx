import { ChakraProvider, Container, VStack } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import Board from "components/Board";
import GameControls from "components/GameControls";
import GameProgress from "components/GameProgress";
import { FC } from "react";
import { RecoilRoot } from "recoil";
import SetOpponentUser from "./set-opponent-user";
import SetUser from "./set-user";

const App: FC = () => {
  return (
    <ChakraProvider>
      <RecoilRoot>
        <Flex
          color="white"
          flexDirection={["column", "column", "row"]}
          maxW="1920"
        >
          <SetUser />
          <Container flex="1" py={4} as={VStack}>
            <Board />
            <GameProgress />
            <GameControls />
          </Container>
          <SetOpponentUser />
        </Flex>
      </RecoilRoot>
    </ChakraProvider>
  );
};

export default App;
