import style from "./Link.module.scss";

function Link({ children, href, disabled = false }) {
  return (
    <a
      href={disabled ? undefined : href}
      target="_blank"
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      className={disabled ? style.disabled : style.link}
    >
      {children}
    </a>
  );
}

export default Link;
