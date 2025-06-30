import { FaTwitter } from "react-icons/fa";
import { motion,useInView } from "framer-motion";
import { useRef } from "react";

function SectionFIveTopic({missionImg,name,description,style={}}) {
  const secFiveMissionRef = useRef(null)
  const secFiveMissionInView = useInView(secFiveMissionRef,{amount:0,once:false})
  return (
    <div 
      ref={secFiveMissionRef}
      className={`w-full mb-20 md:flex md:${style.flexAtMd} md:justify-between md:items-center md:gap-2.5`}
    >
      <motion.div
      initial={{opacity:0}}
      animate={secFiveMissionInView ? {opacity:1} :{}}
      transition={{duration:1,delay:1}}
      className="md:w-[276px] lg:w-[360px] xl:w-[438px] md:px-6"
      >
        <h3 className={`text-[#4753F0] text-xl font-bold mb-4 md:flex-row-reverse text-right capitalize`}>{name}</h3>
        <p className={`md:${style.textAtMd} text-right mb-20`}>{description}</p>
      </motion.div>
      <motion.div
      initial={{opacity:0}}
      animate={secFiveMissionInView ? {opacity:1} :{}}
      transition={{duration:1,delay:.6}}
      className={`flex mb-10 w-full justify-start md:w-[168px] lg:w-[220px] xl:w-[266px]`}
      >
          <img src={missionImg} alt="mission image" className={`rounded-full w-[150px] lg:w-[205px] h-[150px] lg:h-[205px]  outline-8 outline-amber-500 object-cover object-${style.imgPosition}`}  />
      </motion.div>
      <div className="w-full h-20 md:w-[276px] lg:w-[360px] xl:w-[438px] md:px-20">
        <motion.div
        initial={{scale:0}}
        animate={secFiveMissionInView ? {scale:1} : {}}
        transition={{duration:1,delay:.6}}
        className={` float-${style.twittIconPosition}`}
      >
        <FaTwitter className='text-7xl text-[#4753F0] ' />
      </motion.div> 
      </div>
      
      
      
    </div>
  )
}

export default SectionFIveTopic