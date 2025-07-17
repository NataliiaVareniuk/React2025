import { Routes, Route } from 'react-router-dom'
import './App.css'

import Task1 from './components/Task1/Task1'
import Task2 from './components/Task2/Task2'
import Layout from './components/Layout/Layout'

function App() {
 

  return (
    <>
    
    <Routes>
       <Route path="/" element={<Layout />}>
       
        <Route path="task1" element={<Task1 />} />
         <Route path="task2" element={<Task2 />} />
        </ Route>
    </Routes>
     
    </>
  )
}

export default App

