'use client';

import React from 'react';
import Image from 'next/image';

interface ContactProps {
  email?: string;
  leftImageSrc?: string;
  rightImageSrc?: string;
}

export default function Contact({
  email = 'LUCIENNESTUDIO.OPS@OUTLOOK.COM',
  leftImageSrc = '/imgs/ciudad.jpg',
  rightImageSrc = '/imgs/ciudad.jpg',
}: ContactProps) {
  const mailtoLink = `mailto:${email}`;

  return (
    <section 
      className="
        relative w-full min-h-[900px] 
        py-[90px] px-[25px] flex flex-col justify-between 
        overflow-hidden xl:min-h-screen
        xl-container no-page-padding-xl
        xl:grid xl:grid-cols-12 xl:grid-rows-12 xl:py-12 xl:px-0 xl:gap-0
      "
    >
      {/* 1. Header: Top Left (Grid Col 2, Row 2 at XL) */}
      <div className="w-full xl:col-start-1 xl:col-span-3 xl:row-start-2">
        <h2 className="grand-nom">
          CONTACT
        </h2>
      </div>

      {/* 2. Middle Subtitle Block: Grid Col 2, Row 7 at XL */}
      <div className="w-full pl-[12%] pr-[10%] my-auto petit-text 
      xl:pl-0 xl:pr-0 xl:my-0 xl:col-start-2 xl:col-span-4 xl:row-start-5">
        <p className="">
          HAVE A VISION IN MIND?<br />
          WE ANTICIPATE YOUR MESSAGE.
        </p>
      </div>

      {/* 3. Interactive Contact / Email Block: Grid Col 4, Row 9 at XL (Left Aligned) */}
      <div className="
        w-full flex flex-col items-end mb-[180px]
        md:mb-[108px]
        xl:col-start-4 xl:col-span-5 xl:row-start-7 xl:items-start xl:mb-0
      ">
        <a 
          href={mailtoLink}
          className="
            group 
            flex 
            flex-col 
            items-end 
            cursor-pointer 
            transition-opacity 
            hover:opacity-70 
            focus:outline-none
            xl:items-start
          "
        >
          <span className="text-right mt-[2px] petit-text xl:text-left xl:order-1">
            GET IN TOUCH
          </span>
          <span className="text-right break-all petit-text
          grand-nom xl:text-left xl:order-2">
            {email}
          </span>
        </a>
      </div>

      {/* 4. Bottom Right Image Pair: Grid Cols 11-12, Row 10-12 at XL */}
      <div className="
        w-full flex justify-end items-end gap-[6px]
        xl:col-start-11 xl:col-span-2 xl:row-start-9 xl:row-span-4 xl:self-end
      ">
        {/* Smaller Left Image */}
        <div className="
          relative w-[80px] h-[102px] rounded-[18px]
          overflow-hidden bg-neutral-900 shrink-0
          md:w-[114px] md:h-[134px]
          xl:w-[120px] xl:h-[140px]
        ">
          <Image
            src={leftImageSrc}
            alt="Architecture detail small"
            fill
            className="object-cover object-center grayscale"
          />
        </div>

        {/* Larger Right Image */}
        <div className="
          relative w-[80px] h-[138px] rounded-[18px]
          overflow-hidden bg-neutral-900 shrink-0
          md:w-[114px] md:h-[217px]
          xl:w-[120px] xl:h-[260px]
        ">
          <Image
            src={rightImageSrc}
            alt="Architecture detail large"
            fill
            className="object-cover object-center grayscale"
          />
        </div>
      </div>
    </section>
  );
}