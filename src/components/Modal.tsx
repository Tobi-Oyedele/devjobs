import type React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div
      className="h-screen w-screen fixed inset-0 bg-black/40 flex items-center justify-center z-50 md:hidden"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-md flex flex-col gap-8"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
