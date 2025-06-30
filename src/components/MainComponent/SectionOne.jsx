import SectionOneTopic from './SectionOneTopic'
import image from '../../assets/mainImages/main-image.jpg'
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import FreePic from './FreePic'
function SectionOne({onTopicViewChenge}) {
    const sectionOneTopicRef = useRef(null)
    const sec1TopicIsInView = useInView(sectionOneTopicRef, { once: false, amount: .2 })

    useEffect(()=>{
        onTopicViewChenge(sec1TopicIsInView)
    },[sec1TopicIsInView])
  return (
    <>
    <div 
    ref={sectionOneTopicRef}
    className=" h-[1800px] sm:h-[1330px] lg:h-[1080px]  bg-[#4753F0] py-22 px-0">
        <div 
        
        className="xl:mr-[280px] flex justify-center"
        >
            <div className="max-w-[860px] m-auto ">
                <motion.div
                initial={{x:'-50%',opacity:0}}
                animate={{x:0,
                    opacity:1,
                    transition: { duration: 1.5 ,delay:.5}
                }}
                
                className='!bg-center !bg-cover rounded-full bg-no-repeat w-[300px] h-[300px] lg:w-[860px] lg:h-[860px] sm:w-[513px] sm:h-[513px] md:w-[700px] md:h-[700px] block bg-amber-500 relative mb-10'
                style={{background: `url(${image})`,}}
                >
                    <div className='md:absolute top-[50%] left-[20%] lg:top-[40%] lg:left-[13%] lg:w-[802px] xl:left-[40%] xl:w-[802px]'>
                        <motion.h1 
                        initial={{x:"100%" , opacity:0 }}
                        animate={{x:0,
                            opacity:1,
                            transition: { duration: 1.5 , delay:.5}
                        }}
                        className="bg-[#4753F0] px-4 py-5 text-white text-3xl sm:text-5xl md:py-12 font-bold tracking-widest mb-10 rounded-l-2xl absolute top-[65%] left-[20%] right-0 md:left-0 md:relative">Lesson & <span className='block md:inline-block'>Practice</span></motion.h1>

                        <div 
                        className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 absolute top-[100%] mt-16 md:relative place-items-center">
                            <SectionOneTopic />
                            <SectionOneTopic />
                            <SectionOneTopic />
                            <SectionOneTopic />
                            <SectionOneTopic />
                            <SectionOneTopic />
                            
                        </div>
                        
                    </div>
                      
                </motion.div>
                 
            </div>
            
        </div>
       
    </div>
    <FreePic stylePosition={'w-[340px] sm:w-[513px] md:w-[560px] md:ml-30 lg:ml-[400px] xl:ml-[580px] text-right'} />
    
    </>
  )
}

export default SectionOne



