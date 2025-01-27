import { useState } from "react";
import { useEffect } from "react";
import Result from "./result";

function TicTakBoard() {
  const [turn, setTurn] = useState(true);

  function toggleTurn() {
    setTurn(!turn);
  }
  const [result, setresult] = useState(Array(9).fill(0));
  // const [tie, setTie] = useState(false);
  const [render, setRender] = useState(false);

  function endGame(n) {
    setresult((prevResult) => {
      const newResult = [...prevResult];
      newResult[n] = turn ? "X" : "O";
      return newResult;
    });
  }
  const x = Array(9).fill(0);
  function restartGame() {
    setresult(x);
  }

  function rendering() {
    setRender(render ? false : true);
    restartGame();
  }
  // function toggleTie() {
  //   setTie(true);
  // }

  useEffect(() => {
    if (
      // Rows
      (result[0] == result[1] && result[1] == result[2] && result[0] != 0) || // Top row
      (result[3] == result[4] && result[4] == result[5] && result[3] != 0) || // Middle row
      (result[6] == result[7] && result[7] == result[8] && result[6] != 0) || // Bottom row
      // Columns
      (result[0] == result[3] && result[3] == result[6] && result[0] != 0) || // Left column
      (result[1] == result[4] && result[4] == result[7] && result[1] != 0) || // Middle column
      (result[2] == result[5] && result[5] == result[8] && result[2] != 0) || // Right column
      // Diagonals
      (result[0] == result[4] && result[4] == result[8] && result[0] != 0) || // Top-left to bottom-right
      (result[2] == result[4] && result[4] == result[6] && result[2] != 0) // Top-right to bottom-left
    ) {
      // console.log(result[0], " - Won the game");
      rendering();
    }
  }, [result]);

  // let y = 0;
  // for (let i in result) {
  //   if (result != 0) {
  //     y = y + 1;
  //   }
  //   if (y == 9) {
  //     toggleTie();
  //   }
  // }

  if (render == false) {
    return (
      <div className="flex">
        <div className="center-text">
          <div className="tic-tak-board">
            <div className="center-text">
              <SqButton
                turn={turn}
                toggleTurn={toggleTurn}
                result={result}
                endGame={() => endGame(0)}
              />
              <SqButton
                turn={turn}
                toggleTurn={toggleTurn}
                result={result}
                endGame={() => endGame(1)}
              />
              <SqButton
                turn={turn}
                toggleTurn={toggleTurn}
                result={result}
                endGame={() => endGame(2)}
              />
            </div>
            <div className="center-text">
              <SqButton
                turn={turn}
                toggleTurn={toggleTurn}
                result={result}
                endGame={() => endGame(3)}
              />
              <SqButton
                turn={turn}
                toggleTurn={toggleTurn}
                result={result}
                endGame={() => endGame(4)}
              />
              <SqButton
                turn={turn}
                toggleTurn={toggleTurn}
                result={result}
                endGame={() => endGame(5)}
              />
            </div>
            <div className="center-text">
              <SqButton
                turn={turn}
                toggleTurn={toggleTurn}
                result={result}
                endGame={() => endGame(6)}
              />
              <SqButton
                turn={turn}
                toggleTurn={toggleTurn}
                result={result}
                endGame={() => endGame(7)}
              />
              <SqButton
                turn={turn}
                toggleTurn={toggleTurn}
                result={result}
                endGame={() => endGame(8)}
              />
            </div>
          </div>
        </div>
        <button className="restart-but">Restart</button>
      </div>
    );
  } else {
    return <Result winner={turn ? "O" : "X"} rendering={rendering} />;
  }
}

function SqButton({ turn, toggleTurn, result, endGame }) {
  const img = {
    o: "/images/oimg.png",
    x: "/images/x-img.png",
  };

  const [count, setcount] = useState(0);
  const [butImg, setbutImg] = useState(false);

  function handleClick() {
    if (count == 0) {
      setcount(count + 1);
      setbutImg(turn ? img.x : img.o);
      toggleTurn();
      endGame();
    }
  }

  return (
    <button className="tic-tak-but" onClick={handleClick}>
      {butImg && <img src={butImg}></img>}
    </button>
  );
}

export default TicTakBoard;
