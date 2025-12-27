import style from "./Button.module.scss";

import classNames from "classnames";

function Button({
  children,
  onClick,
  iconSrc,
  size = "m",
  variant = "primary",
  disabled = false,
}) {
 const allowedSizes = ["xs", "s", "m", "l", "xl"];
 const safeSize = allowedSizes.includes(size) ? size : "s";

  const buttonClass = classNames(
    style.button, 
    style[`size_${safeSize}`],{
    [style.primary]: variant === "primary",
    [style.secondary]: variant !== "primary",
  });

  return (
    <button
    type="button"
      onClick={onClick }
      disabled={disabled}
      className={buttonClass}
    >
      {iconSrc && <img src={iconSrc} className={style.icon} />}
      <span>{children}</span>
    </button>
  );
}

export default Button;
