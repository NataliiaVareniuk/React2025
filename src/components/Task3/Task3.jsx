import classNames from "classnames";
import { useState } from "react";

import { dictionaryList } from "../Task2/data";
import Card from "./Card";
import css from "./Task3.module.scss";

function Task3() {
  const initialWord = "";

  const [inputWord, setInputWord] = useState(initialWord);
  const [isCorrect, setIsCorrect] = useState(true);
  const [showNext, setShowNext] = useState(false);

  const [count, setCount] = useState(0);

  const handleButton = () => {
    if (showNext) {
      setCount((prev) => (prev + 1 < dictionaryList.length ? prev + 1 : 0));
      setShowNext(false);
      setInputWord(initialWord);
      setIsCorrect(true);
    } else {
      const correct =
        dictionaryList[count].uaWord === inputWord.trim().toLowerCase();
      setIsCorrect(correct);
      correct && setShowNext(true);
    }
  };

  const translateClass = classNames({
    [css.borderClass]: !showNext && isCorrect,
    [css.correct]: isCorrect && showNext,
    [css.error]: !isCorrect,
  });

  const handleInput = (value) => {
    setInputWord(value);
    setShowNext(false);
    setIsCorrect(true);
  };

  return (
    <div className="containerTask">
      <div className={translateClass}>
        {<Card data={dictionaryList[count]} isCorrect={isCorrect} />}

        <div>
          <p style={{ marginBottom: "5px" }} className={css.label}>
            Ваш переклад:
          </p>
          <input
            className={css.inputWord}
            name="inputword"
            id="inputword"
            placeholder="Введіть переклад..."
            type="text"
            value={inputWord}
            onChange={(e) => handleInput(e.target.value)}
          />
          <div>
            <div
              style={{
                color: isCorrect ? "var(--success)" : "var(--danger)",
                opacity: !showNext && isCorrect ? "0" : "1",
              }}
              className={css.errorMessage}
            >
              {isCorrect ? "Добре, молодець!" : "Невірно, спробуйте ще раз"}
            </div>
          </div>
          <button className={css.button} type="button" onClick={handleButton}>
            {showNext ? "Далі" : "Перевірити"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task3;
