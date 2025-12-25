import style from "./Button.module.scss";

import classNames from "classnames";

function Button({
  children,
  onClick,
  iconSrc,
  width,
  variant = "primary",
  disabled = false,
}) {
  const widthClass = width ? style[`w${width}`] : "";

  const safeVariant = ["primary", "secondary"].includes(variant)
    ? variant
    : "primary";

  const buttonClass = classNames(style.button, widthClass, {
    [style.primary]: safeVariant === "primary",
    [style.secondary]: safeVariant === "secondary",
  });

  return (
    <button
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      className={buttonClass}
    >
      {iconSrc && <img src={iconSrc} alt={""} className={style.icon} />}
      <span>{children}</span>
    </button>
  );
}

export default Button;
