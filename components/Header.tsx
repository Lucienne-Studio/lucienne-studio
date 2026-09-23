'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import NavigationDrawer from '@/ui/NavigationDrawer';

interface HeaderProps {
  onMenuClick?: () => void;
  getInTouchHref?: string;
}

export default function Header({
  onMenuClick,
  getInTouchHref = '/contact',
}: HeaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`
          fixed
          top-0
          left-0
          w-full
          h-[66px]
          py-[30px]
          page-padding
          flex
          justify-between
          items-center
          select-none
          z-[50]
          transition-transform
          duration-500
          ease-in-out
          bg-neutral-50
          ${isVisible ? 'translate-y-0' : '-translate-y-full'}
        `}
      >

        {/* Burger Menu */}
        <button
          onClick={() => {
            setIsDrawerOpen(true);
            onMenuClick?.();
          }}
          aria-label="Open Navigation Menu"
          aria-expanded={isDrawerOpen}
          className="
            group
            flex
            flex-col
            justify-center
            items-start
            gap-y-[5px]
            cursor-pointer
            focus:outline-none
            p-1
            -ml-1
            transition-opacity
            hover:opacity-70
          "
        >
          <span className="w-[22px] h-[1px] bg-black" />
          <span className="w-[22px] h-[1px] bg-black" />
        </button>

        {/* Get In Touch */}
        <Link
          href={getInTouchHref}
          className="
            font-bold
            text-[13px]
            sm:text-[14px]
            hover:opacity-70
            transition-opacity
            focus:outline-none
            whitespace-nowrap
          "
        >
          GET IN TOUCH
        </Link>

      </header>

      <NavigationDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
}