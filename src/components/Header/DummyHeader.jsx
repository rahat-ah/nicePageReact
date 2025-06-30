 import dummyLogo from '../../assets/headerIcons/logo-dummy.png'
 import { HiMenu } from "react-icons/hi";

function DummyHeader() {
  return (
    <div className='flex items-center justify-center mt-[70px]'>
      <div className='flex justify-between items-center py-5 w-[340px] sm:w-[513px] md:w-[700px] lg:w-[860px] xl:w-[1200px]'>
        <img src={dummyLogo} alt="logo icon" className='cursor-pointer w-[65px]' />
        <HiMenu size={38} className='hover:text-amber-400 cursor-pointer'/>
      </div>
    </div>
    
  )
}

export default DummyHeader