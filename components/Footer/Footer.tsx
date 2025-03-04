"use client";

// import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";
import {
  PiFacebookLogo,
  PiInstagramLogo,
  PiLinkedinLogo,
  PiTwitterLogo,
} from "react-icons/pi";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscriptionStatus, setSubscriptionStatus] = useState("");

  const mainLinks = [
    { name: "About", href: "#about" },
    { name: "Activities", href: "#activities" },

    { name: "Team", href: "#team" },
    { name: "Back to top", href: "/" },
  ];

  const legalLinks = [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Sitemap", href: "#" },
  ];

  const socialLinks = [
    { icon: PiFacebookLogo, href: "#" },
    { icon: PiInstagramLogo, href: "#" },
    { icon: PiLinkedinLogo, href: "#" },
    { icon: PiTwitterLogo, href: "#" },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      // Here you would typically make an API call to your backend
      setSubscriptionStatus("success");
      setEmail("");
      setTimeout(() => setSubscriptionStatus(""), 3000);
    }
  };

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "#activities", label: "Activities" },
  { href: "#blog", label: "Blog" },
  { href: "#team", label: "Team" },
];

  return (
    <footer className="py-10 2xl:max-w-screen-xl lg:bg-transparent lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px] max-w-[1024px] ml-auto mr-auto pl-[20px] pr-[20px]">
      <div className="mb-12 ring-1 ring-zinc-50/5" />
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* left side */}
          <div>
            <h2 className="text-4xl font-bold mb-4">RealtyCorp</h2>
            {/* <a
              href="mailto:hi@email.com"
              className="text-xl hover:underline inline-block mb-8"
            >
              hi@email.com
            </a> */}
            <p className="tracking-wider shadow-inner text-[14px] md:text-[17px] transition-all font-bold text-white/80 block">
              One Heddon Street
              <br />
              Mayfair, London W1B ABD
              <br />
              <br />
              Realty Corporation ltd is 
              <br />
              authorized and regulated by
              <br />
              the financial conduct authority.
            </p>
          </div>

          {/* Middle - Navigation */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              {mainLinks.slice(0, 3).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className=" text-[14px] md:text-[17px] shadow-inner tracking-wider transition-all font-bold hover:text-white text-white/80 block"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="space-y-4">
              {mainLinks.slice(3).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="tracking-wider transition-all font-bold hover:text-white text-white/80 block "
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Subscribe to our newsletter
            </h3>
            {/* <a
              href="mailto:hi@email.com"
              className="tracking-wider transition-all font-bold hover:text-white text-white/80 mb-8"
            >
              hi@email.com
            </a> */}
            <h2 className="text-[14px] mb-3 md:text-[17px] shadow-inner tracking-wider transition-all font-bold hover:text-white text-white/80">info@reatycorp.co.uk</h2>
            <h2 className="text-[14px] mb-3 md:text-[17px] shadow-inner tracking-wider transition-all font-bold hover:text-white text-white/80">proptech@reatycorp.co.uk</h2>
            <h2 className="text-[14px] md:text-[17px] shadow-inner tracking-wider transition-all font-bold hover:text-white text-white/80">+44 20 7661 7773</h2>
            {/* <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 text-black
                  focus:ring-black focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="mt-2 w-full bg-black
                   text-white px-4 py-2  hover:bg-gray-800 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </div>
              {subscriptionStatus === "success" && (
                <p className="text-black text-sm">Thanks for subscribing!</p>
              )}
            </form> */}
          </div>
        </div>

          {/* Bottom section */}
          <div
          className="flex flex-col md:flex-row 
        justify-between items-start md:items-center pt-8 border-t border-zinc-50/5"
        >
          {/* Legal links */}
          <div className="flex gap-6 mb-4 md:mb-0">
            {legalLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="tracking-wider transition-all font-bold hover:text-white text-[15px] text-white/80"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social links */}
          <div className="flex gap-6 mb-4 md:mb-0">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  className="w-5 h-5 text-white/80 hover:text-white cursor-pointer"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="tracking-wider transition-all font-bold hover:text-white text-[14px] md:text-[17px] shadow-inner text-white/80">© Built by Joseph 2025</div>
        </div>


      </div>
    </footer>
  )
}

export default Footer