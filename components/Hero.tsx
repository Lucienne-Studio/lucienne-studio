import React from 'react';
import Image from 'next/image';

interface HeroProps {
  imageSrc?: string;
  imageAlt?: string;
  onBeginClick?: () => void;
}

export default function Hero({
  imageSrc = "/imgs/ciudad.jpg", // Replace with your actual image path
  imageAlt = "Lucienne Studio visual showcase",
  onBeginClick,
}: HeroProps) {
  return (
<section
  className="relative w-full min-w-[390px] min-h-[844px] 
  px-[25px] pt-[120px] pb-[40px] 
  flex flex-col justify-end
  py-15 xl:min-h-screen
  "
>
  {/* Main Content + CTA Group */}
  <div className="flex flex-col w-full">

    {/* Content Group */}
    <div className="grid grid-cols-2 gap-x-1.5 w-full">

      <div className="col-span-2 flex flex-col gap-y-8">

        {/* Main Title Block */}
        <div className="w-full">
          <h1
            className="font-black text-[54px] leading-[48px] md:leading-[66px] 
            tracking-[-3%] uppercase  
            md:text-[78px]        
            xl:text-[132px] xl:leading-[108px] xl:text-right xl:max-w-fit"
          >
            LUCIENNE<br />STUDIO
          </h1>
        </div>

        {/* Hero Visual */}
        <div
          className="
            relative
            w-full
            xl-container
            min-h-[230px]
            h-[260px]
             rounded-[18px]
            overflow-hidden
          "
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            sizes="(max-width: 390px) 340px, 100vw"
            className="object-cover object-center"
          />
        </div>

      </div>
    </div>

    {/* CTA */}
    <div className="mt-[40px] flex flex-col items-start gap-y-[16px]
    xl-container">
      <button
        onClick={onBeginClick}
        className="
          hover:opacity-70
          transition-opacity
          text-left
          focus:outline-none grand-nom
        "
      >
        BEGIN
      </button>

      <div className="w-[1.5px] h-[50px] bg-black" />
    </div>

  </div>
</section>
  );
}