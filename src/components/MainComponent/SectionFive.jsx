import secFiveImg from '../../assets/mainImages/section-five-bg.jpg'
import FreePic from './FreePic'
import LearnMoreBtn from './LearnMoreBtn'
import { motion } from 'framer-motion'
import SectionFIveTopic from './SectionFIveTopic'
import secFiveMissionImg1 from '../../assets/mainImages/mission-section-five.jpg'
import secFiveMissionImg2 from '../../assets/mainImages/mission2-section-five.jpg'
import secFiveMissionImg3 from '../../assets/mainImages/mission3-section-five.jpg'


function SectionFive() {
  return (
    <div className='h-[720px] bg-[#4753F0] '>
        <div className='h-full max-w-[1140px] relative m-auto mb-70'>
            <motion.div
                initial={{y:"200px",opacity:0}} 
                whileInView={{y:0,opacity:1}}
                transition={{duration:1,delay:0}}
                style={{
                    backgroundImage: `url(${secFiveImg})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                }}
                className='bg-no-repeat w-[340px] h-[340px] sm:w-[506px] sm:h-[506px] md:w-[630px] md:h-[630px] lg:w-[800px] lg:h-[800px]  m-auto rounded-full'
            />
            <motion.div 
            initial={{scale:0.5,opacity:0}} 
            whileInView={{scale:1,opacity:1}}
            transition={{duration:1,delay:.5}}
            className='w-[340px] h-[604px] sm:w-[420px] sm:h-[560px] md:w-[515px] md:h-[525px lg:h-[470px] bg-white text-black px-6 py-10 rounded-2xl m-auto absolute top-[40%] left-[15%] sm:top-[50%] sm:left-[4%] md:top-[60%] lg:top-[70%]'>
                <h1 className='text-3xl font-bold mb-6'>Our Mission</h1>
                <p className='text-xl font-medium leading-8 mb-6'>
                    Egestas purus viverra accumsan in nisl nisi. Enim nec dui nunc mattis enim ut. Consequat interdum varius sit amet mattis vulputate enim nulla. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet.
                </p>
                <FreePic
                    styleBg="bg-white" 
                    styleTextColor="text-black" 
                    stylePosition={'w-[340px] sm:w-[513px] md:w-[560px] !text-left mb-2 mx-0'}
                />
                <LearnMoreBtn 
                    style="bg-amber-400 tracking-wider text-[#4753F0] uppercase px-14 rounded-4xl py-5 font-semibold hover:text-white hover:bg-[#4753F0] transition-all "
                />
            </motion.div>
            
        </div>
        <div className='w-[340px] sm:w-[540px] md:w-[720px] lg:w-[940px] xl:w-[1140px] m-auto text-left'>
            <SectionFIveTopic 
            missionImg={secFiveMissionImg1} 
            style={{
                imgPosition : "right",
                twittIconPosition : "right",
                imgBoxPosition: "start",
                flexAtMd:"flex-row",
                textAtMd:"text-right"
            }} 
            name="mary norton" 
            description="While we were not the first home cleaning company in the UK, we take pride in being market leaders in introducing an instant online booking system plus the facility for our customers to login."
            />

            <SectionFIveTopic 
            missionImg={secFiveMissionImg2} 
            style={{
                imgPosition : "left",
                twittIconPosition : "left",
                imgBoxPosition: "end",
                flexAtMd:"flex-row-reverse",
                textAtMd:"text-left"
            }}  
            name="Nick Hudson" 
            description="While we were not the first home cleaning company in the UK, we take pride in being market leaders in introducing an instant online booking system plus. Image from"
            />

            <SectionFIveTopic 
            missionImg={secFiveMissionImg3} 
            style={{
                imgPosition : "left",
                twittIconPosition : "right",
                imgBoxPosition: "start",
                flexAtMd:"flex-row",
                textAtMd:"text-right"
            }}  
            name="Rose Hunter" 
            description="While we were not the first home cleaning company in the UK, we take pride in being market leaders in introducing an instant online booking system plus the facility for our customers to login."
            />
        </div>
    </div>
  )
}

export default SectionFive