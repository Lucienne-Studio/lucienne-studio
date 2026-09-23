'use client';

import React from 'react';

interface StepItem {
  text: string;
  widthPercent: number; // Specifies how far right the line extends (25%, 50%, 75%, 100%)
}

const steps: StepItem[] = [
  { text: 'SWISS DESIGN', widthPercent: 28 },
  { text: 'scandi MINIMALISM', widthPercent: 48 },
  { text: 'DISTINCTION', widthPercent: 68 },
  { text: 'PRECISION', widthPercent: 100 },
];

export default function SwissSteppedGrid() {
  return (
    <div className="w-full max-w-full flex flex-col py-24 
    md:max-w-[48vw] xl:max-w-[559px]">
      
      {steps.map((step, idx) => (
        <div key={idx} className="w-full flex flex-col mb-6 last:mb-0">
          
          {/* Text Aligned to the End of the Line */}
          <div 
            className="flex justify-end transition-all duration-150"
            style={{ width: `${step.widthPercent}%` }}
          >
            <span className="text-[0.75rem] sm:text-[0.875rem] md:text-[1rem] font-medium 
            whitespace-nowrap pb-1">
              {step.text}
            </span>
          </div>

          {/* Horizontal Rule matching widthPercent */}
          <div 
            className="h-[1px] bg-black transition-all duration-150"
            style={{ width: `${step.widthPercent}%` }}
          />
        </div>
      ))}

      {/* Bottom Sub-label pinned to the far right */}
      <div className="w-full flex justify-end pt-2">
        <span className="text-[0.75rem] sm:text-[0.875rem] md:text-[1rem] 
        font-medium whitespace-nowrap">
          LIGNE CLAIRE NUMÉRIQUE
        </span>
      </div>

    </div>
  );
}