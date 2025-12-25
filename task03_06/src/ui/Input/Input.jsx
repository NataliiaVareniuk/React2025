import style from "./Input.module.scss";
import { useCallback, useState } from "react";
import eye from "@/assets/images/icons/eye.svg";
import eyeOff from "@/assets/images/icons/eye-off.svg";

const Input = ({ label, error, width, disabled, name, type, ...rest }) => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = useCallback(() => {
    setVisible((prev) => !prev);
  }, []);

  const inputType =
    type === "password" ? (visible ? "text" : "password") : type;
  const withInput = width ? style[`w${width}`] : "";

  return (
    <div className={style.inputContainer}>
      <div className={style.inputContent}>
        <label
          className={style.label + (disabled ? ` ${style.disabled}` : "")}
          htmlFor={name}
        >
          {label}
        </label>
        <div className={style.inputWrapper}>
          <input
            name={name}
            id={name}
            type={inputType}
            disabled={disabled}
            className={`
            ${error ? style.inputError : style.input}
            ${withInput}
          `}
            autoComplete="off"
            {...rest}
          />
          {type === "password" && (
            <button
              type="button"
              onClick={toggleVisible}
              className={style.buttonClass}
              disabled={disabled}
              aria-label={visible ? "Hide password" : "Show password"}
            >
              {visible ? <img src={eye} /> : <img src={eyeOff} />}
            </button>
          )}
        </div>
      </div>

      <div
        aria-live="assertive"
        className={error ? style.errorVisible : style.error}
      >
        {error}
      </div>
    </div>
  );
};

export default Input;
