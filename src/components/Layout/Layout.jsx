import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div>
      <header className="headerClass">
        <Navbar />
      </header>
      <main className="mainClass">
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default Layout;
