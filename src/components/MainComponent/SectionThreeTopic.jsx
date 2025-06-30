import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

function SectionThreeTopic({animationProps}) {
  return (
    <motion.div 
    {...animationProps}
    className="w-full md:w-[345px] lg:w-[293px] xl:w-[360px] bg-white rounded-3xl text-left p-6">
        <h4 className="text-[#4753F0] text-2xl font-semibold uppercase mb-5">who we are</h4>
        <p className="text-gray-400">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat</p>
        <div className="flex justify-end">
            <button className="text-[#4753F0] text-2xl"><FaArrowRight /></button>
        </div>
    </motion.div>
  )
}

export default SectionThreeTopic