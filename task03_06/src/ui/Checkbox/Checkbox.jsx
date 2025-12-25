import style from "./Checkbox.module.scss";
import checkedIcon from "@/assets/images/icons/checked.svg";

function Checkbox({ checked = false, onChange, children }) {
  const handleChange = (e) => {
    if (onChange) onChange(e.target.checked);
  };

  return (
    <label className={style.checkboxLabel}>
      <input
        type="checkbox"
        className={style.checkboxInput}
        onChange={handleChange}
        checked={checked}
      />
      <span className={style.checkBox}>
        {checked && <img src={checkedIcon} alt="" />}
      </span>
      {children && <span className={style.labelText}>{children}</span>}
    </label>
  );
}

export default Checkbox;
