import { useNavigate, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import useFetch from "../../../utils/hooks/useFetch";
import apiRoutes from "../../../api/apiRoutes";
import css from "./Product.module.scss";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: product,
    loading,
    error,
  } = useFetch(apiRoutes.getProductById(id));

  if (loading) {
    return <p>Завантаження...</p>;
  }
  if (error) {
    return <p>Помилка завантаження продукту: {error.message}</p>;
  }
  return (
    <div className={css.buttonContainer}>
      {product ? <ProductCard product={product} /> : <p>Товар відсутній</p>}

      <button className={css.button} onClick={() => navigate(-1)}>
        {" "}
        Повернутися
      </button>
    </div>
  );
}
export default ProductDetails;
