import Head from 'next/head'
import React from 'react'

interface Props {
  children: React.ReactNode
  title?: string
}

export default function Layout({ children, title }: Props) {
  const t = `Portafolio - ${title}`

  return (
    <article className="mb-28 pb-4 max-w-[50rem] mx-auto text-center sm:mb-0 scroll-mt-[100rem]">
      {title && (
        <Head>
          <title>{t}</title>
        </Head>
      )}
      {children}
    </article>
  )
}
