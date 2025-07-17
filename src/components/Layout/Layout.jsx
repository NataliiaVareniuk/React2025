import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div >
    
      <header className="headerClass" >
        <nav className="nav">
          <ul className="list">
            <li className="item" > <NavLink to="/task1">Task1</NavLink></li>
            <li className="item" ><NavLink to="/task2">Task2</NavLink> </li>
            
          </ul>
        </nav>
      </header>
      <Outlet />
    </ div>
  );
}

export default Layout;
