import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import frontRoutes from "../../routes/frontRoutes";
import { useEffect, useState } from "react";
import useTeacherApi from "../../hooks/useTeacherApi";
import css from "./Teachers.module.scss";


function TeachersForm() {
  const [formError, setFormError] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();
  const { loading, error, editTeacher, addNewTeacher } = useTeacherApi();

  const [editData, setEditData] = useState({
    name: "",
    subject: "",
    photo: "",
  });

  useEffect(() => {
    if (state?.teacher) {
      setEditData({
        name: state.teacher.name,
        subject: state.teacher.subject,
        photo: state.teacher.photo,
      });
    }
  }, [state]);

  const onUpdateButton = async () => {
    if (!validateForm) return;
    try {
      if (state?.teacher.id) await editTeacher(state?.teacher.id, editData);

      navigate(frontRoutes.navigate.teachers.index);
    } catch (err) {
      setFormError("Upload Error");
    }
  };

  const validateForm = () => {
    if (!editData.name || !editData.subject) {
      setFormError("Please fill in all fields.");
      return false;
    }
    return true;
  };
  const onAddButton = async () => {
    if (!validateForm) return;

    try {
      await addNewTeacher(editData);
      navigate(frontRoutes.navigate.teachers.index);
    } catch (err) {
      setFormError("Upload Error");
    }
  };

  if (loading) return <h2>Updating...</h2>;

  return (
    <form className={css.editWrapper}>
      {state?.editMode ? <h1>Edit Teacher</h1> : <h1>Add new Teacher</h1>}

      {(formError || error) && (
        <h3 className={css.error}>{formError || error?.message}</h3>
      )}

      <label className={css.label}>
        Name:
        <input
          value={editData.name}
          type="text"
          name="form[name]"
          className={css.input}
          onChange={(e) => setEditData({ ...editData, name: e.target.value })}
        />
      </label>
      <label className={css.label}>
        Subject:
        <input
          value={editData.subject}
          type="text"
          name="form[subject]"
          className={css.input}
          onChange={(e) =>
            setEditData({ ...editData, subject: e.target.value })
          }
        />
      </label>

      <div className={css.uploadInputs}>
        <label className={css.label}>
          Photo URL:
          <input
            type="text"
            value={editData.photo}
            className={css.inputUrl}
            onChange={(e) =>
              setEditData({ ...editData, photo: e.target.value })
            }
          />
        </label>
      </div>

      <div className="buttons">
        <button
          type="button"
          onClick={state?.editMode ? onUpdateButton : onAddButton}
          disabled={loading}
        >
          {loading ? "Updating..." : state?.editMode ? "Update" : "Add"}
        </button>

        <button
          type="button"
          onClick={() => navigate(frontRoutes.navigate.teachers.index)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default TeachersForm;
