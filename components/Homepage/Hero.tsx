'use client'

import { AnimatePresence, motion } from "framer-motion";
import React, { useState} from "react";
import { X } from "lucide-react";
import Faq from "./Faq";

const pitchblock = [
  {
    src: "/projects/adidas.jpg",
    name: "Submit your pitch deck",
    logo: "/adidas-logo.png",
    description: "Tell us more about your startup and why we should invest in it",
    className: "",
  },
]

const PitchButton = ({
    src,
    name,
    description,
    onClick,
  }: {
    src: string;
    name: string;
    description: string;
    onClick: () => void;
  }) => {
    return (
      <motion.button
        className="relative cursor-pointer bg-red-500 hover:bg-red-600 text-white
              px-6 md:px-8 py-3 rounded-full text-sm font-bold tracking-wider transition-all hover:shadow-lg inline-block"
        onClick={onClick}
      >
        Learn More
      </motion.button>
    );
  };

const PitchDetails = ({
    pitch,
    onClose,
  }: {
    pitch: (typeof pitchblock)[0];
    onClose: () => void;
  }) => {
    return (
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed md:border-l md:border-white/20 right-0 top-0 h-full md:w-2/5 bg-black shadow-lg p-6 z-50 cursor-pointer"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white mt-1"
        >
          <X />
        </button>
        <Faq />
        <h2 className="text-transparent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolor ullam, repudiandae error eos repellendus itaque alias doloremque fugiat voluptates!</h2>
        
      </motion.div>
    );
  };

const Hero = () => {
    const [selectedPitch, setSelectedPitch] = useState<
      (typeof pitchblock)[0] | null
    >(null);
  
const firstRow = pitchblock.slice(0, pitchblock.length);

    
  return(
    <div className="flex flex-col items-center">
      {/* Main Content Section */}
      {/* <p className='pt-18 gap-[5px] items-center border-gradient text-[12px] tracking-wide bg-zinc-50/10 font-semibold md:text-[15px] inline-flex py-1 px-3 rounded-full mb-3 '>
        <span className=' bg-white rounded w-2 h-2'></span>
          Invested in 500+ startups
      </p> */}
      <div
        className="w-full flex justify-center pt-18 items-center md:px-0  "
      >
        <div className="text-start ">
          <h1
            className="text-[27px] pt-[20px] leading-[40px] md:text-6xl font-bold mb-4 md:mb-12"
          >
            <span className="inline-block">
              Experience the excellence
            </span>
            <br />
            <span className="inline-block">
              of Real estate investment startegies
            </span>
          </h1>

          <p className="text-[13px] text-end shadow-2xl md:text-[17px] font-semibold mt-[30px] text-white/90 tracking-wider mb-3">
            We fix broken capital stack and deliver
            <br />
            smart expertise on leasing strategies.
          
          </p>

          <div
            className="flex text-end flex-row gap-y-2 gap-x-2 md:gap-x-3 justify-end mb-10"
          >
            <div className="w-[180px]">
            {firstRow.map((pitch, index) => (
              <PitchButton
                key={index}
                {...pitch}
                onClick={() => setSelectedPitch(pitch)}
              />
            ))}

            {/* <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 hover:bg-red-600 text-white
               px-6 md:px-8 py-2 rounded-full
                font-bold  transition-all hover:shadow-lg inline-block"
            >
              Book a meeting
            </a> */}
            </div>
            
          </div>
        </div>
      </div>

      <AnimatePresence>
                {selectedPitch && (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 bg-black z-40"
                      onClick={() => setSelectedPitch(null)}
                    />
                    <PitchDetails
                      pitch={selectedPitch}
                      onClose={() => setSelectedPitch(null)}
                    />
                  </>
                )}
              </AnimatePresence>
    </div>
  )

  
}

export default Hero