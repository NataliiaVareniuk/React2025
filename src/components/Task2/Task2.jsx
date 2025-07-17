import { useState } from "react";
import css from "./Task2.module.scss";
import { useEffect } from "react";
import Gamer from "./Gamer";
import Header from "./Header";

function Task2() {
  const [randomNumbers, setRandomNumbers] = useState([]);
  const [isActive, setIsActive] = useState(true);
  const [enteredNumbers, setEnteredNumbers] = useState([]);
  const [isEntered, setIsEntered] = useState(false);
  const [count, setCount] = useState(0);

  const generateNumber = () => {
    const firstNumber = Math.floor(Math.random() * 9 + 1);
    const number = Array.from({ length: 2 }, () =>
      Math.floor(Math.random() * 10)
    );
    setRandomNumbers([
      { num: firstNumber, isPredicted: false },
      ...number.map((n) => ({ num: n, isPredicted: false })),
    ]);

    setIsEntered(false);
    setCount(0);
    setIsActive(true);
    setEnteredNumbers([]);
  };

  useEffect(() => {
    generateNumber();
  }, []);

  const playerChange = (num) => {
    if (!num || num === "") return;

    const isSuccess = compareNumbers(Number(num));
    if (!isSuccess ||  count === 3) return
    setIsActive((prev) => !prev);
  };

  function compareNumbers(num) {
    if (!enteredNumbers.includes(num)) {
      setIsEntered(false);
      let newCount = 0;

      const newStatus = randomNumbers.map((el) => {
        if (el.num === num && !el.isPredicted) {
          newCount++;
          return { ...el, isPredicted: true };
        }
        return el;
      });
      setRandomNumbers(newStatus);
      setCount((prev) => prev + newCount);

      setEnteredNumbers((prev) => [...prev, num]);
    } else {
      setIsEntered(true);

      return false;
    }
    return true;
  }

  const getWarning = (isPlayer) => {
    if (isEntered && isPlayer)
      return <span className={css.error}>Таке число вже задавали</span>;
    return null;
  };

  const getWinnerMessage = (text, isWinner) => {
    if (count === 3 && isWinner) {
      return <span className={css.winner}> {text} </span>;
    }
    return null;
  };

  return (
    <div className={`containerTask ${css.containerTask2}`}>
      <Header randomNumbers={randomNumbers}>
        <button className={css.button} onClick={generateNumber}>
          Згенерувати число
        </button>
      </Header>
      <div className={css.gamerPart}>
        <Gamer
          isActive={isActive}
          playerChange={playerChange}
          count={count}
          isEntered={isEntered}
        >
          <h2>Гравець1</h2>
          {getWarning(isActive)}
          {getWinnerMessage("Переміг перший гравець", isActive)}
        </Gamer>

        <Gamer
          isActive={!isActive}
          playerChange={playerChange}
          count={count}
          isEntered={isEntered}
        >
          <h2>Гравець2</h2>
          {getWarning(!isActive)}
          {getWinnerMessage("Переміг другий гравець", !isActive)}
        </Gamer>
      </div>
    </div>
  );
}

export default Task2;
