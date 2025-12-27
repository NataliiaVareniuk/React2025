import clsx from "clsx";
import style from "./Textarea.module.scss";

function Textarea({
  label,
  value,
  onChange,
  placeholder = "Text",
  disabled = false,
  className,
}) {
  return (
    <div
      className={clsx(style.textArea, {
        [style.disabled]: disabled,
        className
      })}
    >
      <p>
        <label htmlFor="textArea" className={style.header}>
          {label}
        </label>
      </p>
      <textarea
        id="textArea"
        name="textArea"
        rows="4"
        cols="60"
        className={style.text}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
      />
      <div className={style.separator}></div>
    </div>
  );
}

export default Textarea;
