import { boardRows } from "const";
import { useRecoilState } from "recoil";
import { boardState, gameOverState, playerState } from "state";

const testWin = (arr: number[]): boolean => /1{4}|2{4}/.test(arr.join(""));

const usePlayPiece = () => {
  const [board, setBoard] = useRecoilState(boardState);
  const [player, setPlayerTurn] = useRecoilState(playerState);
  const [gameOver, setGameOver] = useRecoilState(gameOverState);

  return (col: number) => {
    if (gameOver) {
      return;
    }

    // Prevent adding a piece when the column is full
    if (board[col].length === boardRows) {
      return;
    }

    // Play piece (non mutating)
    const newBoard = board.map((column, i) =>
      i === col ? [...column, player] : column
    );

    const row = newBoard[col].length - 1;
    const winVertically = newBoard[col];
    const winHorizontally = newBoard.map((col) => col[row] || 0);

    const winDiagonallyOne = [
      newBoard[0][0],
      newBoard[1][1],
      newBoard[2][2],
      newBoard[3][3],
    ];
    const winDiagonallyTwo = [
      newBoard[0][1],
      newBoard[1][2],
      newBoard[2][3],
      newBoard[3][4],
    ];
    const winDiagonallyThree = [
      newBoard[0][2],
      newBoard[1][3],
      newBoard[2][4],
      newBoard[3][5],
    ];
    const winDiagonallySecColOne = [
      newBoard[1][0],
      newBoard[2][1],
      newBoard[3][2],
      newBoard[4][3],
    ];
    const winDiagonallySecColTwo = [
      newBoard[1][1],
      newBoard[2][2],
      newBoard[3][3],
      newBoard[4][4],
    ];
    const winDiagonallySecColThree = [
      newBoard[1][2],
      newBoard[2][3],
      newBoard[3][4],
      newBoard[4][5],
    ];
    const winDiagonallyThirdColOne = [
      newBoard[2][0],
      newBoard[3][1],
      newBoard[4][2],
      newBoard[5][3],
    ];
    const winDiagonallyThirdColTwo = [
      newBoard[2][1],
      newBoard[3][2],
      newBoard[4][3],
      newBoard[5][4],
    ];
    const winDiagonallyThirdColThree = [
      newBoard[2][2],
      newBoard[3][3],
      newBoard[4][4],
      newBoard[5][5],
    ];
    const winDiagonallyFourthColOne = [
      newBoard[3][0],
      newBoard[4][1],
      newBoard[5][2],
      newBoard[6][3],
    ];
    const winDiagonallyFourthColTwo = [
      newBoard[3][1],
      newBoard[4][2],
      newBoard[5][3],
      newBoard[6][4],
    ];
    const winDiagonallyFourthColThree = [
      newBoard[3][2],
      newBoard[4][3],
      newBoard[5][4],
      newBoard[6][5],
    ];
    const winDiagonallySeventhColOne = [
      newBoard[6][0],
      newBoard[5][1],
      newBoard[4][2],
      newBoard[3][3],
    ];
    const winDiagonallySeventhColTwo = [
      newBoard[6][1],
      newBoard[5][2],
      newBoard[4][3],
      newBoard[3][4],
    ];
    const winDiagonallySeventhColThree = [
      newBoard[6][2],
      newBoard[5][3],
      newBoard[4][4],
      newBoard[3][5],
    ];
    const winDiagonallySixthColOne = [
      newBoard[5][0],
      newBoard[4][1],
      newBoard[3][2],
      newBoard[2][3],
    ];
    const winDiagonallySixthColTwo = [
      newBoard[5][1],
      newBoard[4][2],
      newBoard[3][3],
      newBoard[2][4],
    ];
    const winDiagonallySixthColThree = [
      newBoard[5][2],
      newBoard[4][3],
      newBoard[3][4],
      newBoard[2][5],
    ];
    const winDiagonallyFifthColOne = [
      newBoard[4][0],
      newBoard[3][1],
      newBoard[2][2],
      newBoard[1][3],
    ];
    const winDiagonallyFifthColTwo = [
      newBoard[4][1],
      newBoard[3][2],
      newBoard[2][3],
      newBoard[1][4],
    ];
    const winDiagonallyFifthColThree = [
      newBoard[4][2],
      newBoard[3][3],
      newBoard[2][4],
      newBoard[1][5],
    ];
    const winDiagonallyFourthColOneReverse = [
      newBoard[3][0],
      newBoard[2][1],
      newBoard[1][2],
      newBoard[0][3],
    ];
    const winDiagonallyFourthColTwoReverse = [
      newBoard[3][1],
      newBoard[2][2],
      newBoard[1][3],
      newBoard[0][4],
    ];
    const winDiagonallyFourthColThreeReverse = [
      newBoard[3][2],
      newBoard[2][3],
      newBoard[1][4],
      newBoard[0][5],
    ];

    function hasDiagonallyFromLeftToRight(player: number) {
      let indexes: any = [];
      let testBoard: any = [];
      let binaryValuesArray: any = [];

      newBoard.forEach((el) =>
        el.filter((n, index) => {
          return testBoard.push({ value: n, index });
        })
      );

      binaryValuesArray = testBoard.filter((obj: any) => {
        return obj.value === player;
      });
      const filteredArr = binaryValuesArray.reduce((acc: any, current: any) => {
        const x = acc.find((item: any) => item.index === current.index);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);
      // console.log("filtered", filteredArr);
      for (let index = 0; index < filteredArr.length; index++) {
        if (
          filteredArr.find(
            (el: any) => el.index === Math.max(...indexes) + 1
          ) ||
          index === 0
        ) {
          indexes.push(filteredArr[index].index);
        }
      }
      // console.log("indexes", indexes);
      return indexes.length === 4 ? [1, 1, 1, 1] : [-1, -1, -1, -1];
    }

    function hasDiagonallyFromRightToLeft(player: number) {
      let indexesTwo: any = [];
      let testBoard: any = [];
      let binaryValuesArray: any = [];

      newBoard.forEach((el) =>
        el.filter((n, index) => {
          return testBoard.push({ value: n, index });
        })
      );

      binaryValuesArray = testBoard.filter((obj: any) => {
        return obj.value === player;
      });

      const filteredArr = binaryValuesArray.reduce((acc: any, current: any) => {
        const x = acc.find((item: any) => item.index === current.index);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);

      for (let index = 0; index < filteredArr.length; index++) {
        if (
          filteredArr.find(
            (el: any) => el.index === Math.max(...indexesTwo) + 1
          ) ||
          index === 0
        ) {
          filteredArr.forEach((el: number) => indexesTwo.push(el));
          // indexesTwo.push(filteredArr.length);
          // if (player === 1) console.log("indexesTwo", indexesTwo);
        }
      }
      // if (player === 1) console.log("filtered", filteredArr);
      // if (player === 1) console.log("indexesTwo", indexesTwo);
      return indexesTwo.length === 4 ? [2, 2, 2, 2] : [-1, -1, -1, -1];
    }

    if (
      testWin(winVertically) ||
      testWin(winHorizontally) ||
      testWin(winDiagonallyOne) ||
      testWin(winDiagonallyTwo) ||
      testWin(winDiagonallyThree) ||
      testWin(winDiagonallySecColOne) ||
      testWin(winDiagonallySecColTwo) ||
      testWin(winDiagonallySecColThree) ||
      testWin(winDiagonallyThirdColOne) ||
      testWin(winDiagonallyThirdColTwo) ||
      testWin(winDiagonallyThirdColThree) ||
      testWin(winDiagonallyFourthColOne) ||
      testWin(winDiagonallyFourthColTwo) ||
      testWin(winDiagonallyFourthColThree) ||
      testWin(winDiagonallySeventhColOne) ||
      testWin(winDiagonallySeventhColTwo) ||
      testWin(winDiagonallySeventhColThree) ||
      testWin(winDiagonallySixthColOne) ||
      testWin(winDiagonallySixthColTwo) ||
      testWin(winDiagonallySixthColThree) ||
      testWin(winDiagonallyFifthColOne) ||
      testWin(winDiagonallyFifthColTwo) ||
      testWin(winDiagonallyFifthColThree) ||
      testWin(winDiagonallyFourthColOneReverse) ||
      testWin(winDiagonallyFourthColTwoReverse) ||
      testWin(winDiagonallyFourthColThreeReverse)
    ) {
      setGameOver(true);
    } else {
      setPlayerTurn(player === 1 ? 2 : 1);
    }

    setBoard(newBoard);
  };
};

export default usePlayPiece;
