import css from "./Task2.module.scss";


function Header({randomNumbers, children}) {



 return (
    <div className={css.game}>
     <h2> Число</h2>
     <ul className={css.squares}>
       {randomNumbers.map((el, index) =>
       <li key={index} 
         className={`${css.square} ${el.isPredicted ? css.predicted : ""}`}
       > 
       { el.isPredicted && el.num }
         </li>
     
     )}
     </ul>
     {children}
   
    </div>
  );
}

export default Header;