"use client";
import { useCallback, useRef, useEffect, MouseEventHandler } from "react";

export default function Modal({
  children,
  onDismiss,
  customStyle,
}: {
  children: React.ReactNode;
  onDismiss: () => void;
  customStyle?: string;
}) {
  const overlay = useRef(null);
  const wrapper = useRef(null);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className="fixed z-50 left-0 right-0 top-0 bottom-0 bg-black/60 lg:p-10 overflow-auto"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className={` ${customStyle}`}
      >
        {children}
      </div>
    </div>
  );
}
