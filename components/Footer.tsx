import { footerAbout, footerPor, footerSer } from '@/constants'
import { Instagram, Twitter, Youtube } from 'lucide-react'
import Link from 'next/link'
import MaxWidth from './MaxWidth'

const Footer = () => {
  return (
    <div className="bg-[#f4f7ff]">
      <MaxWidth id="footer" className="py-10 ">
        <div className="flex items-center justify-center">
          <img src="/f.svg" alt="" />
        </div>
        <div className="flex justify-between max-[944px]:flex-col mt-10">
          <ul>
            {footerAbout.map((item, index) => (
              <li
                key={index}
                className={`py-2  ${
                  index == 0
                    ? 'text-black text-[1em]'
                    : 'text-blue-1 hover:underline'
                }`}
              >
                <Link href={item.href} className="text-lg">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul>
            {footerSer.map((item, index) => (
              <li
                key={index}
                className={`py-2  ${
                  index == 0
                    ? 'text-black text-[1em]'
                    : 'text-blue-1 hover:underline'
                }`}
              >
                <Link href={item.href} className="text-lg">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col">
            {footerPor.map((item, index) => (
              <li
                key={index}
                className={`py-2 ${
                  index == 0
                    ? 'text-black text-[1em]'
                    : 'text-blue-1 hover:underline'
                }`}
              >
                <Link href={item.href} className="text-lg">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t-2 max-[944px]:border-none max-[944px]:flex-col-reverse  flex items-center justify-between text-blue-1 py-5 mt-5">
          <p className="text-center text-sm">© 2022. All rights reserved.</p>
          <div className="flex items-center gap-5 py-2">
            <Instagram />
            <Youtube />
            <Twitter />
          </div>
        </div>
      </MaxWidth>
    </div>
  )
}

export default Footer
