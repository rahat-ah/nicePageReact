import secSevenImage from "../../assets/mainImages/contact-section-image.jpg"
import FreePic from "./FreePic"
import SectionSevenTopic from "./SectionSevenTopic"
import SetionSevenForm from './SetionSevenForm'
import { motion ,useInView } from "framer-motion"
import { useRef } from "react"

function SectionSeven() {
  const secSevenRef = useRef(null)
  const secSevenInView = useInView(secSevenRef,{amount:0,once:false})

  return (
    <div 
    ref={secSevenRef}
    className='w-[340px] sm:w-[540px] md:w-[720px] lg:w-[920px] xl:w-[1140px] text-center pt-15 m-auto mb-10'>
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
            <motion.img 
            initial={{scale:0,opacity:0}}
            animate={secSevenInView ? {scale:1,opacity:1}:{}}
            transition={{duration:1,delay:.5}}
            src={secSevenImage} 
            alt="contact image"
            
            />
            <motion.div
            initial={{x:400,opacity:0}}
            animate={secSevenInView ? {x:0,opacity:1}:{}}
            transition={{duration:1,delay:.5}}
           
            >
                <h4 className="text-3xl font-bold capitalize mb-10">contact us</h4>
                <SetionSevenForm />
            </motion.div>
        </div>
        <motion.div 
          initial={{x:"100%",opacity:0}}
          animate={secSevenInView ? {
            x:"0%",
            opacity:1
          }:{}}
          transition={{duration:.4,delay:.5,ease: "easeOut"}}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          <SectionSevenTopic
          headerText="call us"
          bodyText1="1 (234) 567-891,"
          bodyText2="1 (234) 987-654"
          />
          <SectionSevenTopic
          headerText="location"
          bodyText1="121 Rock Sreet, 21 Avenue, New York,"
          bodyText2="NY 92103-9000"
          />
          <SectionSevenTopic
          headerText="hours"
          bodyText1="Mon _ Fri …… 11 am _ 8 pm, Sat,"
          bodyText2="Sun  …… 6 am _ 8 pm"
          />
        </motion.div>
        <FreePic stylePosition="text-center" styleBg="bg-white" styleTextColor="text-black" />
    </div>
  )
}

export default SectionSeven