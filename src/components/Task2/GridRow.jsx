import { memo } from "react";
import css from "./Task2.module.scss";

function GridRow({list}) {
  return (
    
    <div className={css.grid}>  
    <div className={css.grid__item}>{list.code}</div>
    <div className={css.grid__item}>{list.name}</div>
    <div className={css.grid__item}>{list.price}$</div>
    
    </div>
  )
}

export default memo(GridRow);
