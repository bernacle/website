import React from 'react'
import Link from 'next/link'

export default function Tabs() {
  return (
    <div className="container flex items-center justify-end py-20">
      <nav className="relative flex flex-row">
        <Link
          className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-green-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left mr-8"
          href={{ pathname: 'https://blog.brunosimplicio.com' }}
          target="_blank"
        >
          Blog
        </Link>

        <Link
          className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-green-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
          href="/cv"
          target="_blank"
        >
          CV
        </Link>
      </nav>
    </div>
  )
}
