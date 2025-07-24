import { useState, useDeferredValue, useMemo } from "react";
import css from "./Task2.module.scss";
import data from "../../data/products.json";
import GridRow from "./GridRow";


function DataGrid() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState(null);
  const [direction, setDirection] = useState(true);
  const deferredSearchTerm = useDeferredValue(searchTerm);

  const filteredList = useMemo(() => {
    let list = [...data];

    if (deferredSearchTerm) {
      list = list.filter((item) =>
        item.name.toLowerCase().includes(deferredSearchTerm.toLowerCase())
      );
    }

    switch (sortType) {
      case "name":
        list = list.sort((a, b) =>
          direction
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
        );
        break;
      case "price":
        list = list.sort((a, b) =>
          direction
            ? parseFloat(a.price) - parseFloat(b.price)
            : parseFloat(b.price) - parseFloat(a.price)
        );
        break;
      default:
        list = list.sort((a, b) =>
          direction
            ? parseInt(a.code) - parseInt(b.code)
            : parseInt(b.code) - parseInt(a.code)
        );
    }

    return list;
  }, [sortType, deferredSearchTerm, direction, data]);

  const handleButton = (type) => {
    if (sortType === type) {
      setDirection((prev) => !prev);
    } else {
      setSortType(type);
      setDirection(true);
    }
  };

  const directionClass = direction ? css.directionUp : css.directionDown;

  return (
    <div className={`containerTask ${css.containerTask2}`}>
      <label className={css.label}>
        Введіть товар:
        <input
          type="text"
          className={css.input}
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </label>
      <span> Сортувати за:</span>
      <div className={css.buttons}>
        <button
          className={sortType === "code" ? css.buttonActive : css.button}
          onClick={() => handleButton("code")}
        >
          {" "}
          кодом
        </button>
        <button
          className={sortType === "name" ? css.buttonActive : css.button}
          onClick={() => handleButton("name")}
        >
          {" "}
          назвою
        </button>
        <button
          className={sortType === "price" ? css.buttonActive : css.button}
          onClick={() => handleButton("price")}
        >
          {" "}
          ціною
        </button>
      </div>
      <div className={css.grid__block}>
        <div className={css.grid__head}>
          <span className={sortType === "code" ? directionClass : ""}>Код</span>
          <span className={sortType === "name" ? directionClass : ""}>
            Назва
          </span>
          <span className={sortType === "price" ? directionClass : ""}>
            Ціна
          </span>
        </div>
        <div className={css.filteredList}>
          {filteredList.map((item) => (
            <GridRow key={item.id} list={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DataGrid;
