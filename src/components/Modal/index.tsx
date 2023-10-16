import { useEffect, useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  onModalState: (value: boolean) => void;
  name: string;
  modalTitle: string;
  modalDescription: string;
  children: React.ReactNode;
}

export default function Modal({ 
  isOpen,
  onModalState,
  name,
  modalTitle,
  modalDescription,
  children 
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      const modalElement = modalRef.current;
      modalElement.focus();
      //add any focusable HTML element you want to include to this string
      const focusableElements = modalElement.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleTabKeyPress = (event: KeyboardEvent) => {
        if (event.key === "Tab") {
          if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          } else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      };

      const handleEscKeyPress = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          onModalState(false);
        }
      };

      modalElement.addEventListener("keydown", handleTabKeyPress);
      modalElement.addEventListener("keydown", handleEscKeyPress);

      return () => {
        modalElement.removeEventListener("keydown", handleTabKeyPress);
        modalElement.removeEventListener("keydown", handleEscKeyPress);
      };
    }
  }, [isOpen]);


  return (
    <div
      id={name}
      aria-labelledby={modalTitle}
      aria-describedby={modalDescription}
      role="dialog"
      aria-modal="true"
      className={`${isOpen ? 'fixed' : 'hidden'} relative z-10`}
      ref={modalRef}
      tabIndex={-1}
    >
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          {children}
        </div>
      </div>
    </div>
  )
}