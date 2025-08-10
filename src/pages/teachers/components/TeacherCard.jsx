
import css from "./TeacherCard.module.scss";

function TeacherCard({ teachers, isSelected, onSelection }) {
   
 

  return (
    <div className={css.cardContainer}>
      
      {teachers.photo && <img className={css.img} src={teachers.photo} alt="photo" />}

      

      <div className={css.section1}>
        <div className={css.name} >{teachers.name}</div>
        <div><b>Subject:</b> {teachers.subject}</div>
      </div>
      <div className={css.section2}>
        {onSelection ? (
          <button
            className={isSelected ? css.selected : css.button}
            onClick={() => onSelection(teachers.id)}
          >
            {isSelected ? "Selected" : "Select"}
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default TeacherCard;
