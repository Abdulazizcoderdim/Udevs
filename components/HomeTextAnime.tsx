'use client'

import { TypeAnimation } from 'react-type-animation'

const HomeTextAnime = () => {
  return (
    <div className="max-w-[550px] max-[944px]:w-full">
      {' '}
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Development of mobile applications',
          2000, // wait 1s before replacing "Mice" with "Hamsters"
          'Development and implementation ERP systems',
          2000,
          'User interface, User experience design',
          2000,
          'Optimization IT consulting infrastructure',
          2000,
          'IT consulting',
          2000,
        ]}
        wrapper="span"
        speed={40}
        // style={{
        //   fontSize: '2.5em',
        //   fontWeight: 'bold',
        //   color: '#1B5BF7',
        //   display: 'inline-block',
        // }}
        className='text-[2.5em] max-[944px]:text-[1.7em] max-[944px]:font-semibold font-bold text-[#1B5BF7] inline-block'
        repeat={Infinity}
      />
    </div>
  )
}

export default HomeTextAnime
