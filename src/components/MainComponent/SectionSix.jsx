import secSixImage from "../../assets/mainImages/section-six-image.jpg"
import { FaQuoteRight } from "react-icons/fa";
import FreePic from "./FreePic";
import { useRef } from "react";
import { motion , useInView} from "framer-motion";


function SectionSix() {
  const secSixRef = useRef(null)
  const secSixInView = useInView(secSixRef,{amount:0,once:false})

  return (
    <div
     ref={secSixRef}
     className='mt-[2100px] sm:mt-[2000px] md:mt-[1400px] lg:mt-[1300px] w-full bg-[#4753F0]'>
        <div className='w-[340px] sm:w-[540px] md:w-[720px] lg:w-[920px] xl:w-[1140px] text-center pt-15 m-auto overflow-hidden'>
            <motion.div
             initial={{scale:0,opacity:0.4}}
             animate={secSixInView ? {scale:1,opacity:1} : {}}
             transition={{duration:.8,delay:0}}
             className="text-amber-500 text-6xl mb-50 flex items-center justify-center">
              <FaQuoteRight />
            </motion.div>
            <motion.div
             initial={{y:200,opacity:0}}
             animate={secSixInView ? {y:0,opacity:1} : {}}
             transition={{duration:.8,delay:0.8}}
             className="bg-white w-full p-8 sm:p-12 rounded-2xl mb-8 flex flex-col items-center">
              <div style={{
                backgroundImage : `url(${secSixImage})`,
                backgroundPosition: "center",
                backgroundSize:"contain"
              }} 
              className="w-[280px] h-[280px] rounded-full mt-[-160px] mb-16"
              ></div>
              <p className="text-xl sm:text-3xl md:text-4xl xl:text-4.5xl font-bold text-[#4753F0] text-center">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </motion.div>
            <motion.h3
             initial={{y:30,opacity:0}}
             animate={secSixInView ? {y:0,opacity:1} : {}}
             transition={{duration:.8,delay:1.2}}
             className="font-bold text-xl text-white">- May Hawkes, General Manager Operations -</motion.h3>
            <FreePic stylePosition={"text-center"} />
        </div>
    </div>
  )
}

export default SectionSix