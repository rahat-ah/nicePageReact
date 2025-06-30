import { useInView,motion } from 'framer-motion'
import { useRef } from 'react'
import SecFourCountTopic from './SecFourCountTopic'
import LearnMoreBtn from './LearnMoreBtn'

function SectionFour() {
    const countBoxRef = useRef(null)
    const isCountBoxInView = useInView(countBoxRef,{amount:0,once:false})

  return (
    <div 
    ref={countBoxRef}
    className='bg-[#4753F0] w-full flex justify-center pb-24'
    >
        <div className='w-[320px] sm:w-[540px] md:w-[720px] xl:w-[1140px] md:flex md:items-center  md:gap-24  py-7 text-center text-white'>
            <div  className='mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 md:w-[390px] lg:w-[520px] lg:grid-cols-2 xl:w-[570px] gap-6 '>
                <SecFourCountTopic endNum="50" aboutNum="happy customers" suffix="k" isNumInView={isCountBoxInView} />
                <SecFourCountTopic endNum="60" aboutNum="Sample Headline" suffix="%" isNumInView={isCountBoxInView} />
                <SecFourCountTopic endNum="100" aboutNum="Our corses" suffix="" isNumInView={isCountBoxInView} />
                <SecFourCountTopic endNum="1230" aboutNum="learners worldwide" suffix="" isNumInView={isCountBoxInView} />
            </div>
            <motion.div
             initial={{x:"100%", opacity:0}}
             animate={isCountBoxInView ? {x:0,opacity:1} : {}}
             transition={{duration:1, delay:1}}
             className='md:w-[330px] md:text-left lg:w-[420px] xl:w-[570px]'
            >
                <h4 className='text-3xl font-semibold mb-6'>The highest quality online courses from institutions</h4>
                <p className='mb-8 font-semibold text-[18px]'>Sample text. Click to select the Text Element.</p>
                <LearnMoreBtn />
            </motion.div>
        </div>
    </div>
  )
}

export default SectionFour