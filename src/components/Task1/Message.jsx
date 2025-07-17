import { useState } from "react";

import css from "./Task1.module.scss";

function Message({ text }) {
  const [countLike, setCountLike] = useState(0);
  const [countDisLike, setCountDisLike] = useState(0);

  return (
    <>
      <li className={css.messageLi}>
        {text}
        <div className={css.buttonsLike}>
          <span
            onClick={() => setCountLike((prev) => prev + 1)}
            role="button"
            className={css.countButton}
          />
          <span style={{ display: countLike === 0 ? "none" : "block" }}>
            {countLike}
          </span>

          <span
            role="button"
            onClick={() => setCountDisLike((prev) => prev + 1)}
            className={css.countButtonDisLike}
          />
          <span style={{ display: countDisLike === 0 ? "none" : "block" }}>
            {countDisLike}
          </span>
        </div>
      </li>
    </>
  );
}

export default Message;
