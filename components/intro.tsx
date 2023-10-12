import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiDownload } from 'react-icons/hi'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import Layout from './layouts/article'

export default function Intro() {
  return (
    <Layout>
      <div className="flex items-center justify-center pt-36">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.2 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"
              alt="profile-photo"
              width={100}
              height={100}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 125, delay: 0.1, duration: 0.7 }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <strong className="font-bold">Hello, I&apos;m Ricardo a </strong>
        <span className="font-bold">full-stack developer</span> with{' '}
        <strong className="font-bold">8 years</strong> of experience. I enjoy building{' '}
        <span className="italic">sites & apps</span>. My focus is{' '}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.section
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="bg-gray-900 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none transition focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
        >
          Contact me here &rarr;
        </Link>
        <Link
          href="/CV.pdf"
          download="/cv.pdf"
          className="group bg-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none transition focus:scale-110 hover:scale-110 hover:bg-gray-50 active:scale-105"
        >
          Download CV
          <HiDownload />
        </Link>
        <Link
          href="https://linkedin.com"
          target="_blank"
          className="bg-white p-3 text-gray-700 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border-black"
        >
          <BsLinkedin />
        </Link>
        <Link
          href="https://github.com/kfoq7"
          target="_blank"
          className="bg-white p-3 text-gray-700 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border-black"
        >
          <BsGithub />
        </Link>
      </motion.section>
    </Layout>
  )
}
