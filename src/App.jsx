import { Routes, Route } from "react-router-dom";
import "./App.css";


import Task1 from "./components/Task1/Task1";
import Task2 from "./components/Task2/DataGrid";
import Task3 from "./components/Task3/ShowDesktopType";
import Task4 from "./components/Task4/SearchResult";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="task1" element={<Task1 />} />
          <Route path="task2" element={<Task2 />} />
          <Route path="task3" element={<Task3 />} />
          <Route path="task4" element={<Task4 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
