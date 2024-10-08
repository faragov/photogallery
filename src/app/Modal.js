import React, { useRef, useEffect, useState } from "react";

export default function Modal({
  isOpen,
  hasCloseBtn = true,
  onClose,
  children,
}) {
  const [isModalOpen, setModalOpen] = useState(isOpen);
  const modalRef = useRef(null);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setModalOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isModalOpen]);

  return (
    <dialog
      ref={modalRef}
      onKeyDown={handleKeyDown}
      className="modal"
      role="presentation"
    >
      {hasCloseBtn && (
        <button
          type="button"
          className="modal-close-btn"
          onClick={handleCloseModal}
        >
          Close
        </button>
      )}
      {children}
    </dialog>
  );
}
