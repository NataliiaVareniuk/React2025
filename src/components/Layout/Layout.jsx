import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div >
    
      <header className="headerClass" >
        <nav className="nav">
          <ul className="list">
            <li className="item" > <NavLink to="/task6">Task6</NavLink></li>
            <li className="item" ><NavLink to="/task7">Task7</NavLink> </li>
            
          </ul>
        </nav>
      </header>
      <Outlet />
    </ div>
  );
}

export default Layout;
