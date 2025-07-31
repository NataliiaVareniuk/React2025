import { useState } from "react";
import { Link } from "react-router-dom";
import frontRoutes from "../../routes/frontRoutes";
import css from "./Product.module.scss";

function ProductCategories() {
  const [categories, setCategories] = useState([
    { id: 1, name: "beauty" },
    { id: 2, name: "fragrances" },
    { id: 3, name: "groceries" },
    { id: 4, name: "home-decoration" },
  ]);

  return (
    <div>
      <div className={css.buttons}>
        <div className={css.cards}>
          {categories.map((el) => (
            <Link
              className={css.cardContainer}
              key={el.id}
              to={frontRoutes.navigate.products.getCategory(el.name)}
            >
              <span className={css.title}> {el.name} </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCategories;
