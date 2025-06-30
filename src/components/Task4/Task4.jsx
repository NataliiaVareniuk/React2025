import { workersList } from "../Task2/data";
import css from "./Task4.module.scss";

function Task4() {
  const listItem = workersList.map((el) => (
    <li className={css.listItem} key={el.id}>
      {`${el.name} : ${el.salary.toLocaleString()} грн.`}
    </li>
  ));

  return (
    <div className="containerTask">
      <ul className={css.list}>
        <li className={css.listItem}> Працівник : </li>
        {listItem}
      </ul>
    </div>
  );
}

export default Task4;
