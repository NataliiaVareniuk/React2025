import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import css from "./Layout.module.scss"

function MainLayout() {
  
  return (
    <div className={css.wrapper} >
    <Header />
    <main className={css.page} >
      <Outlet />
    </main>
    <Footer/>
    </ div>
  )
}

export default MainLayout;
//