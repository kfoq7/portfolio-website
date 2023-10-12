import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

interface LinkProps {
  children: React.ReactNode
  href: string
}

const LinkItem = ({ href, children }: LinkProps) => {
  return (
    <div className="flex items-center justify-center relative">
      <Link
        className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition"
        href={href}
      >
        {children}
      </Link>
    </div>
  )
}

export default function Navbar() {
  return (
    <nav className="z-20 fixed w-full sm:pt-6">
      <motion.div
        className="mx-auto max-w-xl h-[4.5rem] w-full flex items-center justify-center rounded-none sm:rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:h-[3.25rem] sm:w-[36rem]"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <section className="flex items-center justify-center flex-wrap w-[22rem] gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          <LinkItem href="/">Home</LinkItem>
          <LinkItem href="/#about">About</LinkItem>
          <LinkItem href="/#projects">Projects</LinkItem>
          <LinkItem href="/#skills">Skills</LinkItem>
          <LinkItem href="/#experience">Experience</LinkItem>
          <LinkItem href="/#contact">Contact</LinkItem>
        </section>
      </motion.div>
    </nav>
  )
}
