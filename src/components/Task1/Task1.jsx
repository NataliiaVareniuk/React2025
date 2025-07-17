import { useEffect, useRef, useState } from "react";

import css from "./Task1.module.scss";
import Message from "./Message";

function Task1() {
  const [textMess, setTextMess] = useState([]);
  const [textInput, setTextInput] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function handleMessage() {
    const newMess = textInput.trim();
    if (!newMess) return;

    setTextMess((prev) => [...prev, newMess]);
    setTextInput("");
  }

  const handleKeyDown = (e) => {
    if(e.key==="Enter"){
      e.preventDefault();
      handleMessage();
    }

 }

  const handleInput = (e) => {
    setTextInput(e.target.value);
  };

  return (
    <div className={`containerTask ${css.containerTask1}`}>
      <div className={css.message_fild}>
        <ul className={css.messageAll}>
          {textMess.map((el, index) => (
            <Message key={index} text={el} />
          ))}
        </ul>
      </div>

      <div className={css.send}>
        <textarea
          ref={inputRef}
          value={textInput}
          className={css.input}
          placeholder="Type a new message..."
          onChange={(e) => handleInput(e)}
          type="text"
          onKeyDown={handleKeyDown}
        />
        <button className={css.button} onClick={() => handleMessage()}>
          Send{" "}
        </button>
      </div>
    </div>
  );
}

export default Task1;
