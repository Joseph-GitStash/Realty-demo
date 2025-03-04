'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation"

const LaptopMenu = ({ link }: any) => {
  const path = usePathname()

  return (
        <Link href={link.href} className={`${path === link.href ? "bg-gradient-to-l from-[#9fa9ff] to-[#4059db] text-transparent bg-clip-text" : "text-white/85"} nav-link`} >
            {link.label}
        </Link>
  )
}

export default LaptopMenu