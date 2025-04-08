'use client'

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { PiFacebookLogo, PiInstagramLogo, PiLinkedinLogo, PiTwitterLogo } from "react-icons/pi";

const links = [
    { href: "/", label: "Home" },
    { href: "#activities", label: "Activities" },
    { href: "#about", label: "About" },
    { href: "#team", label: "Team" },
];


const Header = () => {
const pathname = usePathname();
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const isHomePage = pathname === "/";
const [hasScrolled, setHasScrolled] = useState(false);
const { scrollY } = useScroll();
const [prevScrollY, setPrevScrollY] = useState(0);
const [isVisible, setIsVisible] = useState(true);

useMotionValueEvent(scrollY, "change", (latest) => {
    if (!mobileMenuOpen) {
      const scrollingUp = latest < prevScrollY;
      const shouldShow = scrollingUp || latest < 50;
      setIsVisible(shouldShow);

      if (latest > 50 && !hasScrolled) {
        setHasScrolled(true);
      } else if (latest < 50) {
        setHasScrolled(false);
      }
    }
    setPrevScrollY(latest);
});

const menuVariants = {
    open: {
      opacity: 1,
      height: "auto",
    },
    closed: {
      opacitty: 0,
      height: 0,
    },
};

const navbarVariants = {
    initial: isHomePage
      ? {
          y: -100,
          opacity: 0,
        }
      : {
          y: 0,
          opacity: 1,
        },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.3,
        delay: isHomePage && !hasScrolled ? 1.8 : 0,
      },
    },
    hidden: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
};


  return (
    <AnimatePresence>
        <motion.div 
        key="navbar"
        animate={isVisible ? "visible" : "hidden"}
        variants={navbarVariants}
        className="z-10 w-[100%] fixed top-0 left-0 right-0 "
        >
        <div className="2xl:max-w-screen-xl py-4 lg:bg-transparent lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px] max-w-[1024px] ml-auto mr-auto pl-[20px] pr-[20px]">
        <nav className='border-none bg-gradient-to-b from-zinc-900/0 to-zinc-900/0 h-12 px-4 ring-1 ring-zinc-50/5 backdrop-blur rounded-[3px]'>
            <div className="left">
                <Link href='/' className='logo'>
                    <span className='text-[17px] font-semibold text-white font-semi-bold'>RealtyCorp</span>
                </Link>
                <div className='middle navbar'>
                    {links.map((link) => (
                    <Link href={link.href}
                        key={link.href} 
                        className={`${pathname === link.href ? "bg-zinc-50/10 text-white hover:bg-zinc-50/15" : " text-white/85"} nav-link`} >
                        {link.label}
                    </Link>
                    ))}
                </div>
            </div>

            <div className="flex gap-5 flex-[1] items-center justify-end ">
              <Link href="" className={`${pathname === "" ? "bg-zinc-50/10 text-white" : "text-white/85"}  custombtn `}>
                Login
              </Link>
              <button className='md:hidden z-[1000]'
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >  
                <Menu />
              </button>
            </div>
            
        </nav>
        </div>
        </motion.div>

        {mobileMenuOpen && (
        <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full md:hidden md:w-2/5 bg-black shadow-lg p-6 z-50 cursor-pointer"
        >
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="absolute top-4 right-4 w-6 h-6 text-white/50 hover:text-white mt-1"
        >
          <X />
        </button>
        <div className="space-y-4">
            <h3 className="font-semibold pl-1 text-lg">RealtyCorp</h3>
            <div className="flex flex-col space-y-4 pt-20">
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`${
                  pathname === link.href ? " text-white" : "text-white/85"
                } nlink hover:translate-x-2 hover:duration-200 hover:ease-in hover:transition-all hover:text-white p-0`}
              >
                {link.label}
              </Link>
            ))}
            
            </div>
            <p className="pt-20 text-lg font-bold text-transparent">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="flex">
              <div className="flex gap-2">
                <PiFacebookLogo className="w-5 h-5 text-white/80 hover:text-white cursor-pointer hover:w-7 hover:h-7 duration-200 hover:transition-all ease-in" />
                <PiLinkedinLogo className="w-5 h-5 text-white/80 hover:text-white cursor-pointer hover:w-7 hover:h-7 duration-200 hover:transition-all ease-in" />
                <PiTwitterLogo className="w-5 h-5 text-white/80 hover:text-white cursor-pointer hover:w-7 hover:h-7 duration-200 hover:transition-all ease-in" />
              </div>
              
            </div>
            
            
          </div>
        </motion.div>
        )}

    </AnimatePresence>
  )
}

export default Header