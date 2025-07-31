import useFetch from "../../../utils/hooks/useFetch";
import apiRoutes from "../../../api/apiRoutes";
import ProductCard from "./ProductCard";
import css from "./Product.module.scss";
import frontRoutes from "../../routes/frontRoutes";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useState, useMemo, useEffect } from "react";

function ProductList() {
  const [sortCategory, setSortCategory] = useState(null);
  const { category } = useParams();
  const navigate = useNavigate();

  const { data: products, loading, error } = useFetch(apiRoutes.productsList);

  const filteredList = useMemo(() => {
    if (!products) return [];
    if (!sortCategory) return products;

    let list = [...products];

    list = list.filter((item) =>
      item.category.toLowerCase().includes(sortCategory.toLowerCase())
    );

    return list;
  }, [sortCategory, products]);

  useEffect(() => {
    setSortCategory(category);
  }, [category]);

  if (loading) {
    return <p>Завантаження...</p>;
  }
  if (error) {
    return <p>Помилка завантаження продуктів: {error.message}</p>;
  }

  return (
    <div className={css.buttonContainer}>
      {!loading && !error && filteredList ? (
        <ul className={css.cards}>
          {filteredList.map((el) => (
            <Link
              key={el.id}
              to={frontRoutes.navigate.products.getDetail(el.id)}
            >
              <ProductCard product={el} />
            </Link>
          ))}
        </ul>
      ) : (
        <p>Товар відсутній </p>
      )}
      <button
        className={css.button}
        onClick={() => navigate(frontRoutes.pages.home)}
      >
        {" "}
        На головну
      </button>
    </div>
  );
}

export default ProductList;
