import css from "./Pages.module.scss"

function PayMethods(){
    return(
        <div className={css.container}>
         <h1> Правила оплати</h1>
         <span> При отриманні</span>
         <span> Переказ на картку</span>
         <span> Записати у зошит</span>
        </ div>
    );
}

export default PayMethods;