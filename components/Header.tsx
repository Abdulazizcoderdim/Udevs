'use client'

import { navLinks } from '@/constants'
import { Instagram, Menu, Twitter, X, Youtube } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import Button from './Button'
import MaxWidth from './MaxWidth'

const Header = () => {
  const [nav, setNav] = useState('')
  const [openModal, setOpenModal] = useState(false)
  return (
    <div
      id="home"
      className="py-5 z-30 bg-white fixed top-0 left-0 right-0 border-b-[1px]"
    >
      <MaxWidth className="flex items-center justify-between">
        <Link href="#home">
          <img width={100} height={100} src="/logog.svg" alt="logo" />
        </Link>
        <ul className="flex max-[944px]:hidden items-center gap-10">
          {navLinks.map((link, index) => {
            return (
              <FlyoutLink
                FlyoutContent={
                  (index == 2 || index == 5 || index == 6) &&
                  link.dropDown && <link.dropDown />
                }
                key={index}
              >
                <li className="relative" onClick={() => setNav(link.href)}>
                  <Link
                    className="flex items-center text-sm font-medium "
                    href={link.href}
                  >
                    {link.name}
                    {link.icon && <link.icon width={15} />}
                  </Link>
                  <span
                    className={`${
                      link.href === nav &&
                      'absolute -bottom-2 right-0 left-0 h-[1.5px] bg-blue-600 rounded-s-lg'
                    }`}
                  />
                </li>
              </FlyoutLink>
            )
          })}
          <li className="hover:scale-105 transition-all duration-200">
            <Button>Contact</Button>
          </li>
        </ul>
        <Menu
          onClick={() => setOpenModal((prev) => !prev)}
          className="max-[944px]:block hidden cursor-pointer text-blue-600"
        />
      </MaxWidth>
      <div
        className={`fixed flex-col min-[944px]:hidden flex z-20 right-0 left-0 ${
          openModal ? 'translate-x-0' : 'translate-x-full'
        } top-0 bottom-0 bg-[#F4F7FF] p-5 transition-all duration-500`}
      >
        <div className="flex justify-between items-center mb-5">
          <Link href="/">
            <img width={100} height={100} src="/logog.svg" alt="logo" />
          </Link>
          <X
            onClick={() => setOpenModal(false)}
            className="cursor-pointer text-blue-600"
          />
        </div>
        <ul className="flex flex-col justify-center mt-32 text-center gap-4">
          <li>
            <Link
              href="#"
              className="text-4xl font-medium"
              onClick={() => setOpenModal(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-4xl font-medium"
              onClick={() => setOpenModal(false)}
            >
              Clients
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-4xl font-medium"
              onClick={() => setOpenModal(false)}
            >
              Command
            </Link>
          </li>
        </ul>
        <Button className="w-full mt-48 text-center hover:scale-105 py-4 text-xl transition-all duration-200">
          Contact
        </Button>
        <div className="flex items-center justify-center gap-5 mt-10 text-center w-full">
          <span className="w-11 h-11 flex justify-center items-center cursor-pointer text-white rounded-full bg-[#1B5BF7]">
            <Instagram />
          </span>
          <span className="w-11 h-11 flex justify-center items-center cursor-pointer text-white rounded-full bg-[#1B5BF7]">
            <Twitter />
          </span>
          <span className="w-11 h-11 flex justify-center items-center cursor-pointer text-white rounded-full bg-[#1B5BF7]">
            <Youtube />
          </span>
        </div>
      </div>
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
      <div className="relative">
        {children}
        <span
          className={`${
            open &&
            'absolute -bottom-2 right-0 left-0 h-[1.5px] bg-blue-600 rounded-s-lg'
          }`}
        />
      </div>
      {showFlyout && (
        <div className="absolute rounded-lg left-1/2 top-8 -translate-x-1/2 bg-white text-black">
          <div className="absolute -top-2 left-0 right-0 h-4 bg-transparent" />
          {FlyoutContent}
        </div>
      )}
    </div>
  )
}

export default Header
