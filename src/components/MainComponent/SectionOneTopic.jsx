import { BiMath } from "react-icons/bi";
import { motion } from "motion/react";

function SectionOneTopic() {
  return (
    <motion.div 
    initial={{y:"100%",opacity:0,scale:.5}}
    animate={{y:0,x:0,opacity:1,scale:1,
      transition:{duration:1,delay:1.4}
    }}
    className="w-[340px] sm:w-[255px] md:w-[270px] lg:w-[247px] bg-white py-8 rounded-2xl text-center flex items-center justify-center flex-col">
        <div className="text-blue-700 bg-amber-500 text-5xl p-5 rounded-full">
            <BiMath />
        </div>
        <h4 className="mt-6 text-2xl font-bold text-blue-600">Math</h4>
    </motion.div>
  )
}

export default SectionOneTopic