import css from "./Task2.module.scss";
import { useState } from "react";
import classNames from "classnames";
import { beerList, newspaperList } from "./data";
import { chipsList } from "./data";
import { brandyList } from "./data";
import Order from "./Order";

function Task2() {
  const [flyCategory, setFlyCategory] = useState("notSelected");

  const initialOrder = (id = "") => [
    { id, drink: "", additional: "", snack: "ні" },
  ];
  const [orderMatch, setOrderMatch] = useState(initialOrder());

  const handleCheckBox = (checked) => {
    setOrderMatch((prev) => [{ ...prev[0], snack: checked ? "так" : "ні" }]);
  };

  const flyClass = classNames({
    ["containerTask"]: true,
    [css.business]: flyCategory === "business",
    [css.econom]: flyCategory === "econom",
  });

  const Conclusion = () => {
    const {
      id = flyCategory,
      drink = " - ",
      additional = " - ",
      snack = " - ",
    } = orderMatch[0];
    
    return (
      <div className={css.businessInfo}>
        Клас польоту: {id}, напій: {drink},<br />
        {id === "business" ? "газета :" : "чіпси :"} {additional} <br />
        {id === "business" ? `закуски: ${snack}` : ""}
      </div>
    );
  };

  const handlerType = (value, foodList, key) => {
    const type = foodList.find((el) => el.id === Number(value));

    if (type) {
      setOrderMatch((prev) => [
        {
          ...prev[0],
          [key]: type.name,
          id: flyCategory,
        },
      ]);
    }
  };

  const handlerCategory = (value) => {
    setOrderMatch(initialOrder(value === "2" ? "business" : "econom"));
    setFlyCategory(value === "2" ? "business" : "econom");
  };

  return (
    <div className={flyClass}>
      <select
        name="chooseFly"
        defaultValue="0"
        onChange={(e) => handlerCategory(e.target.value)}
        className={css.selector}
      >
        <option disabled style={{ color: "lightgray" }} value="0">
          Виберіть клас
        </option>
        <option value="1">Економ клас</option>
        <option value="2">Бізнес клас</option>
      </select>

      {flyCategory === "business" && (
        <>
          <div className={css.groupStyles}>
            <div className={css.order}>
              <Order
                select="chooseBrandy"
                onChange={(e) =>
                  handlerType(e.target.value, brandyList, "drink")
                }
                text="Виберіть напій"
                array={brandyList}
              />
              <Order
                select="chooseNewspaper"
                onChange={(e) =>
                  handlerType(e.target.value, newspaperList, "additional")
                }
                text="Виберіть газету"
                array={newspaperList}
              />
            </div>

            <div className={css.checkboxStyle}>
              <span className={css.selector}> Подати закуски: </span>
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => handleCheckBox(e.target.checked)}
                  style={{ width: "20px" }}
                />
                Так / Ні
              </label>
            </div>

            <span className={css.businessInfo}>Замовлення:</span>

            <Conclusion />
          </div>
        </>
      )}
      {flyCategory === "econom" && (
        <div className={css.groupStyles}>
          <Order
            select="chooseBeer"
            onChange={(e) => handlerType(e.target.value, beerList, "drink")}
            text="Виберіть напій"
            array={beerList}
          />
          <>
            <span> Додатково: </span>
            <Order
              select="chooseChips"
              onChange={(e) =>
                handlerType(e.target.value, chipsList, "additional")
              }
              text="Виберіть додатково"
              array={chipsList}
            />
          </>
          <span>Замовлення:</span>
          <Conclusion />
        </div>
      )}
    </div>
  );
}

export default Task2;
