import { cn } from "@/lib/utils"; 
import React from "react";
import {
  IconBrandDatabricks,
  IconInfoCircle,
  IconTrendingUp
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";

export function BentoGridSection() {
  return (
    <div id="activities" className="flex flex-col w-full mb-10">
      <div className="mb-12"></div>
      <div className="mb-12">
      <h2 className="font-bold text-4xl mb-4 text-white">Our Activities</h2>
      
      <BentoGrid className="pb-3 flex flex-col lg:flex-row">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
      </div>
    </div>
  );
}
function ItemImage({ src }: { src: string }) {
  return (
    <div
      className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden  "
    >
      <Image
        className="h-full w-full object-cover"
        width={400}
        height={400}
        src={src ?? ""}
        alt="project-img"
      />
    </div>
  );
}
const items = [
  {
    title: "Investment",
    description: "We invest directly in compelling value-add and opportunistic Real Estate transactions in major European cities and dense areas of economic activity.",
    
    icon: <IconTrendingUp className="h-7 w-7 text-white" />
  },
  {
    title: "Advisory",
    description: "Our deep investment and experience help developers, governments, private equity funds, and corporates as they navigate the complicated global landscape.",
    
    icon: <IconInfoCircle className="h-7 w-7 text-white" />
  },
  {
    title: "PropTech",
    description: "We focus on how we can use technology to improve products and services to deliver a meaningful impact on how we live, work, and shop.",
    
    icon: <IconBrandDatabricks className="h-7 w-7 text-white" />
  },
  // {
  //   title: "Weather App",
  //   description:
  //     "Understand the impact of effective communication in our lives.",
  //   header: (
  //     <ItemImage
  //       src="/projects/sony.jpg"
  //     />
  //   ),
  //   icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />
  // },
  // {
  //   title: "The Pursuit of Knowledge",
  //   description: "Join the quest for understanding and enlightenment.",
  //   header: (
  //     <ItemImage
  //       src="/projects/redbull.jpg"
  //     />
  //   ),
  //   icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />
  // },
];
