'use client';

import React, { useState } from 'react';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const form = e.currentTarget;
    const data = new FormData(form);
  
    try {
      await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(data as any).toString(),
      });
  
      setFormData({
        name: '',
        email: '',
        project: '',
        message: '',
      });
  
      alert('Thank you. Your enquiry has been received.');
    } catch {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="w-full mx-auto 
    flex flex-col page-padding py-[180px] min-h-screen
    xl-container max-w-[446px] xl:max-w-full">
    
      {/* 1. Header Paragraphs Wrapper */}
      <div className="w-full flex flex-col gap-y-[60px]">
        {/* Paragraph 1: Left Aligned */}
        <p className="w-full text-left max-w-[280px]">
          WE LOOK FORWARD TO HEARING ABOUT YOUR VISION.
        </p>

        {/* Paragraph 2: Right Aligned */}
        <p className="w-full text-right max-w-[280px] self-end">
          OUR CUSTOMER SERVICE WILL ANSWER YOUR ENQUIRY AS 
          QUICKLY AS POSSIBLE EXCLUDING BANK HOLIDAYS.
        </p>
      </div>

      {/* 2. Form Element (60px gap from top paragraphs) */}
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-y-[32px] mt-[90px]"
      >
        <input type="hidden" name="form-name" value="contact" />
        
        {/* Name Field */}
        <div className="w-full flex flex-col gap-y-1 border-b border-black pb-2">
          <label htmlFor="name" className="text-[11px] font-semibold text-black">
            NAME *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-transparent text-[13px] text-black focus:outline-none uppercase"
          />
        </div>

        {/* Email Field */}
        <div className="w-full flex flex-col gap-y-1 border-b border-black pb-2">
          <label htmlFor="email" className="text-[11px] font-semibold text-black">
            EMAIL *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-transparent text-[13px] text-black focus:outline-none lowercase"
          />
        </div>

        {/* Project Field */}
        <div className="w-full flex flex-col gap-y-1 border-b border-black pb-2">
          <label htmlFor="project" className="text-[11px] font-semibold text-black">
            PROJECT
          </label>
          <input
            id="project"
            name="project"
            type="text"
            placeholder="ART DIRECTION"
            value={formData.project}
            onChange={handleChange}
            className="w-full bg-transparent text-[12px] text-black placeholder:text-neutral-400 focus:outline-none uppercase"
          />
        </div>

        {/* Message Field (Expandable Textarea) */}
        <div className="w-full flex flex-col gap-y-1 border-b border-black pb-2">
          <label htmlFor="message" className="text-[11px] font-semibold text-black">
            MESSAGE*
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={3}
            placeholder="TELL US ABOUT YOUR PROJECT."
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-transparent text-[12px] text-black placeholder:text-neutral-400 focus:outline-none uppercase resize-y min-h-[60px]"
          />
        </div>

        {/* Submit Button */}
        <div className="w-full pt-4">
          <button
            type="submit"
            className="grand-nom 
            hover:opacity-70 transition-opacity focus:outline-none cursor-pointer"
          >
            CONTACT
          </button>
        </div>

      </form>
    </div>
  );
}