import { motion } from 'framer-motion'
import SectionThreeTopic from './SectionThreeTopic'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

function SectionThree() {
  const sectionRef = useRef(null)
  const sec3IsInView = useInView(sectionRef)

  const animationProps = {
    initial: { opacity: 0, scale: 0,},
    animate: sec3IsInView ? { opacity: 1, scale: 1,} : {},
    transition: { duration: 1, ease: 'easeOut',delay:1}
  }
  return (
    <div ref={sectionRef} className='bg-[#4753F0] text-white text-center pb-10 overflow-x-hidden'>
        <div className="relative w-full z-50">
          <motion.div
            initial={{width:"0px",opacity:.4}}
            animate={sec3IsInView ? {width:"100%",opacity:1} : {}}
            transition={{ duration: 1.5, ease: 'easeOut', delay:1.5 }}
            className='absolute top-1/5 sm:top-1/4 md:top-1/3 left-0 right-0 bg-amber-400 h-[500px] md:h-[360px] -z-10 max-w-full overflow-hidden'
          />
          <div
          className='w-[340px] sm:w-[540px] md:w-[720px] lg:w-[940px] xl:w-[1140px] m-auto'>
              <motion.h1 
              {...animationProps}
              className='text-3xl sm:text-5xl font-bold mb-5'>Integrity. Uniqueness. Enjoyment. Ever Forward.</motion.h1>
              <motion.p 
              {...animationProps}
              className='font-medium mb-10'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit . </motion.p>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-auto gap-6'>
                <SectionThreeTopic animationProps={animationProps} /> 
                <SectionThreeTopic animationProps={animationProps} /> 
                <SectionThreeTopic animationProps={animationProps} /> 
                <SectionThreeTopic animationProps={animationProps} />
                <SectionThreeTopic animationProps={animationProps} /> 
                <SectionThreeTopic animationProps={animationProps} />
                
              </div>
          </div>
        </div>
    </div>
  )
}

export default SectionThree