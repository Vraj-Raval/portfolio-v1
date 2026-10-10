"use client";

import Image from "next/image";
import { CustomCursorVisual } from "@/components/custom-cursor";
import { useRef, type KeyboardEvent, type MouseEvent } from "react";

export function WaterfallDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const openDialog = () => {
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  const closeOnBackdrop = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) {
      closeDialog();
    }
  };

  const closeOnEscape = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeDialog();
    }
  };

  return (
    <>
      <figure className="about-waterfall" data-reveal="rise">
        <button
          ref={triggerRef}
          className="waterfall-trigger"
          type="button"
          aria-label="Open the waterfall reflection"
          onClick={openDialog}
        >
          <Image
            src="/images/Waterfall.gif"
            alt="Animated waterfall cascading through a rocky landscape"
            width={624}
            height={384}
            sizes="(max-width: 680px) calc(100vw - 40px), (max-width: 1000px) calc(50vw - 52px), 540px"
            unoptimized
          />
          <span className="waterfall-open-label">
            <span className="eyebrow">A moment to pause</span>
            <span className="waterfall-open-icon" aria-hidden="true">↗</span>
          </span>
        </button>
        <figcaption className="eyebrow">
          A reminder to stay curious and trust the process.
        </figcaption>
      </figure>

      <dialog
        ref={dialogRef}
        className="waterfall-dialog"
        aria-labelledby="waterfall-dialog-title"
        onClick={closeOnBackdrop}
        onKeyDown={closeOnEscape}
        onClose={() => {
          triggerRef.current?.focus();
        }}
      >
        <div className="waterfall-dialog-content">
          <div className="waterfall-dialog-heading">
            <p className="eyebrow">A note for the journey</p>
            <button
              className="waterfall-dialog-close"
              type="button"
              aria-label="Close reflection"
              onClick={closeDialog}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <Image
            className="waterfall-dialog-image"
            src="/images/Waterfall.gif"
            alt="Water flowing steadily over a rocky landscape"
            width={624}
            height={384}
            unoptimized
          />
          <blockquote className="waterfall-quote" id="waterfall-dialog-title">
            “You don’t need to have it all figured out. Keep moving, keep
            learning, and let each step shape the way ahead.”
          </blockquote>
          <p className="eyebrow waterfall-dialog-footer">Keep going / At your own pace</p>
        </div>
        <CustomCursorVisual />
      </dialog>
    </>
  );
}
