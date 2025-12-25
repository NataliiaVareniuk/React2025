import style from "./Modal.module.scss";
import clsx from "clsx";
import { Icon, ICON_PATHS } from "@/ui/Icon";
import { createPortal } from "react-dom";

function Modal({
  width,
  title,
  onClose,
  className,
  children,
  isOpen = true,
  ...props
}) {
  if (!isOpen) {
    return null;
  }
  const handleCloseModal = (e) => {
    const isModal = e.target.closest('[data-id="modal"]');
    if (isModal) return;
    onClose();
  };

  const modal = (
    <div
      className={clsx(style.modalBackdrop, className)}
      onClick={handleCloseModal}
    >
      <div
        data-id="modal"
        className={style.modal}
        style={{ "--modal-width": width ? `${width}px` : undefined }}
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
