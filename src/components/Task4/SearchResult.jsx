import { useState, useMemo } from "react";
import data from "../../data/newProducts.json";
import useDebounce from "./useDebounce";
import css from "./Task4.module.scss";

function SearchResult() {
  const [searchTerm, setSearchTerm] = useState("");
  const timeValue = useDebounce(searchTerm, 500);

  const filteredList = useMemo(() => {
    return data.filter((item) =>
      item.name.toLowerCase().includes(timeValue.toLowerCase())
    );
  }, [data, timeValue]);

  return (
    <>
      <input
        type="text"
        placeholder="Знайти..."
        className={css.input}
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />

      <ul style={{ padding: "5px" }}>
        {filteredList.length > 0 ? (
          filteredList.map((item) => (
            <li style={{ padding: "5px" }} key={item.id}>
              {item.name}
            </li>
          ))
        ) : (
          <div> Пошук не дав результатів</div>
        )}
      </ul>
    </>
  );
}

export default SearchResult;
