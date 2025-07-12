import { useState } from "react";
import css from "./Task7.module.scss";
import { surnameList } from "./data.js";

function Task1() {
  const [findElem, setFindElem] = useState("");

  const listItem = surnameList.map(
    (el) =>
      el.name.toLowerCase().includes(findElem) && (
        <li className={css.listItem} key={el.id}>
          {`${el.name} `}
        </li>
      )
  );

  return (
    <div className={`containerTask ${css.containerTask7}`}>
      <label className={css.label}>
        Ім'я: {""}
        <input
          value={findElem}
          type="text"
          placeholder="я шукаю..."
          className={css.input}
          onChange={(e) => setFindElem(e.target.value.trim())}
        />
      </label>
      <div className={css.items}>
        <h1 className={css.h1}>Працівники:</h1>
        <ul> {listItem} </ul>
      </div>
    </div>
  );
}

export default Task1;
