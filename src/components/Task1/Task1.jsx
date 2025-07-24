import { useEffect, useMemo, useState } from "react";

import css from "./Task1.module.scss";
import ResultDisplay from "./ResultDisplay";

function Task1() {
  const [aNumber, setANumber] = useState(0);
  const [bNumber, setBNumber] = useState(0);
   const [counter, setCounter] = useState(0);

  const result = useMemo(() => {
    console.log('result')
    return aNumber + bNumber;
  
  }, [aNumber, bNumber]);

  const handleChange = (setFunction) => (e) => {
    setFunction(Number(e.target.value));
  };


  const handleCount = () =>{
    setCounter(prev => prev+1);
  }

  return (
    <div className={`containerTask ${css.containerTask1}`}>
      <div className={css.calculate}>
        <label className={css.label}>
          A
          <input
            className={css.input}
            onChange={handleChange(setANumber)}
            type="number"
            value={aNumber}
          />
        </label>
        <span>+</span>
        <label className={css.label}>
          B
          <input
            type="number"
            className={css.input}
            onChange={handleChange(setBNumber)}
            value={bNumber}
          />
        </label>
        <span>=</span>
        <ResultDisplay result={result} />
      </div>
      <hr />
      <span>Лічильник</span>
      <button className={css.button} onClick={(handleCount)}>{counter}</button> 
    </div>
  );
}

export default Task1;
