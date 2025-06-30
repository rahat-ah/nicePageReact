import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionTwoTopic from "./SectionTwoTopic"
import FreePic from "./FreePic";

function SectionTwo({topicViewStatus}) {
  const h1Ref = useRef(null)
  const h1IsInView = useInView(h1Ref)
  return (
    <div
    ref={h1Ref}
    className='text-center text-white bg-[#4753F0] p-12 sm:p-0'>
        <motion.h1
            initial={{ y: 100, opacity: 0 }}
            whileInView={h1IsInView && { y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.5 }}
            className='text-3xl font-bold mb-5 sm:text-5xl'
        >
            Meet some of our <span className="block md:inline-block">partners!</span>
        </motion.h1>
        <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={h1IsInView && { scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay:.2}}
            viewport={{ once: false, amount: 0.5 }}
            className="text-lg font-semibold mb-22 sm:w-[540px] md:w-[720px] m-auto"
        >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus blanditiis non placeat vitae hic! Animi molestias placeat labore quidem autem.
        </motion.div>
        <motion.div 
            className="grid gap-5 grid-cols-1 md:grid-cols-2 md:w-[720px] lg:grid-cols-3 lg:w-[940px] xl:w-[1140px] m-auto"
            initial={{y:400,opacity:0}}
            animate={h1IsInView && {y:0,opacity:1} ||
                topicViewStatus && {y:400,opacity:0}}
            transition={{duration:1,delay:1}}

        >
            <SectionTwoTopic />
            <SectionTwoTopic />
            <SectionTwoTopic />
        </motion.div>
        <FreePic stylePosition={"text-center"} />
    </div>
  )
}

export default SectionTwo