'use client'

import { useState } from 'react'
import CountUp from 'react-countup'
import MaxWidth from './MaxWidth'

const TeamPage = () => {
  const [pilus, setPilus] = useState(false)
  return (
    <div className="py-24 bg-[#F4F7FF]">
      <MaxWidth id="team" className="">
        <h1 className="text-[64px] font-semibold text-blue-1">Team</h1>
        <div className="flex items-center justify-between">
          <div className="w-1/2 ">
            <p className="text-xl leading-loose font-medium text-[#464359]">
              For each project, we form a team that includes a project manager,
              business analyst, UI / UX designer, DevOps, QA engineer, backend
              and front-end developers.
            </p>
            {/* count */}
            <div className="text-[120px] text-blue-1 font-bold">
              <CountUp onEnd={() => setPilus(true)} duration={2.5} end={100} />
              <span>{pilus && '+'}</span>
            </div>
            <p className="text-[40px] font-semibold text-[#464359]">
              Dedicated team
            </p>
          </div>
          <div className="w-1/2">
            <img src="/team.svg" alt="" />
          </div>
        </div>
      </MaxWidth>
    </div>
  )
}

export default TeamPage
