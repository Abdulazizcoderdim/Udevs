'use client'

import { InfiniteMovingCards2 } from './ui/infinite-moving-cards copy'

export function InfiniteMovingCardsDemo2() {
  return (
    <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards2
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  )
}

const testimonials = [
  {
    img: '/good.svg',
  },
  {
    img: '/smsuz.svg',
  },
  {
    img: '/max.svg',
  },
  {
    img: '/z.svg',
  },
  {
    img: '/workly.svg',
  },
  {
    img: '/shef.svg',
  },
  {
    img: '/my.svg',
  },
]
