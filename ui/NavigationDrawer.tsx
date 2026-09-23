'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavigationDrawer({
  isOpen,
  onClose,
}: NavigationDrawerProps) {

  // Lock page scroll while drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Dimmed screen */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`
          fixed
          inset-0
          bg-black/35
          z-[60]
          transition-opacity
          duration-500
          ease-in-out
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
      />

      {/* Drawer */}
      <aside
        aria-hidden={!isOpen}
        className={`
          fixed
          top-0
          left-0
          h-full
          w-[82%]
          sm:w-[420px]
          bg-neutral-50
          z-[70]
          flex
          flex-col
          px-[25px]
          py-[30px]
          transition-transform
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >

        {/* Close */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            aria-label="Close navigation"
            className="
              relative
              w-[24px]
              h-[24px]
              flex
              items-center
              justify-center
              cursor-pointer
              hover:opacity-60
              transition-opacity
              focus:outline-none
            "
          >
            <span
              className="
                absolute
                w-[22px]
                h-[1px]
                bg-black
                rotate-45
              "
            />
            <span
              className="
                absolute
                w-[22px]
                h-[1px]
                bg-black
                -rotate-45
              "
            />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-[80px] flex flex-col">
          <Link
            href="/"
            onClick={onClose}
            className="
              text-[32px]
              sm:text-[38px]
              font-black
              leading-none
              hover:opacity-50
              transition-opacity
            "
          >
            HOME
          </Link>

          <Link
            href="/contact"
            onClick={onClose}
            className="
              mt-[28px]
              text-[32px]
              sm:text-[38px]
              font-black
              leading-none
              hover:opacity-50
              transition-opacity
            "
          >
            CONTACT
          </Link>
        </nav>

      </aside>
    </>
  );
}