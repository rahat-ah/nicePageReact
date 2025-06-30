import { IoCall } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";

function SectionSevenTopic({headerText,bodyText1,bodyText2}) {
  return (
    <div className="bg-[#4753F0] text-left text-white px-5 py-9 rounded-2xl">
        <div className="flex items-center text-xl mb-5">
            <h2 className="inline-block">{headerText === "call us"?
              <IoCall />:headerText === "location"? 
              <IoLocationSharp />:headerText === "hours"?
              <IoMdTime /> :{}
            }</h2>
            <h2 className="font-bold uppercase ml-2.5">{headerText}</h2>
        </div>
        <div>
            <p className="font-medium">{bodyText1}<br />{bodyText2}</p>
        </div>

    </div>
  )
}

export default SectionSevenTopic