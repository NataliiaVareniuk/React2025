import { useState, useEffect } from "react";
import clsx from "clsx";
import style from "./Toast.module.scss";
import { Icon, ICON_PATHS } from "@/ui/Icon";

function Toast({
  message,
  type = "info",
  duration = 3000,
  onClose,
  isOpen = true,
  className,
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onClose?.(), 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [isOpen, duration, onClose]);

  if (!isOpen) {
    return null;
  }
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose?.();
    }, 300);
  };

  return (
    <>
      <div
        className={clsx(
          style.toast,
          {
            [style.opening]: isVisible,
            [style.closing]: !isVisible,
          },
          className
        )}
      >
        <div className={style.message}>{message}</div>
        <button
          type="button"
          className={style.closeButton}
          onClick={handleClose}
        >
          <Icon d={ICON_PATHS.cross} />
        </button>
      </div>
    </>
  );
}

export default Toast;
