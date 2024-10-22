import React from 'react'
import Link from 'next/link'

export default function Tabs() {
  return (
    <div className="container flex items-center justify-end py-10">
      <nav className="relative flex flex-row mr-10">
        <Link
          className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-green-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left mr-8"
          href="https://logfolio.com"
          target="_blank"
        >
          Current project
        </Link>

        <Link
          className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-green-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left mr-8"
          href="/"
        >
          Bio
        </Link>

        <Link
          className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-green-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
          href="/cv"
        >
          CV
        </Link>
      </nav>
    </div>
  )
}
