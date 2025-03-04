'use client'

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";
import {
  PiArrowArcLeft,
  PiArrowArcRight,
  PiFacebookLogo,
  PiGlobe,
  PiLinkedinLogo,
  PiTwitterLogo,
} from "react-icons/pi";
import Link from "next/link";

import img1 from '@/public/team/img1.webp'
import img2 from '@/public/team/img2.webp'
import img3 from '@/public/team/img3.webp'
import img4 from '@/public/team/img4.webp'
import img5 from '@/public/team/img5.webp'
import img6 from '@/public/team/img6.webp'
import img7 from '@/public/team/img7.webp'
import img8 from '@/public/team/img8.webp'
import img9 from '@/public/team/img9.webp'
import img10 from '@/public/team/img10.webp'
import img11 from '@/public/team/img11.webp'


const founders = [
    {
      name: "Jonathan Lurie",
      role: "CEO & Founder",
      image: img1.src,
      description:
        "Jon is Realty’s Founder, Managing Partner, and Chief Investment Officer. He established the company in 2017 as his family office upon retiring from Blackstone, where he was a senior executive in the Real Estate group. At Realty, Jon is responsible for the firm’s investment activities in both Real Estate and PropTech. He oversees the deployment of Realty’s balance sheet, and leads several of Realty’s key capital relationships, including co-investment and operating partner activities. Jon gained extensive experience both in the boardroom, having served on the boards of Logicor, Office First (IVG), Songbird (Canary Wharf), Multi Corporation, TLG, and GSW (now Deutsche Wohnen), as well as on the ground, leading the operational, corporate, and development strategy of over 25 billion euros of Real Estate from single assets to large portfolios. Over his career, he has bought, managed, and sold tens of millions of square meters of Real Estate across Europe. Key highlights include the creation of Logicor, Blackstone’s marquee logistics and industrial business, which grew to be the largest in Europe, and Multi Corporation, a distressed retail developer that was transformed into one of Europe’s largest retail asset management businesses, owning or managing more than 150 centers at its peak. Through Realty Corporation, Jon currently serves as a senior adviser to McKinsey & Company, advising clients around the globe on their investment strategy and priorities. ",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      facebook: "http://facebook.com"
    },
    {
      name: "Wiktor Karol Waligora",
      role: "Partner",
      image:img2.src,
      description:
        "Wiktor oversees Realty’s Real Estate and PropTech investment activities across Europe, including several key co-investor relationships. He also serves on the firm’s Management and Investment Committee. Notable recent transactions include the acquisition and planned development of a serviced residential scheme in London, a student housing asset in Cracow, Poland, as well as several distressed debt acquisitions comprising transitional retail properties in the UK. In Proptech, his recent investments include a stake in PiLabs, Europe’s leading Proptech VC fund, as well as direct investments in VenueX, collaborating with online platforms such as Google and Apple Maps, and Houst, a third party management platform that services AirBnB hosts, among others. Wiktor currently serves as a committee member of GRI Global Committee - Proptech, focusing on capitalizing on growth opportunities within the Proptech sector. Prior to Realty, Wiktor gained Real Estate investment experience working on the underwriting and strategic asset management of multiple investment portfolios in Europe owned by Blackstone’s Tactical Opportunity Fund, through his role at Northdale in London. Previously, Wiktor worked at Blackstone’s retail investment platform, Multi Corporation, in a similar role covering central and eastern Europe.  ",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      facebook: "http://facebook.com"
    },
    {
      name: "Robert Friedrich Karde",
      role: "Managing Director",
      image: img3.src,
      description:
        "Robert leads the German business of Realty. He has 12 years of experience in the areas of Real Estate Investment, Asset Management and Structured Finance. At Realty, Robert is responsible for the German strategy as well as for sourcing, underwriting and execution of transactions for a number of JVs and investment management mandates from large institutional investors. From 2011 to 2019, Robert has worked as a Director at Captiva (formerly Natixis Capital Partners) where he was responsible for all underwriting and strategic asset management activities of the company. Prior to that he gained experience at the commercial Real Estate lending division at DZHYP AG, one of Europe’s leading specialist Real Estate lending institutions, and in the Real Estate investment banking division of Sal. Oppenheim jr. & Cie. AG & Co. KgaA. Robert holds a Master of Real Estate Finance degree from the EBS Universität, Oestrich-Winkel, and a Master of Finance degree from the University of Amsterdam.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      facebook: "http://facebook.com"
    },
    {
      name: "Emil Domeracki",
      role: "Head of Land Investment and Development",
      image: img4.src,
      description:
        "Emil leads the land investments for Realty Corporation. Emil has 20+ years of experience in real estate investments and development which he gained by cooperating with private equity investors, RE funds and senior managers, or owners, of development companies. Emil was head of land development at Colliers Poland for 15 years specializing in land purchases and sales transactions, with the main focus on providing full-scope real estate services to financial investors. Most recently he was involved in developing the BTR/PRS sector in Poland. Through his roles he has worked with volumes surpassing PLN 5 billion. Most recently, he was responsible for coordinating due diligence, representing clients during negotiations, and preparing market analysis, financial analysis and feasibility studies. Emil brings understanding in how to work with local authorities and participating in special laws allowing for a fast path of land planning changes, while simultaneously taking care of development and the unblemished profits for investors. He comes with a unique approach to project evaluation, selection, and effective negotiation. ",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      facebook: "http://facebook.com"
    },
    {
      name: "Jonathan Percy",
      role: "General Counsel",
      image: img5.src,
      description:
        "Jon is Realty Corporation’s General Counsel, advising management on legal, regulatory and operational matters, as well as assisting on transaction and contract negotiations and structuring. Jon is an experienced corporate and commercial lawyer, and over the last seven years has worked in-house with businesses in a variety of sectors, with particular focus on property, tech and private equity. Jon trained and qualified as a corporate lawyer with Norton Rose Fulbright, working on a wide variety of corporate legal transactions across Europe, the Middle East and Africa, and public and private company work. He graduated from the University of York with a degree in English, and from BPP Law School in London with commendation in the Graduate Diploma in Law, and distinction in the Legal Practice Course. He is admitted as a solicitor in England and Wales.",
       linkedin: "https://linkedin.com",
       twitter: "https://twitter.com",
       facebook: "https://facebook.com"
    },
    {
      name: "Kursad Arman",
      role: " Proptech Venture Partner",
      image: img6.src,
      description:
        "Kursad serves as a Venture Partner to Realty Corporation. He founded VenueX bringing indoor maps, business data and in-store inventory online to drive foot traffic to stores and venues. With 15 years experience, Kursad has a strong foundation and an expansive international network in PropTech and RetailTech. As a serial entrepreneur, Kursad strives at developing new products that move the physical businesses to digital. He spent the first 5 years of his career leading sales and business development at V-Count, an innovative company that measures footfall. He later founded KNS, which has been providing digitalization solutions for 100+ shopping centers in 7 countries to date. Kursad graduated with a Bachelor of Science from METU, a leading technical university in Turkey. He is fluent in English and Turkish.",
       linkedin: "https://linkedin.com",
       twitter: "https://twitter.com",
       facebook: "https://facebook.com"
    },
    {
      name: "Maximilien Michel",
      role: " Vice President",
      image: img7.src,
      description:
        "Maximilien is responsible for acquisitions across the firm's initiatives, and additionally supports the sourcing of transactions in Europe and the US. Maximilien gained experience with the investment team of KKR, executing various industrial and real estate acquisitions across Europe. He formerly worked as a Private Equity Associate at Europa Capital Partners in the Value-Add fund. Maximilien has prior experience in the Mergers & Acquisitions team of BNP Paribas where he supported Shurgard in its €600m IPO on Euronext as well as Sociéte de la Tour Eiffel on its €1.7bn merger with Affine. Maximilien is a French national with a MSc in Finance and studied in both Bocconi University and SKEMA Business School, in Milan and Paris",
       linkedin: "https://linkedin.com",
       twitter: "https://twitter.com",
       facebook: "https://facebook.com"
    },
    {
      name: "Jonathan Roh",
      role: "Senior Associate",
      image: img8.src,
      description:
        "Jonathan has over six years of commercial real estate capital markets advisory and investment banking experience with direct involvement of over $1.8B of completed M&A, recapitalization and strategic advisory transactions. He formerly worked as an Associate at JLL’s M&A and Corporate Advisory. Previously, Jonathan worked at Chesterfield Faring where he supported capital markets advisory mandates across the capital stack and geographies in the U.S. Jonathan is currently pursuing an Executive MBA at London Business School. He holds MS in Real Estate Development from Columbia University and BS in Managerial Economics from U.C. Davis.",
       linkedin: "https://linkedin.com",
       twitter: "https://twitter.com",
       facebook: "https://facebook.com"
    },
    {
      name: "Jesse Ju",
      role: "Investment Analyst",
      image: img9.src,
      description:
        "Jesse is responsible for analysing, underwriting, and supporting Realty’s European Real Estate acquisition initiatives as well as advisory mandates. Prior to joining Realty Corporation, Jesse spent over a year with Deutsche Banks’s REGLL M&A team in London. During his tenure, he supported the team on several landmark transactions across the real estate and gaming verticals, including Vonovia’s €30.1bn takeover of Deutsche Wohnen and Ballys $2.7bn takeover of Gamesys. He also gained exposure working alongside colleagues from the equity and debt capital markets team across various financing mandates, namely acting as the lead support for Flutter’s $3bn Term Loan B refinancing and syndication. Jesse holds a BA in Geography from the London School of Economics.",
       linkedin: "https://linkedin.com",
       twitter: "https://twitter.com",
       facebook: "https://facebook.com"
    },
    {
      name: "Eric Röstlund",
      role: "Analyst - Corporate Strategy & Operations",
      image: img10.src,
      description:
        "Eric supports Realty’s financial and operational activities as well as its corporate strategic initiatives. He has prior experience working at leading Scandinavian bank Handelsbanken, working as a financial advisor for high net worth individuals. He led a team of analysts that monitored client portfolios and offered strategic investment advice. Eric graduated with a first class degree in Finance from the University of Tampa.",
       linkedin: "https://linkedin.com",
       twitter: "https://twitter.com",
       facebook: "https://facebook.com"
    },
    {
      name: "Sergio Nuehrmann",
      role: " Investment Analyst",
      image: img11.src,
      description:
        "Sergio is responsible for the analysis and underwriting of pan-European investment transactions with a particular focus on the Iberian region. He has experience working in Investment Banking at Morgan Stanley and BNP Paribas. Prior to that he interned with Realty Corporation throughout his freshman and junior years at University. Sergio has native fluency in German, Spanish, Portuguese and English. He studied Politics and Economics at Harvard University, Accounting at MIT Sloan School of Management, and graduated from IE Business School in Madrid",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      facebook: "http://facebook.com"
    },
  ];

const firstRow = founders.slice(0, founders.length);

const FounderCard = ({
  name,
  role,
  image,
  linkedin,
  twitter,
  facebook,
  onClick,
}:{
    name: string,
    role: string,
    image: string,
    linkedin: string,
    twitter: string,
    facebook: string,
    onClick: () => void;
  }) => {
    return(
      <motion.div
        className="md:mb-0 mb-8"
      >
        <div className="bg-gray-100 aspect-square mb-4 overflow-hidden">
          <Image
            priority
            width={500}
            height={500}
            src={image}
            alt={name}
            onClick={onClick}
            className="w-full h-full object-cover cursor-pointer"
          />
        </div>
        <h3 className="font-bold text-[14px] md:text-lg tracking-wide mb-1">{name.slice(0, 21)}</h3>
        <p className="text-white/80 font-semibold text-[13px] md:text-[15px] mb-2">{role.slice(0, 20)}...</p>
        <div className="flex gap-4">
          <motion.div
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link href={linkedin} >
              <PiLinkedinLogo className="w-5 h-5 text-white/80 hover:text-white cursor-pointer" />
            </Link>
            
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link href={twitter}>
              <PiTwitterLogo className="w-5 h-5 text-white/80 hover:text-white cursor-pointer" />
            </Link>
            
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link href={facebook}>
              <PiFacebookLogo className="w-5 h-5 text-white/80 hover:text-white cursor-pointer" />
            </Link>
            
          </motion.div>
              
        </div>
      </motion.div>
    )
  }

const MemberDetails = ({
    founder,
    onClose,
  }: {
    founder: (typeof founders)[0];
    onClose: () => void;
  }) => {
    return (
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed right-0 border-l border-white/20 top-0 h-full md:w-2/5 bg-black shadow-lg p-6 z-50 cursor-pointer overflow-y-scroll [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-black"
      >
       
        <div className="">
          <div className="flex gap-3">
            
            <div className="cursor-auto flex flex-col gap-y-2 mt-5 ">
              
              <p className="mt-3 cursor-auto text-white/80 max-w items-center rounded-full font-semibold transition-all text-[14px]">{founder.role}</p>
              <h2 className="text-[17px] tracking-wider font-semibold">{founder.name}</h2>
              {/* <h2 className="text-[17px] font-semibold text-white/90 tracking-wider">Social links</h2> */}
              <div className="cursor-pointer flex gap-2">
              <Link href={founder.linkedin} >
                <PiLinkedinLogo className="w-5 h-5 text-white/80 hover:text-white cursor-pointer" />
              </Link>
              <Link href={founder.twitter}>
                <PiTwitterLogo className="w-5 h-5 text-white/80 hover:text-white cursor-pointer" />
              </Link>
              <Link href={founder.facebook}>
                <PiFacebookLogo className="w-5 h-5 text-white/80 hover:text-white cursor-pointer" />
              </Link>
              </div>
            </div>
          </div>
  
          <div className="cursor-auto pt-3">
            {/* <h3 className="font-semibold text-lg">About</h3> */}
            <p className="text-white/80 text-[14px] leading-6 md:text-[17px] tracking-wide font-[600] ">
            {founder.description}
            </p>
          </div>

          
          <button 
              onClick={onClose}
              className="text-white/55 tracking-wider hover:text-white border-[0.5px] border-zinc-50/10 text-[15px] md:text-[16px] hover:border-white py-[7px] rounded-full font-bold mt-5 w-full mb-12"
          >
              Close    
          </button>
        </div>
      </motion.div>
    );
  };



const Founders = () => {

    const [selectedFounder, setSelectedFounder] = useState<
            (typeof founders)[0] | null
          >(null);
    const [startIndex, setStartIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(4);
    const [isMobile, setIsMobile] = useState(false);


    useEffect(() => {
        const handleResize = () => {
          const mobile = window.innerWidth < 768;
          setIsMobile(mobile);
          setItemsToShow(mobile ? 2 : 4);
          setStartIndex((prev) => {
            const maxStart = founders.length - (mobile ? 2 : 4);
            return prev > maxStart ? maxStart : prev;
          });
        };
    
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, [founders.length]);


      const next = () => {
        setStartIndex((prev) => {
          const nextIndex = prev + 1;
          const maxStart = founders.length - itemsToShow;
          return nextIndex > maxStart ? 0 : nextIndex;
        });
      };
    
      const prev = () => {
        setStartIndex((prev) => {
          const nextIndex = prev - 1;
          return nextIndex < 0 ? founders.length - itemsToShow : nextIndex;
        });
      };
    
      type PanInfo = {
        offset: {
          x: number;
          y: number;
        };
        velocity: {
          x: number;
        };
      };

      const handleDragEnd = (_event: never, info: PanInfo) => {
        const swipeThreshold = 50;
        if (
          info.offset.x < -swipeThreshold &&
          startIndex < founders.length - itemsToShow
        ) {
          next();
        } else if (info.offset.x > swipeThreshold && startIndex > 0) {
          prev();
        }
      };
    
      const visibleFounders = founders.slice(startIndex, startIndex + itemsToShow);

    
    return ( 
        <div id="team"
        className="py-16 md:py-32"
      >
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              Meet the team
            </h2>
            <p className="text-[14px] md:text-[18px] tracking-wide font-semibold text-white/80">
              Meet the passionate investment professionals behind realty corp.
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <motion.button onClick={prev}>
              <PiArrowArcLeft className="text-white/45 border rounded-full flex items-center justify-center text-4xl p-2 hover:text-white transition-colors" />
            </motion.button>
            <motion.button onClick={next}>
              <PiArrowArcRight className="text-white/45 border rounded-full flex items-center justify-center text-4xl p-2 hover:text-white transition-colors" />
            </motion.button>
          </div>
        </div>
  
        <div className="relative max-w-full overflow-hidden">
          <AnimatePresence >
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8"
              key={startIndex}
              initial="hidden"
              animate="show"
              exit="exit"
              style={{
                touchAction: "none",
                x: 0,
              }}
            >
              {visibleFounders.map((founder, index) => (
                <FounderCard 
                  key={index}
                  {...founder}
                  onClick={() => setSelectedFounder(founder)}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-end md:hidden gap-2">
            <motion.button onClick={prev}>
              <PiArrowArcLeft className="text-white/45 border rounded-full flex items-center justify-center text-4xl p-2 hover:text-white transition-colors" />
            </motion.button>
            <motion.button onClick={next}>
              <PiArrowArcRight className="text-white/45 border rounded-full flex items-center justify-center text-4xl p-2 hover:text-white transition-colors" />
            </motion.button>
          </div>

          <AnimatePresence>
            {selectedFounder && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black z-40"
                  onClick={() => setSelectedFounder(null)}
                />
                  <MemberDetails
                    founder={selectedFounder}
                    onClose={() => setSelectedFounder(null)}
                  />
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    
);
}
 
export default Founders;