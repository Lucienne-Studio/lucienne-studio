'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ImageGridProps {
  topRightSrc?: string;
  heroSrc?: string;
  heroType?: 'image' | 'video';
  heroImage1Src?: string;
  heroImage2Src?: string;
  heroImage3Src?: string;
  heroImage4Src?: string;
  midLeft1Src?: string;
  midLeft2Src?: string;
  bottomLeftSrc?: string;
  projectSrc1?: string;
  projectSrc2?: string;
  projectSrc3?: string;
  projectSrc4?: string;
  projectTitle1?: string;
  projectTitle2?: string;
  projectTitle3?: string;
  projectTitle4?: string;
}

interface HeroCellProps {
  imageSrc: string;
  projectSrc: string;
  projectTitle: string;
}

function HeroCell({ imageSrc, projectSrc, projectTitle }: HeroCellProps) {
  return (
    <Link href={`/project/${projectSrc}`}>
      <div className="relative w-full h-full overflow-hidden rounded-[18px] hover:cursor-pointer">
        <Image
          src={imageSrc}
          alt="Main feature"
          fill
          sizes="50vw"
          className="object-cover object-center brightness-95 hover:brightness-100 transition-all duration-300"
        />
        <p className="absolute bottom-10 left-12 z-10 text-white drop-shadow-4xl
        text-site text-sm md:text-base font-medium">
          {projectTitle}
        </p>
      </div>
    </Link>
  );
}

export default function AsymmetricImageGrid({
  topRightSrc = '/imgs/ciudad.jpg',
  heroSrc = '/vids/celine-concept.mp4',
  heroType = 'image',
  heroImage1Src = '/imgs/riva.png',
  heroImage2Src = '/imgs/spring.webp',
  heroImage3Src = '/imgs/herobglea.jpg',
  heroImage4Src = '/imgs/clay.jpg',
  midLeft1Src = '/imgs/ciudad.jpg',
  midLeft2Src = '/imgs/ciudad.jpg',
  bottomLeftSrc = '/imgs/ciudad.jpg',
  projectSrc1 = 'aeterna',
  projectSrc2 = 'ymjr-paris',
  projectSrc3 = 'monte-pia',
  projectSrc4 = 'monolith-studios',
  projectTitle1 = 'Aeterna - watch microsite',
  projectTitle2 = 'YMJR Paris - ecommerce experience',
  projectTitle3 = 'Monte Pia - ecommerce brand experience',
  projectTitle4 = 'Monolith Studios - brutalist architecture firm',
}: ImageGridProps) {
  return (
    <div className="w-full flex flex-col gap-[6px] py-24 m-0">
      
      {/* 1. Top Right Image */}
      <div className="w-full flex justify-end">
        <div className="relative w-[120px] aspect-[16/9] rounded-[18px] 
        overflow-hidden shrink-0
        md:w-[150px]">
          <Image
            src={topRightSrc}
            alt="Thumbnail top right"
            fill
            className="object-cover object-top grayscale"
          />
        </div>
      </div>

      {/* 2. Main Hero Image Grid */}
      <div className="relative w-full overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4.5">
          <div className="h-[45vw] sm:max-h-[30vw] lg:max-h-[20vw] xl:max-h-[265px]">
            <HeroCell
              imageSrc={heroImage1Src}
              projectSrc={projectSrc1}
              projectTitle={projectTitle1}
            />
          </div>

          <div className="h-[45vw] sm:max-h-[30vw] lg:max-h-[20vw] xl:max-h-[265px]">
            <HeroCell
              imageSrc={heroImage2Src}
              projectSrc={projectSrc2}
              projectTitle={projectTitle2}
            />
          </div>

          <div className="h-[45vw] sm:max-h-[30vw] lg:max-h-[20vw] xl:max-h-[265px]">
            <HeroCell
              imageSrc={heroImage3Src}
              projectSrc={projectSrc3}
              projectTitle={projectTitle3}
            />
          </div>

          <div className="h-[45vw] sm:max-h-[30vw] lg:max-h-[20vw] xl:max-h-[265px]">
            <HeroCell
              imageSrc={heroImage4Src}
              projectSrc={projectSrc4}
              projectTitle={projectTitle4}
            />
          </div>
        </div>
      </div>

      {/* 3. Middle Pair Row */}
      <div className="flex items-center gap-[6px]">
        <div className="relative w-[120px] aspect-[16/9] rounded-[18px] overflow-hidden 
         shrink-0
        md:w-[150px]">
          <Image
            src={midLeft1Src}
            alt="Thumbnail mid 1"
            fill
            className="object-cover object-center grayscale"
          />
        </div>

        <div className="relative w-[120px] aspect-[16/9] rounded-[18px] overflow-hidden 
         shrink-0
        md:w-[150px]">
          <Image
            src={midLeft2Src}
            alt="Thumbnail mid 2"
            fill
            className="object-cover object-center grayscale"
          />
        </div>
      </div>

      {/* 4. Bottom Left Image */}
      <div className="w-full flex justify-start">
        <div className="relative w-[120px] aspect-[16/9] rounded-[18px] 
        overflow-hidden shrink-0
        md:w-[150px]">
          <Image
            src={bottomLeftSrc}
            alt="Thumbnail bottom left"
            fill
            className="object-cover object-center grayscale"
          />
        </div>
      </div>

    </div>
  );
}