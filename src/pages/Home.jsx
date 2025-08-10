import { useNavigate } from "react-router-dom"; 
import frontRoutes from "../routes/frontRoutes";

function Home() {
  const navigate = useNavigate();
  
  const goToTeachers=()=>navigate(frontRoutes.navigate.teachers.index)
  const goToMeeting=()=> navigate(frontRoutes.navigate.meeting)
  
  return (
    
    <div className="aboutContainer">
      <h1> Welcome to the ‘Teachers’ app</h1>
      <p>This application will assist you in managing information about teachers and inviting them to meetings.</p>
      <div className="buttons" > 
        <button onClick={goToTeachers}>Review teachers </button> 
        <button onClick={goToMeeting}>  List of meetings </button>
       </div>
      </div>
    
    
  )
}

export default Home;