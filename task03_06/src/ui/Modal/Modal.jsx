import style from "./Modal.module.scss";
import clsx from "clsx";

import { Icon, ICON_PATHS } from "@/ui/Icon";
import { createPortal } from "react-dom";

function Modal({
  size = "s",
  title,
  onClose,
  className,
  children,
  isOpen = true,
  ...props
}) {
 const allowedSizes = ["xs", "s", "m", "l", "xl"];
 const safeSize = allowedSizes.includes(size) ? size : "s";

  if (!isOpen) {
    return null;
  }
  const handleCloseModal = (e) => {
    const isModal = e.target.closest('[data-id="modal"]');
    if (isModal) return;
    onClose();
  };
const modalClass = clsx(
  style.modal,
  style[`size_${safeSize}`]
);
  const modal = (
    <div
      className={clsx(style.modalBackdrop, className)}
      onClick={handleCloseModal}
    >
      <div
        data-id="modal"
        className={modalClass}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className={style.header}>
          <div className={style.title}>{title}</div>
          <button type="button" className={style.closeButton} onClick={onClose}>
            <Icon d={ICON_PATHS.cross} />
          </button>
        </div>

        <div className={style.separator}></div>
        <div className={style.modalContent}>{children}</div>
      </div>
    </div>
  );
  return createPortal(modal, document.getElementById("modal"));
}
export default Modal;
