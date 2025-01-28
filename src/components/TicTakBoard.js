import { useState } from "react";
import { useEffect } from "react";
import Result from "./result";

function TicTakBoard() {
  const [turn, setTurn] = useState(true);
  const [buttonImages, setButtonImages] = useState(Array(9).fill(null));

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
  function restartGame() {
    setresult(Array(9).fill(0));
    setButtonImages(Array(9).fill(null));
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
    if (result.every((value) => value !== 0)) {
      console.log("Tie");
      restartGame();
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
                buttonImage={buttonImages[0]}
                setButtonImage={(img) => {
                  const newImages = [...buttonImages];
                  newImages[0] = img;
                  setButtonImages(newImages);
                }}
              />

              <SqButton
                turn={turn}
                toggleTurn={toggleTurn}
                result={result}
                endGame={() => endGame(1)}
                buttonImage={buttonImages[1]}
                setButtonImage={(img) => {
                  const newImages = [...buttonImages];
                  newImages[1] = img;
                  setButtonImages(newImages);
                }}
              />

              <SqButton
                turn={turn}
                toggleTurn={toggleTurn}
                result={result}
                endGame={() => endGame(2)}
                buttonImage={buttonImages[2]}
                setButtonImage={(img) => {
                  const newImages = [...buttonImages];
                  newImages[2] = img;
                  setButtonImages(newImages);
                }}
              />
            </div>
            <div className="center-text">
              <SqButton
                turn={turn}
                toggleTurn={toggleTurn}
                result={result}
                endGame={() => endGame(3)}
                buttonImage={buttonImages[3]}
                setButtonImage={(img) => {
                  const newImages = [...buttonImages];
                  newImages[3] = img;
                  setButtonImages(newImages);
                }}
              />

              <SqButton
                turn={turn}
                toggleTurn={toggleTurn}
                result={result}
                endGame={() => endGame(4)}
                buttonImage={buttonImages[4]}
                setButtonImage={(img) => {
                  const newImages = [...buttonImages];
                  newImages[4] = img;
                  setButtonImages(newImages);
                }}
              />

              <SqButton
                turn={turn}
                toggleTurn={toggleTurn}
                result={result}
                endGame={() => endGame(5)}
                buttonImage={buttonImages[5]}
                setButtonImage={(img) => {
                  const newImages = [...buttonImages];
                  newImages[5] = img;
                  setButtonImages(newImages);
                }}
              />
            </div>
            <div className="center-text">
              <SqButton
                turn={turn}
                toggleTurn={toggleTurn}
                result={result}
                endGame={() => endGame(6)}
                buttonImage={buttonImages[6]}
                setButtonImage={(img) => {
                  const newImages = [...buttonImages];
                  newImages[6] = img;
                  setButtonImages(newImages);
                }}
              />

              <SqButton
                turn={turn}
                toggleTurn={toggleTurn}
                result={result}
                endGame={() => endGame(7)}
                buttonImage={buttonImages[7]}
                setButtonImage={(img) => {
                  const newImages = [...buttonImages];
                  newImages[7] = img;
                  setButtonImages(newImages);
                }}
              />

              <SqButton
                turn={turn}
                toggleTurn={toggleTurn}
                result={result}
                endGame={() => endGame(8)}
                buttonImage={buttonImages[8]}
                setButtonImage={(img) => {
                  const newImages = [...buttonImages];
                  newImages[8] = img;
                  setButtonImages(newImages);
                }}
              />
            </div>
          </div>
        </div>
        <button className="restart-but" onClick={restartGame}>
          Restart
        </button>
      </div>
    );
  } else {
    return <Result winner={turn ? "O" : "X"} rendering={rendering} />;
  }
}

function SqButton({
  turn,
  toggleTurn,
  result,
  endGame,
  buttonImage,
  setButtonImage,
}) {
  const img = {
    o: "/images/oimg.png",
    x: "/images/x-img.png",
  };

  const [count, setcount] = useState(0);

  useEffect(() => {
    if (buttonImage === null) {
      setcount(0);
    }
  }, [buttonImage]);

  function handleClick() {
    if (count === 0) {
      setcount(count + 1);
      const newImage = turn ? img.x : img.o;
      setButtonImage(newImage);
      toggleTurn();
      endGame();
    }
    // if (result.every((x) => x == 0)) {
    //   setcount(0);
    // }
  }

  return (
    <button className="tic-tak-but" onClick={handleClick}>
      {buttonImage && <img src={buttonImage} alt=""></img>}
    </button>
  );
}
export default TicTakBoard;
