'use client'

import { InfiniteMovingCards } from './ui/infinite-moving-cards'

export function InfiniteMovingCardsDemo() {
  return (
    <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
    </div>
  )
}

const testimonials = [
  {
    img: '/akfa.svg',
  },
  {
    img: '/space.svg',
  },
  {
    img: '/delever.svg',
  },
  {
    img: '/fonon.svg',
  },
  {
    img: '/hosh.svg',
  },
  {
    img: '/iman.svg',
  },
]
