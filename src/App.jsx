import { Routes, Route } from 'react-router-dom'
import './App.css'

import Task6 from './components/Task6/Task6'
import Task7 from './components/Task7/Task7'
import Layout from './components/Layout/Layout'

function App() {
 

  return (
    <>
    
    <Routes>
       <Route path="/" element={<Layout />}>
       
        <Route path="task6" element={<Task6 />} />
         <Route path="task7" element={<Task7 />} />
        </ Route>
    </Routes>
     
    </>
  )
}

export default App

