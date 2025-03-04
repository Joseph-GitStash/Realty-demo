'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { X } from 'lucide-react';


const About = ({
  onClose,
}:{
  onClose: () => void;
}) => {
  return(
     <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 md:border-l md:border-white/20 top-0 h-full md:w-2/5 bg-black shadow-lg p-6 z-50 cursor-pointer"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white mt-1"
        >
          <X />
        </button>
      <p className='text-[13px] md:text-[16px] mt-10 font-semibold mb-3 tracking-wide text-white/80'>
      Realty Corporation is a privately held firm with Real Estate investment and advisory activities in Europe and the United States. Combining intellectual curiosity, deep market knowledge, and decades-long relationships, we identify and execute investments transactions where we have steadfast conviction on delivering superior returns for our own balance sheet and for our co-investors.
      </p>
      <p className='text-[13px] md:text-[16px] font-semibold mb-3 tracking-wide text-white/80'>
      Unlike other boutiques that limit themselves to specific countries or asset classes, we instead focus on opportunities for compelling Real Estate returns regardless of product type and geography. Our clear focus is on the top cities in Europe and the United States, where we have the firm belief that population dynamics, demographic shifts, trends in e-commerce, and the sharing/gig economy will have a profound impact on how we use Real Estate in the future. We believe we are at the dawn of a major trend where innovation, growth, livelihoods and liveliness will take place in major urban centers, and we want to be part of that.
      </p>
      <p className='text-[13px] md:text-[16px] font-semibold mb-3 tracking-wide text-white/80'>
      Though our analytical rigor and sophistication is on par with the world’s finest investment houses, for us, it’s not just about the model, it’s about the mission. Every transaction must fit into a theme where we perceive long-term value, be it in fixing a broken capital stack, transforming an asset into its highest and best use, or delivering our expertise to re-think leasing strategy.
      </p>

      
    </motion.div>
  )
}

const Brief = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div id='about' className='w-full flex flex-col md:justify-end md:items-end py-16 '>
      <div className="mb-[2rem]"></div>
        <p className="text-[13px] shadow-black shadow-2xl md:text-[17px] font-semibold text-white/80 tracking-wide md:text-end ">
        Realty Corporation is a privately held firm with Real Estate investment and advisory activities in Europe and the United States. Combining intellectual curiosity, deep market knowledge, and decades-long relationships, we identify and execute investments transactions where we have steadfast conviction on delivering superior returns for our own balance sheet and for our co-investors.
        </p>
        <button className="flex justify-start relative cursor-pointer text-white/45 hover:text-white underline py-3 rounded-full text-[13px] md:text-[14px] font-bold tracking-wider transition-all hover:shadow-lg"
          onClick={() => setIsOpen(true)}  >
          Read more
        </button>

        <AnimatePresence>
                        {isOpen && (
                          <>
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 0.5 }}
                              exit={{ opacity: 0 }}
                              className="fixed inset-0 bg-black z-40"
                              onClick={() => setIsOpen(false)}
                            />
                            <About
                              onClose={() => setIsOpen(false)}
                            />
                          </>
                        )}
                      </AnimatePresence>
    </div>
  )
}

export default Brief