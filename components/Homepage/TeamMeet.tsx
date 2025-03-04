'use client'

import { Marquee } from "@/components/magicui/marquee";
import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { PiFacebookLogo, PiInstagramLogo, PiLinkedinLogo } from "react-icons/pi";
import img1 from '@/public/images/person-one.jpg'
import img2 from '@/public/images/person-two.jpg'
import img3 from '@/public/images/person-three.jpg'
import img4 from '@/public/images/person-four.jpeg'
import img5 from '@/public/images/person-five.jpeg'

const members = [
    {
        src: img1.src,
        name: "Martin Smith",
        position: "Manager",
        description: "Created Adidas back to school campaign",
        className: "",
      },
      {
        src: img2.src,
        name: "Jacob Jobs",
        position: "Manager",
        description: "Designed Airbnb landing page",
        className: "",
      },
      {
        src: img3.src,
        name: "Roy Kendrick",
        position: "Manager",
        description: "Designed Airbnb landing page",
        className: "",
      },
      {
        src: img4.src,
        name: "Mike Lawn",
        position: "Manager",
        description: "Designed Airbnb landing page",
        className: "",
      },
      {
        src: img5.src,
        name: "Enrique Paschal",
        position: "Manager",
        description: "Designed Airbnb landing page",
        className: "",
      },
      {
        src: img2.src,
        name: "David Chen",
        position: "Manager",
        description: "Designed Airbnb landing page",
        className: "",
      },
]

const firstRow = members.slice(0, members.length);
const secondRow = members.slice(3, members.length);
const thirdRow = members.slice(6, members.length);

const MemberCard = ({
    src,
    name,
    position,
    onClick,
  }: {
    src: string;
    name: string;
    position: string,
    onClick: () => void;
  }) => {
    return (
      <motion.figure
        className="relative rounded cursor-pointer overflow-hidden group"
        onClick={onClick}
      >
        <div className="relative">
          <Image
            width={500}
            height={300}
            src={src}
            alt="projects"
            className="object-cover h-[300px] w-[300px]"
          />
          <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/60 to-transparent w-full">
            <h3 className="text-white text-xl font-semibold">{name}</h3>
            <p className="text-white/80 text-sm">{position}</p>
          </div>
        </div>
      </motion.figure>
    );
  };

const MemberDetails = ({
    member,
    onClose,
  }: {
    member: (typeof members)[0];
    onClose: () => void;
  }) => {
    return (
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed right-0 top-0 h-full md:w-2/5 bg-black shadow-lg p-6 z-50 cursor-pointer"
      >
        {/* <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white mt-1"
        >
          <X />
        </button> */}
  
        <div className="">
          <div className="flex gap-3">
            <Image
              src={member.src}
              alt={member.name}
              width={500}
              height={200}
              className="w-[60%] h-[180px] rounded-lg mb-6 object-cover "
            />
            <div className="cursor-auto flex flex-col gap-y-2 mt-5 ">
              <h2 className="text-[17px] tracking-wider font-bold">{member.name}</h2>
              <p className="cursor-auto bg-red-500 text-white w-[90px] flex justify-center items-center py-[2px] rounded-full font-bold hover:bg-red-600 transition-all text-[15px] mb-4">{member.position}</p>
              <div className="cursor-pointer flex gap-2">
              <PiFacebookLogo />
              <PiLinkedinLogo />
              <PiInstagramLogo />
              </div>
            </div>
          </div>
  
          <div className="cursor-auto space-y-4">
            {/* <h3 className="font-semibold text-lg">About</h3> */}
            <p className="text-white text-[14px] tracking-wide font-[600] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fuga eveniet voluptate at temporibus modi dolores impedit totam quidem, labore repellat assumenda quos, qui fugiat excepturi provident deleniti quisquam odit, earum accusamus obcaecati beatae. Eligendi eius maxime dicta id suscipit doloribus nisi iure dignissimos nemo enim? Molestiae nihil vero beatae!
            </p>
          </div>

          
          <button 
              onClick={onClose}
              className="text-white/55 tracking-wider hover:text-white border-[0.5px] border-white/55 hover:border-white py-[7px] rounded-full font-bold mt-32 w-full"
          >
              Close    
          </button>
        </div>
      </motion.div>
    );
  };

export function TeamMeet() {
  const [selectedMember, setSelectedMember] = useState<
        (typeof members)[0] | null
      >(null);

  return (
    <section className='mb-10 w-full py-16 md:mx-0 2xl:w-4/5 md:px-0'>
        <div className="mx-auto mb-12 md:px-0">
          <h2 className="text-4xl flex justify-start font-bold items-center text-white mb-4">
            Meet the team
            <span className="ml-3 text-[13px] mt-3 text-[#7b7b7b]">( 7 )</span>
          </h2>
          <p className="text-lg font-bold text-[#7b7b7b]">
          Our investment professionals were all trained in, or held senior positions in, some of the world’s leading investment institutions, such as: Blackstone, Goldman Sachs, Morgan Stanley, Hines, Captiva and Tishman Speyer.
          </p>
          <p className="mt-3 text-lg font-bold text-[#7b7b7b]">
          We love the small company feel of our business, though we are privileged to have aligned ourselves with some of the largest global players in the industry as our co-investors. We speak their language, understand their objectives, and deliver at a level that exceeds their expectations.
          </p>
        </div>

        <div className="w-full h-[300px] flex items-center justify-center overflow-hidden">
                  <Marquee
                    reverse
                    pauseOnHover
                    className="[--duration:60s]"
                    paused={selectedMember !== null}
                  >
                    {firstRow.map((review, index) => (
                      <MemberCard
                        key={index}
                        {...review}
                        onClick={() => setSelectedMember(review)}
                      />
                    ))}
                  </Marquee>
                </div>
          
                <AnimatePresence>
                  {selectedMember && (
                    <>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black z-40"
                        onClick={() => setSelectedMember(null)}
                      />
                      <MemberDetails
                        member={selectedMember}
                        onClose={() => setSelectedMember(null)}
                      />
                    </>
                  )}
                </AnimatePresence>
    </section>
  )
}
