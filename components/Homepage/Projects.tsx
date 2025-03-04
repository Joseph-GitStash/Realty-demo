'use client'

import { Marquee } from "@/components/magicui/marquee";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const projects = [
    {
      src: "/projects/adidas.jpg",
      name: "Adidas",
      logo: "/adidas-logo.png",
      description: "Created Adidas back to school campaign",
      className: "",
    },
    {
      src: "/projects/airbnb.jpg",
      name: "Airbnb",
      logo: "/airbnb-logo.png",
      description: "Designed Airbnb landing page",
      className: "",
    },
    {
      src: "/projects/audi.jpg",
      name: "Audi",
      logo: "/audi-logo.png",
      description: "Developed Audi car configurator",
  
      className: "",
    },
    {
      src: "/projects/paypal.jpg",
      name: "Paypal",
      logo: "/paypal-logo.png",
      description: "Integrated Paypal payment gateway",
  
      className: "",
    },
    {
      src: "/projects/sony.jpg",
      name: "Sony",
      logo: "/sony-logo.png",
      description: "Developed Sony Playstation website",
  
      className: "",
    },
    {
      src: "/projects/redbull.jpg",
      name: "Redbull",
      logo: "/redbull-logo.png",
      description: "Created Redbull energy drink campaign",
  
      className: "",
    },
    {
      src: "/projects/spalding.jpg",
      name: "Spalding",
      logo: "/spalding-logo.png",
      description: "Designed Spalding basketball landing page",
  
      className: "",
    },
    {
      src: "/projects/visa.jpg",
      name: "Visa",
      logo: "/visa-logo.png",
      description: "Integrated Visa payment gateway",
  
      className: "",
    },
    {
      src: "/projects/nord.jpg",
      name: "Nordstrom",
      logo: "/nord-logo.png",
      description: "Designed Nordstrom ecommerce website",
  
      className: "",
    },
    {
      src: "/projects/zara.jpeg",
      name: "Zara",
      logo: "/zara-logo.png",
      description: "Created Zara fashion campaign",
  
      className: "",
    },
  ];

const firstRow = projects.slice(0, projects.length);
const secondRow = projects.slice(3, projects.length);
const thirdRow = projects.slice(6, projects.length);


const ReviewCard = ({
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
      <motion.figure
        className="relative cursor-pointer overflow-hidden group"
        onClick={onClick}
      >
        <div className="relative">
          <Image
            width={500}
            height={300}
            src={src}
            alt="projects"
            className="object-cover h-[300px] w-[500px]"
          />
          <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/60 to-transparent w-full">
            <h3 className="text-white text-xl font-semibold">{name}</h3>
            <p className="text-white/80 text-sm">{description}</p>
          </div>
        </div>
      </motion.figure>
    );
  };



const ProjectDetails = ({
    project,
    onClose,
  }: {
    project: (typeof projects)[0];
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
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
  
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
          <Image
            src={project.src}
            alt={project.name}
            width={500}
            height={300}
            className="w-full rounded-lg mb-6 object-cover h-60"
          />
          <p className="text-gray-600 mb-4">{project.description}</p>
  
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Project Details</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-zinc-50/10 rounded-full text-sm">
                Web Design
              </span>
              <span className="px-3 py-1 bg-zinc-50/10 rounded-full text-sm">
                Branding
              </span>
              <span className="px-3 py-1 bg-zinc-50/10 rounded-full text-sm">
                UI/UX
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };


  export function Projects() {
    const [selectedProject, setSelectedProject] = useState<
      (typeof projects)[0] | null
    >(null);
  
    return (
      <section className="w-full py-16 md:mx-0 2xl:w-4/5 md:px-0">
        <div className="mx-auto md:px-0">
          <h2 className="text-4xl font-bold text-white mb-4">
            Explore our projects
          </h2>
          <p className="text-lg font-bold text-[#7b7b7b]">
            Our projects showcase the best visuals and storytelling techniques.
          </p>
        </div>
  
        <div className="w-full h-[400px] flex items-center justify-center overflow-hidden py-8">
          <Marquee
            reverse
            pauseOnHover
            className="[--duration:60s]"
            paused={selectedProject !== null}
          >
            {firstRow.map((review, index) => (
              <ReviewCard
                key={index}
                {...review}
                onClick={() => setSelectedProject(review)}
              />
            ))}
          </Marquee>
        </div>
  
        <AnimatePresence>
          {selectedProject && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black z-40"
                onClick={() => setSelectedProject(null)}
              />
              <ProjectDetails
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
              />
            </>
          )}
        </AnimatePresence>
      </section>
    );
  }
  