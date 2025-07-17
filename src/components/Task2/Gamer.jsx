import css from "./Task2.module.scss";
import classNames from "classnames";
import { useState } from "react";

function Gamer({ isActive, playerChange, count, children }) {
  const [gamerNumber, setGamerNumber] = useState("");

  const buttonClass = classNames(css.button, {
    [css.buttonActive]: isActive,
    [css.buttonDisabled]: !isActive || count === 3,
  });
  const inputClass = classNames(css.input, {
    [css.buttonActive]: isActive,
    [css.buttonDisabled]: !isActive || count === 3,
  });
  
  const handleButton = () => {
    if(gamerNumber === "") return;
    playerChange(gamerNumber);
    setGamerNumber("");
  };

  return (
    <div className={css.game}>
      {children}
      <div className={css.gamer}>
        <span>Цифра</span>
        <input
          value={gamerNumber}
          type="number"
          min="0"
          max="9"
          className={inputClass}
          onChange={(e) => setGamerNumber(e.target.value)}
        />
        <button className={buttonClass} onClick={() => handleButton()}>
          Зробити хід
        </button>
      </div>
    </div>
  );
}

export default Gamer;
