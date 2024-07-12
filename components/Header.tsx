'use client'

import { navLinks } from '@/constants'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import Button from './Button'
import MaxWidth from './MaxWidth'

const Header = () => {
  const [nav, setNav] = useState('')
  return (
    <div className="py-5 border-b-[1px]">
      <MaxWidth className="flex items-center justify-between">
        <Link href="/">
          <img width={100} height={100} src="/logog.svg" alt="logo" />
        </Link>
        <ul className="flex max-[944px]:hidden items-center gap-10">
          {navLinks.map((link, index) => {
            return (
              <li
                className={`${
                  link.href === nav &&
                  'border-b-2 border-blue-600 pb-2 transition-all duration-300 mt-2'
                }`}
                key={index}
                onClick={() => setNav(link.href)}
              >
                <Link
                  className="flex items-center text-sm font-medium "
                  href={link.href}
                >
                  {link.name}
                  {link.icon && <link.icon width={15} />}
                </Link>
              </li>
            )
          })}
          <li>
            <Button>Contact</Button>
          </li>
        </ul>
        <Menu className="max-[944px]:block hidden cursor-pointer text-blue-600" />
      </MaxWidth>
    </div>
  )
}

export default Header
