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
        <div className="mt-10 shadow-xl rounded-md px-20 py-10">
          <div>
            <h1>Leave us a message</h1>
            <div className="flex justify-between mt-5">
              <div className="flex flex-col gap-5">
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
                <Button>Send</Button>
              </div>
              <div className="flex flex-col gap-5">
                <p className="flex items-center gap-2">
                  <img src="/l.svg" alt="" />
                  Ташкент, Мирзо-Улугбекский район, 5-й пр. Курган, 32 адрес
                </p>
                <p className="flex items-center gap-2">
                  <img src="/t0.svg" alt="" />
                  +998 33 66 00 999
                </p>
                <p className="text-blue-1 flex items-center gap-2">
                  <img src="/m.svg" alt="" />
                  <Link href="">azizbek.b@udevs.io</Link>
                </p>
                <p className="flex items-center gap-2">
                  <Send />
                  Ташкент, Мирзо-Улугбекский район, 5-й пр. Курган, 32 адрес
                </p>
                <div className="flex text-blue-1 items-center gap-3">
                  <Youtube />
                  <Instagram />
                  <Facebook />
                  <Twitter />
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.157657270688!2d69.3348263759164!3d41.34892682130472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8dbb8e1f0391:0xd04770323fe890a5!2sUdevs!5e0!3m2!1sru!2s!4v1721046643227!5m2!1sru!2s"
                  width="600"
                  height="450"
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
