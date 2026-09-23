import SwissSteppedGrid from '@/ui/SwissSteppedGrid';
import React from 'react'

const About = () => {
  return (
    <div className="w-full page-padding min-h-211 py-26
    flex flex-col md:py-30
    xl-container no-page-padding-xl"> 
      <h2 className="grand-nom">About</h2>
      <SwissSteppedGrid />  

      <div className="flex flex-col gap-12 w-full text-end items-end my-6
      md:gap-22.5
      xl:grid xl:grid-cols-12 xl:gap-y-12 xl:items-start">
        
        {/* Paragraph 1: Set to cols 9-12 with text aligned right */}
        <p className="petit-text md:max-w-[45vw] xl:max-w-[180px] xl:col-start-9 xl:col-span-4 xl:w-full xl:text-right xl:justify-self-end">
          We believe distinction is found in restraint. 
          Our work is rooted in minimalism, 
          precision and the quiet confidence of Swiss design — 
          clear systems, considered typography, exacting detail and nothing without purpose. 
          We draw from the enduring elegance of European modernism and the delightful 
          simplicity of 1960s and 70s design, translating its principles 
          into a contemporary digital language.
        </p>

        {/* Paragraph 2: Constrained to cols 6-11 so it doesn't push the right boundary */}
        <p className="petit-text max-w-[66%] md:max-w-[80vw] xl:max-w-[502px] xl:col-start-6 xl:col-span-6 xl:text-left xl:justify-self-start">
          We create websites with the character of a well-made object: 
          unmistakable, composed and built to last beyond the moment. 
          Each one is conceived specifically for the brand it represents, 
          giving ambitious companies a distinctive digital presence with which to stand beside 
          — and compete with — the most established names in their field. Not louder. 
          Not busier. Simply more considered.
        </p>

        {/* Paragraph 3: Uses identical column positioning (9-12) as Paragraph 1 */}
        <p className="petit-text font-bold xl:col-start-9 
        xl:col-span-4 xl:w-full text-center xl:justify-self-end">
          Distinct by design. <br/>
          Precise by nature.
        </p>
      </div>
    </div>
  )
}

export default About