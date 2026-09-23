'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface CaseStudyProps {
  title?: string;
  metadata?: string[];
  description?: string;
  mainMedia?: {
    type: 'image' | 'video';
    src: string;
    alt?: string;
    poster?: string;
  };
  desktopVideoSrc: string;
  mobileVideoSrc: string;
  liveSite?: string;
}

/* -------------------------------------------------------------------------- */
/* Video Component                                                            */
/* -------------------------------------------------------------------------- */

interface CaseStudyVideoProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
}

function CaseStudyVideo({
  src,
  poster,
  className = '',
  autoPlay = false,
}: CaseStudyVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const startVideo = async () => {
      try {
        await video.play();
      } catch {
        setIsPlaying(false);
      }
    };

    void startVideo();

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = async () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused || video.ended) {
      video.muted = true;
      video.defaultMuted = true;

      try {
        await video.play();
      } catch {
        setIsPlaying(false);
      }
    } else {
      video.pause();
    }
  };

  return (
    <div className="relative w-full h-full group bg-neutral-50">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        muted
        loop
        playsInline
        preload="auto"
        className={className}
      />

      {/* Minimal Play / Pause Control */}
      <button
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
        className="
          absolute
          inset-0
          m-auto
          w-fit
          h-fit
          flex
          items-center
          justify-center
          transition-all
          duration-200
          cursor-pointer
          z-10
        "
      >
        {isPlaying ? (
          <svg
            className="w-6 h-6 fill-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.2)]"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M6 5h4v14H6V5zm8 0h4v14h-4V5z" />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 fill-white translate-x-[2px] drop-shadow-[0_1px_3px_rgba(0,0,0,0.2)]"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7L8 5z" />
          </svg>
        )}
      </button>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Case Study Section                                                         */
/* -------------------------------------------------------------------------- */

export default function CaseStudySection({
  title = 'MAISON\nMARGIELA',
  metadata = [
    'MAISON MARGIELA',
    '2026',
    'ART DIRECTION',
    'LIGNE CLAIRE NUMÉRIQUE',
  ],
  description = 'WE BELIEVE DISTINCTION IS FOUND IN RESTRAINT. OUR WORK IS ROOTED IN MINIMALISM, PRECISION AND THE QUIET CONFIDENCE OF SWISS DESIGN — CLEAR SYSTEMS, CONSIDERED TYPOGRAPHY, EXACTING DETAIL AND NOTHING WITHOUT PURPOSE. WE DRAW FROM THE ENDURING ELEGANCE OF EUROPEAN MODERNISM AND THE DELIGHTFUL SIMPLICITY OF 1960S AND 70S DESIGN, TRANSLATING ITS PRINCIPLES INTO A CONTEMPORARY DIGITAL LANGUAGE.',
  mainMedia = {
    type: 'image',
    src: '/hero-media.jpg',
    alt: 'Main Case Study Media',
  },
  desktopVideoSrc,
  mobileVideoSrc,
  liveSite,
}: CaseStudyProps) {
  return (
    <section className="w-full page-padding flex flex-col min-h-screen pb-30">

      {/* 1. Header Metadata Section */}
      <div className="w-full pt-[156px] pb-12">
        <div
          className="
            flex flex-col gap-y-2
            lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-y-0
          "
        >
          {metadata.map((item, idx) => (
            <p
              key={idx}
              className="
                whitespace-nowrap
                lg:text-left
              "
            >
              {item}
            </p>
          ))}
        </div>
      </div>

      {/* 2. Title & Narrative Description Section */}
      <div
        className="
          w-full
          pt-[32px]
          flex
          flex-col
          gap-y-[60px]
          md:py-[60px]
          md:gap-[78px]
        "
      >
        {/* Title: Big H1 Flush Left */}
        <h1
          className="
            w-full
            text-left
            font-black
            text-[56px]
            sm:text-[72px]
            md:text-[96px]
            lg:text-[112px]
            leading-[0.85]
            tracking-tight
            uppercase
            whitespace-pre-line
          "
        >
          {title}
        </h1>

        <div className="w-full flex justify-end xl-container">
          <div
            className="
              w-[70%]
              max-w-[420px]
              text-right
            "
          >
            {description
              .match(/[^.!?]+[.!?]+(?:\s|$)/g)
              ?.reduce<string[][]>((paragraphs, sentence) => {
                const current = paragraphs[paragraphs.length - 1];

                if (
                  current &&
                  current.join(' ').split(/\s+/).length +
                    sentence.trim().split(/\s+/).length <= 75
                ) {
                  current.push(sentence.trim());
                } else {
                  paragraphs.push([sentence.trim()]);
                }

                return paragraphs;
              }, [])
              .map((paragraph, index) => (
                <p key={index} className={index > 0 ? 'mt-8' : ''}>
                  {paragraph.join(' ')}
                </p>
              ))}
          </div>
        </div>
      </div>

      {/* 3. Media Stack Section */}
      <div
        className="
          w-full
          py-[36px]
          flex
          flex-col
          gap-y-[48px]
          items-end
          md:py-0
          xl-container
        "
      >

        {/* Main Square Media */}
        <div
          className="
            w-full
            max-w-[630px]
            aspect-square
            relative
            bg-neutral-50
            rounded-[18px]
            overflow-hidden
          "
        >
          {mainMedia.type === 'video' ? (
            <CaseStudyVideo
              src={mainMedia.src}
              poster={mainMedia.poster}
              autoPlay
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              src={mainMedia.src}
              alt={mainMedia.alt || 'Case study main image'}
              fill
              priority
              sizes="(max-width: 1122px) 100vw, 1122px"
              className="object-cover object-center grayscale"
            />
          )}
        </div>

        {/* Desktop Rectangle Silhouette */}
        <div
          className="
            w-[82%]
            aspect-[16/10]
            relative
            bg-neutral-50
            rounded-[18px]
            overflow-hidden
            md:max-w-[840px]
          "
        >
          <CaseStudyVideo
            src={desktopVideoSrc}
            autoPlay
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Upright Mobile Silhouette */}
        <div
          className="
            w-[28%]
            max-w-[320px]
            aspect-[9/16]
            relative
            bg-neutral-50
            rounded-[18px]
            overflow-hidden
          "
        >
          <CaseStudyVideo
            src={mobileVideoSrc}
            autoPlay
            className="w-full h-full object-cover object-center"
          />
        </div>

      </div>

      {/* Live Site */}
      <div className="w-full flex justify-end xl-container md:pt-[60px] hover:cursor-pointer">
        <a
          href={liveSite}
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-[70%]
            max-w-[420px]
            text-right
            grand-nom
            underline
            underline-offset-4
          "
        >
          live site
        </a>
      </div>

    </section>
  );
}