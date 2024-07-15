import { Facebook, Instagram, Send, Twitter, Youtube } from 'lucide-react'
import Link from 'next/link'
import Button from './Button'
import MaxWidth from './MaxWidth'

const ContactPage = () => {
  return (
    <MaxWidth id="contact" className="py-24">
      <div>
        <h1 className="text-64px max-[944px]:text-4xl max-[944px]:font-medium font-semibold text-blue-1">
          Contact us
        </h1>
        <div className="mt-10 shadow-xl max-[944px]:shadow-none rounded-md max-[944px]:p-4 px-20 py-10">
          <div>
            <h1>Leave us a message</h1>
            <div className="flex max-[944px]:flex-col gap-28 mt-5">
              <div className="flex w-1/2 max-[944px]:w-full flex-col gap-5">
                <input
                  type="text"
                  placeholder="Name"
                  className="p-3 py-4 outline-none bg-transparent rounded-md border-2"
                />
                <input
                  type="text"
                  placeholder="Your email"
                  className="p-3 py-4 outline-none bg-transparent rounded-md border-2"
                />
                <textarea
                  placeholder="Briefly describe your project"
                  className="p-3 py-4 outline-none bg-transparent rounded-md border-2"
                ></textarea>
                <Button className="hover:scale-105 transition-all duration-200 w-52">
                  Send
                </Button>
              </div>
              <div className="flex w-1/2 max-[944px]:w-full flex-col gap-5">
                <p className="flex items-center gap-2">
                  <img src="/l.svg" alt="" />
                  Ташкент, Мирзо-Улугбекский район, 5-й пр. Курган, 32 адрес
                </p>
                <p className="flex items-center gap-2">
                  <img src="/t0.svg" alt="" />
                  +998 33 66 00 999
                </p>
                <p className=" flex items-center gap-2">
                  <img src="/m.svg" alt="" />
                  <Link href="">azizbek.b@udevs.io</Link>
                </p>
                <p className="flex text-blue-1 items-center gap-2">
                  <Send />
                  t.me/azizbekbakhodirov
                </p>
                <div className="flex max-[944px]:hidden text-blue-1 items-center gap-3">
                  <Youtube />
                  <Instagram />
                  <Facebook />
                  <Twitter />
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.157657270688!2d69.3348263759164!3d41.34892682130472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8dbb8e1f0391:0xd04770323fe890a5!2sUdevs!5e0!3m2!1sru!2s!4v1721046643227!5m2!1sru!2s"
                  width="400"
                  height="200"
                  className='max-[944px]:hidden'
                  style={{ border: 'none' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidth>
  )
}

export default ContactPage
