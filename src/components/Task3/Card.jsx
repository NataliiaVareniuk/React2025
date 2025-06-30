
import css from "./Task3.module.scss"

function Card({ data }){

  return (
    <div className={css.cardContainer}>
      <img  src={data.img} alt={data.enWord} className= {css.img} />
      <span  className={css.cardword}> {data.enWord} </span>
    </ div>
  );
}

export default Card;
