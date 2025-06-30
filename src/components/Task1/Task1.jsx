import { useState } from "react";
import css from "./Task1.module.scss";

import superImage from "../../assets/images/super.png";

function Task1() {
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const [state, setIsError] = useState({
    isCorrect: false,
    colorError: "transparent",
  });

  const userLogin = "login";

  function verification() {
    if (login === "ivan") {
      setIsError((prev) => ({
        ...prev,
        isCorrect: false,
        colorError: "var(--color-google-blue)",
      }));
    } else if (login !== userLogin) {
      setIsError((prev) => ({
        ...prev,
        isCorrect: false,
        colorError: "red",
      }));
    } else {
      setIsError((prev) => ({
        ...prev,
        isCorrect: true,
        colorError: "transparent",
      }));
    }
  }

  const handleLogin = (e) => {
    const newLogin = e.target.value.replace(/\s+/g, "").toLowerCase();
    setLogin(newLogin);
    setIsError((prev) => ({
      ...prev,
      isCorrect: false,
      colorError: "transparent",
    }));
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={`containerTask ${css.containerTask1}`}>
      <div className={css.hint}>login : login, Ivan</div>

      <label className={css.label}>
        Login: {""}
        <input type="text" className={css.input} onChange={handleLogin} />
      </label>
      <span
        style={{
          color: state.colorError,
          opacity: state.isCorrect ? "0" : "1",
        }}
      >
        Login is incorrect
      </span>
      <label>
        Password: {""}
        <input
          type="password"
          className={css.input}
          onChange={handlePassword}
        />
      </label>

      <div className={css.checkLogin}>
        <button className={css.button} onClick={verification}>
          {" "}
          Go
        </button>

        {state.isCorrect && (
          <img src={superImage} className={css.img} alt="smiley" />
        )}
      </div>
    </div>
  );
}

export default Task1;
