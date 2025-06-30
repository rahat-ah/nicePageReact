

function FreePic({stylePosition,styleBg,styleTextColor}) {
  return (
    <div className={`${styleTextColor || "text-white" } ${styleBg||"bg-[#4753F0]"} w-full py-6 flex justify-center`}>
        <p className={stylePosition}>
          Image from  
          <span 
          className={`hover:${styleTextColor || "text-gray-200"} hover:border-amber-400 border-b-2 pb-0.5 ${styleTextColor || "border-amber-50"} cursor-pointer ml-1`}>
            Freepik
          </span>
        </p>
    </div>
  )
}

export default FreePic