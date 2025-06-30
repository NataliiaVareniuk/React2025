import { useState } from "react";
import css from "./Task6.module.scss";

function Task6() {
  const [newDish, setNewDish] = useState("");
  const [count, setCount] = useState(987);
  const [isEmpty, setIsEmpty] = useState(false);
  const [waitingList, setWaitingList] = useState([
    {
      id: 1263,
      dish: "Борщ",
    },
  ]);

  const [processingList, setProcessingList] = useState([
    {
      id: 1243,
      dish: "Борщ",
    },
    {
      id: 1253,
      dish: "Млинці",
    },
  ]);

  const [completedList, setCompletedList] = useState([
    {
      id: 1223,
      dish: "Каша",
    },
    {
      id: 1283,
      dish: "Сирники",
    },
  ]);

  const handleAddButton = () => {
    setCount((prev) => prev + 1);

    if (newDish === "") {
      setIsEmpty(true);
      return;
    }
    setWaitingList([
      ...waitingList,
      {
        dish: newDish,
        id: count,
      },
    ]);
    setNewDish("");
  };

  const handleItemButton = (props) => {
    setWaitingList((prev) => prev.filter((el) => el.id !== props.id));
    setProcessingList([...processingList, props]);
  };

  const handleProcessingButton = (props) => {
    setProcessingList((prev) => prev.filter((el) => el.id !== props.id));
    setCompletedList([...completedList, props]);
  };

  const handleCompletedButton = (props) => {
    setCompletedList((prev) => prev.filter((el) => el.id !== props.id));
  };

  function GetDish({ dish, action, handleButton }) {
    return (
      <>
        <div className={css.dish}>
          <div className={css.itemDish}>{dish}</div>
          <button className={css.itemButton} onClick={handleButton}>
            {" "}
            {action}
          </button>
        </div>
      </>
    );
  }

  const handleInput = (e) => {
    setNewDish(e.target.value);
    setIsEmpty(false);
  };

  return (
    <div className={`containerTask ${css.containerTask6}`}>
      <div className={css.addDishes}>
        <h2>Нова замовлена страва</h2>
        <input
          value={newDish}
          className={css.input}
          type="text"
          onChange={(e) => handleInput(e)}
        />
        {isEmpty && (
          <span className={css.dishEmpty}> Запишіть нову страву </span>
        )}
        <button className={css.addButton} onClick={handleAddButton}>
          Додати{" "}
        </button>
      </div>
      <div className={css.kitchen}>
        <div className={css.listDishes}>
          <h4 className={css.headList}>Очікують на виконання</h4>
          {waitingList.map((el) => (
            <GetDish
              key={el.id}
              dish={el.dish}
              action="Готувати"
              handleButton={() => handleItemButton(el)}
            />
          ))}
        </div>
        <div className={css.listDishes}>
          <h4 className={css.headList}>Виконуються</h4>
          {processingList.map((el) => (
            <GetDish
              key={el.id}
              dish={el.dish}
              action="Приготовленo"
              handleButton={() => handleProcessingButton(el)}
            />
          ))}
        </div>
        <div className={css.listDishes}>
          <h4 className={css.headList}>Готові до виносу</h4>
          {completedList.map((el) => (
            <GetDish
              key={el.id}
              dish={el.dish}
              action="Подано"
              handleButton={() => handleCompletedButton(el)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Task6;
