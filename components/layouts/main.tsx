import React from 'react'
import Head from 'next/head'
import Navbar from '../navbar'

interface Props {
  children: React.ReactNode
}

export default function Main({ children }: Props) {
  return (
    <main className="bg-gray-50 text-gray-950 relative z-0 min-h-screen">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Portafolio - Homepage</title>
      </Head>

      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

      <Navbar />

      {children}
    </main>
  )
}
