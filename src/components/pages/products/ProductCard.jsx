import css from "./Product.module.scss";

function ProductCard({ product }) {
  return (
    <div className={css.cardContainer}>
      <h1 className={css.title}> {product.title} </h1>
      <span>Категорія : {product.category}</span>
      <img
        className={css.images}
        src={product.images[0]}
        alt={product.description}
      />

      <span> Кількість в магазині : {product.stock}</span>
      <span className={css.price}> Ціна : {product.price} $</span>
    </div>
  );
}

export default ProductCard;
