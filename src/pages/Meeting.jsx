import { useLocation } from "react-router-dom";
import TeacherCard from "./teachers/components/TeacherCard";
import css from "../pages/teachers/Teachers.module.scss";
import { useNavigate } from "react-router-dom";
import frontRoutes from "../routes/frontRoutes";
import { useState } from "react";

function Meeting() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const savedData = localStorage.getItem("selectedTeachers");

  const initialList =
    state?.teachers || (savedData ? JSON.parse(savedData) : []);

  const [listMeeting, setListMeeting] = useState(initialList);

  const backToTeacher = () => navigate(frontRoutes.navigate.teachers.index);

  const clearMeeting = () => {
    setListMeeting([]);
    localStorage.clear();
  };

  let content;
  if (listMeeting)
    content = (
      <ul className={css.listContainer}>
        {listMeeting.map((teachers) => (
          <li key={teachers.id} className={css.cardWrapper}>
            <TeacherCard teachers={teachers} />{" "}
          </li>
        ))}
      </ul>
    );
  return (
    <>
      <h1>Meeting</h1>

      {listMeeting && listMeeting.length > 0 ? (
        content
      ) : (
        <p> No teachers selected</p>
      )}

      <div className="buttons">
        <button onClick={backToTeacher}>Back to teachers</button>
        <button
          className={listMeeting.length > 0 ? "" : "disabledButton"}
          onClick={clearMeeting}
          disabled={listMeeting.length === 0}
        >
          Clear
        </button>
      </div>
    </>
  );
}

export default Meeting;
