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
              <FlyoutLink
                FlyoutContent={
                  (index == 2 || index == 5 || index == 6) && <PricingContent />
                }
                key={index}
              >
                <li
                  className={`${
                    link.href === nav &&
                    'border-b-2 border-blue-600 pb-2 hover:border-b-2 transition-all duration-300 mt-2'
                  }`}
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
              </FlyoutLink>
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

const FlyoutLink = ({
  children,
  FlyoutContent,
  key,
}: {
  children: React.ReactNode
  FlyoutContent: React.ReactNode
  key: number
}) => {
  const [open, setOpen] = useState(false)

  const showFlyout = open && FlyoutContent
  if (key == 0 || key == 1 || key == 3 || key == 4) {
    setOpen(false)
  }
  return (
    <div
      key={key}
      onMouseEnter={() => {
        setOpen(true)
      }}
      onMouseLeave={() => {
        setOpen(false)
      }}
      className="relative h-fit w-fit"
    >
      <div>{children}</div>
      {showFlyout && (
        <div className="absolute rounded-lg left-1/2 top-6 -translate-x-1/2 bg-white text-black">
          <div className="absolute -top-3 left-0 right-0 h-3 bg-transparent" />
          {FlyoutContent}
        </div>
      )}
    </div>
  )
}

const PricingContent = () => {
  return (
    <div className="w-64 h-24 bg-slate-50 p-6 shadow hover:shadow-lg transition duration-200 ">
      assaassasa
    </div>
  )
}

export default Header
