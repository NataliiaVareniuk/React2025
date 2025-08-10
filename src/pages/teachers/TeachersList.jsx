import css from "./Teachers.module.scss";
import { useNavigate } from "react-router-dom";
import frontRoutes from "../../routes/frontRoutes";
import useTeacherApi from "../../hooks/useTeacherApi";
import { useEffect, useState } from "react";
import TeacherCard from "./components/TeacherCard";

function TeachersList() {
  const navigate = useNavigate();
  const {
    data: teachersList,
    loading,
    error,
    getTeacherById,
    deleteTeacherFromList,
    editTeacher,
    fetchTeacher,
  } = useTeacherApi();

  const savedData = localStorage.getItem("selectedTeachers");
  const [editMode, setEditMode] = useState(true);

  const initialSelected = savedData
    ? JSON.parse(savedData).map((teacher) => teacher.id)
    : [];

  const [selectedTeacherId, setSelectedTeacherId] = useState(initialSelected);

  useEffect(() => {
    fetchTeacher();
  }, [fetchTeacher, editTeacher, getTeacherById]);

  function goToMeeting() {
    const selectedTeachers = teachersList.filter((teacher) =>
      selectedTeacherId.includes(teacher.id)
    );

    localStorage.setItem("selectedTeachers", JSON.stringify(selectedTeachers));

    navigate(frontRoutes.navigate.meeting, {
      state: {
        teachers: selectedTeachers,
      },
    });
  }

  const openEditForm = async (id) => {
    if (!id) {
      navigate(frontRoutes.navigate.teachers.add, {
        state: { editMode: false },
      });

      return;
    }

    if (teachersList.length === 0) return;
    const foundTeacher = await getTeacherById(id);

    if (!foundTeacher) return;

    navigate(frontRoutes.navigate.teachers.edit(id), {
      state: { teacher: foundTeacher, editMode: true },
    });
  };

  const onSelection = (id) => {
    if (selectedTeacherId.includes(id))
      setSelectedTeacherId((prev) => prev.filter((tId) => tId !== id));
    else setSelectedTeacherId((prev) => [...prev, id]);
   
  };

  const deleteFromList = (id) => {
    deleteTeacherFromList(id);
  };

  let content;
  if (loading) content = <h2>Loading...</h2>;
  else if (error) content = <h2>Error</h2>;
  else
    content = (
      <ul className={css.listContainer}>
        {teachersList.map((teacher) => (
          <li key={teacher.id} className={css.cardWrapper}>
            <TeacherCard
              teachers={teacher}
              isSelected={selectedTeacherId.includes(teacher.id)}
              onSelection={onSelection}
            />
            <div className="buttons">
              <button onClick={() => openEditForm(teacher.id)}>Edit</button>
              <button onClick={() => deleteFromList(teacher.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    );

  return (
    <div className="list__container">
      <h1> List of teachers</h1>
      <div className="buttons">
        <button onClick={() => openEditForm()}>Add a new teacher</button>
        <button onClick={goToMeeting}>
          Refresh list with
          {selectedTeacherId.length > 0 ? ` ${selectedTeacherId.length} ` : " "}
           invited
        </button>
      </div>

      {content}

      <div className="buttons">
        <button onClick={goToMeeting}>Go to meeting</button>
      </div>
    </div>
  );
}

export default TeachersList;
