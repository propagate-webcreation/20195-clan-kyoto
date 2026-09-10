"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function ImageDialog({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    if (!open || !dialog) return;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);
  return (
    <dialog
      ref={ref}
      onClose={onClose}
      aria-label={title}
      className="image-dialog"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="relative p-5 sm:p-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-11 h-11 bg-black border border-white/40 text-xl"
          aria-label="閉じる / Close"
        >
          ×
        </button>
        {children}
      </div>
    </dialog>
  );
}
