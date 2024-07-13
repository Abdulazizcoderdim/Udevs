'use client'

import { useState } from 'react'
import CountUp from 'react-countup'
import MaxWidth from './MaxWidth'

const TeamPage = () => {
  const [pilus, setPilus] = useState(false)
  return (
    <div className="py-24 bg-[#F4F7FF]">
      <MaxWidth id="team" className="">
        <h1 className="text-[64px] max-[944px]:text-[32px] font-semibold text-blue-1">
          Team
        </h1>
        <div className="flex max-[944px]:flex-col-reverse items-center justify-between">
          <div className="w-1/2 max-[944px]:w-full">
            <p className="text-xl max-[944px]:mt-5 max-[944px]:text-base leading-loose font-medium text-[#464359]">
              For each project, we form a team that includes a project manager,
              business analyst, UI / UX designer, DevOps, QA engineer, backend
              and front-end developers.
            </p>
            {/* count */}
            <div className="text-[120px] max-[944px]:mt-10 max-[944px]:text-[80px] text-blue-1 font-bold">
              <CountUp onEnd={() => setPilus(true)} duration={2.5} end={100} />
              <span>{pilus && '+'}</span>
            </div>
            <p className="text-[40px] max-[944px]:text-2xl font-semibold text-[#464359]">
              Dedicated team
            </p>
          </div>
          <div className="w-1/2 max-[944px]:w-full">
            <img src="/team.svg" alt="" />
          </div>
        </div>
      </MaxWidth>
    </div>
  )
}

export default TeamPage
