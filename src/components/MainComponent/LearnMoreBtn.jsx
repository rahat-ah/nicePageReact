import React from 'react'

function LearnMoreBtn({style}) {
  return (
    <button className={style || "bg-amber-400 tracking-wider text-[#4753F0] uppercase px-14 rounded-4xl py-5 font-semibold hover:text-black hover:bg-white transform transition-all hover:translate-y-[-6px]"}>learn more</button>
  )
}

export default LearnMoreBtn