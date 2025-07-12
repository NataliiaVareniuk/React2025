import { useState } from "react";

import css from "./Task6.module.scss";

function ListPrint({ list, elSelected, setElSelected }) {
  const handleLi = (el) => {
    setElSelected((prev) => (prev?.id === el.id ? null : el));
  };

  return list.map((el) => (
    <li
      className={`${css.listItem}
          ${el.id === elSelected?.id ? css.active : ""}`}
      key={el.id}
      onClick={() => handleLi(el)}
    >
      {el.name}
    </li>
  ));
}

function Task6() {
  const [listBoys, setListBoys] = useState([
    { id: 1, name: "Петро" },
    { id: 2, name: "Степан" },
    { id: 3, name: "Михайло" },
    { id: 4, name: "Василь" },
    { id: 5, name: "Іван" },
    { id: 6, name: "Микита" },
    { id: 7, name: "Андрій" },
    { id: 8, name: "Мирослав" },
  ]);
  const [listGirls, setListGirls] = useState([
    { id: 11, name: "Оксана" },
    { id: 12, name: "Іванна" },
    { id: 13, name: "Дарина" },
    { id: 14, name: "Тетяна" },
    { id: 15, name: "Ліля" },
    { id: 16, name: "Світлана" },
    { id: 17, name: "Лариса" },
  ]);
  const [elBoy, setElBoy] = useState(null);
  const [elGirl, setElGirl] = useState(null);

  const [pair, setPair] = useState([]);

  function handlePair() {
    if (elBoy === null || elGirl === null) return;

    const boy = listBoys.find((b) => b.id === elBoy.id);
    const girl = listGirls.find((b) => b.id === elGirl.id);

    setPair((prev) => [...prev, { id: prev.length, boy, girl }]);
    setListGirls((prev) => prev.filter((el) => el.id !== elGirl.id));
    setListBoys((prev) => prev.filter((el) => el.id !== elBoy.id));

    setElBoy(null);
    setElGirl(null);
  }
  
  function handleChange(el) {
    if (el === null) return;

    setPair((prev) => prev.filter((item) => item.id !== el.id));

    setListGirls((prev) => [...prev, { id: el.girl.id, name: el.girl.name }]);
    setListBoys((prev) => [...prev, { id: el.boy.id, name: el.boy.name }]);
  }

  return (
    <div className={`containerTask ${css.containerTask6}`}>
      <div className={css.list}>
        <div>
          <h1 className={css.h1}>Хлопці:</h1>
          <div>
            <ul className={css.items}>
              {" "}
              <ListPrint
                list={listBoys}
                elSelected={elBoy}
                setElSelected={setElBoy}
              />{" "}
            </ul>
          </div>
        </div>

        <div>
          <h1 className={css.h1}>Дівчата:</h1>
          <div>
            <ul className={css.items}>
              {" "}
              <ListPrint
                list={listGirls}
                elSelected={elGirl}
                setElSelected={setElGirl}
              />{" "}
            </ul>
          </div>
        </div>
      </div>

      <button
        className={` ${css.button} ${
          elBoy !== null && elGirl !== null ? css.activeButton : ""
        }  `}
        onClick={() => handlePair()}
      >
        Додати пару
      </button>

      <div>
        <h1 className={css.h1}>Обрані пари:</h1>
        <ul>
          {pair.map((el) => (
            <li className={css.pairs} key={el.id}>
              {el.boy.name} - {el.girl.name}
              <button
                className={`${css.button} ${css.activeButton}`}
                onClick={() => handleChange(el)}
              >
                Поміняти пару
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Task6;
