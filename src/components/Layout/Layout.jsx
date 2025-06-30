import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div >
    
      <header className="headerClass" >
        <nav className="nav">
          <ul className="list">
            <li className="item" > <NavLink to="/task1">Task1</NavLink></li>
            <li className="item" ><NavLink to="/task2">Task2</NavLink> </li>
            <li className="item" ><NavLink to="/task3">Task3</NavLink> </li>
             <li className="item" > <NavLink to="/task4">Task4</NavLink></li>
            <li className="item" ><NavLink to="/task5">Task5</NavLink> </li>
            <li className="item" ><NavLink to="/task6">Task6</NavLink> </li>
            
          </ul>
        </nav>
      </header>
      <Outlet />
    </ div>
  );
}

export default Layout;
