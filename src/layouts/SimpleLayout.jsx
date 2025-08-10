import { Outlet } from "react-router-dom"
import GoHomeButton from "../ui/GoHomeButton"
import Footer from "../components/Footer";
import css from "./Layout.module.scss"

function SimpleLayout() {
  
  return (
      <div className={css.wrapper} >
    <main>
    <Outlet/>
      <div className="buttons" >
        <GoHomeButton />
      </div>

    </main>
    
   
   
     <Footer/>
    </div>
  )
}

export default SimpleLayout