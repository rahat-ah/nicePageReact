import image from '../../assets/mainImages/fg-main.jpg'
import { motion } from 'framer-motion'

function SectionTwoTopic() {
  return (
    <motion.div 
    whileHover="hover"
    initial="initial"
    className='bg-white p-8 rounded-3xl max-w-[340px] sm:w-[540px] md:w-[350px] lg:w-[298px] xl:w-[366px] m-auto text-black'>
        <img src={image} alt="partners images" className='rounded-2xl mb-4' />
        <motion.h3
        variants={{
          initial: { y: 0 },
          hover: { y: -6 }
        }}
        transition={{duration:.3}}
        className='text-2xl font-bold capitalize mb-6'>art school ausrtalia</motion.h3>
        <motion.p 
        variants={{
          initial: { y: 0 },
          hover: { y: -6 }
        }}
        transition={{duration:.3}}
        className='font-medium italic tracking-tight mb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, aut.</motion.p>
        <motion.button 
        variants={{
          initial: { y: 0 },
          hover: { y: -6 }
        }}
        transition={{duration:.3}}
        className='font-medium uppercase border-b pb-0 border-b-[#4753F0] cursor-pointer'>more</motion.button>
    </motion.div>
  )
}

export default SectionTwoTopic