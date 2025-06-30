
import nicePageLogo from "../../assets/headerIcons/logo-nicepage-main.png"
import logoDesktop from "../../assets/headerIcons/responsive-desktop-icon.png"
import logoLaptop from "../../assets/headerIcons/responsive-laptop-icon.png"
import logoTablet from "../../assets/headerIcons/responsive-tablet-icon.png"
import logoPhoneHorizon from "../../assets/headerIcons/responsive-phone-horizontal-icon.png"
import logoPhone from "../../assets/headerIcons/responsive-phone-icon.png"
import iconClose from "../../assets/headerIcons/icon-close.png"

function NiceHeader() {
  return (
    <div className="bg-[rgb(235,233,233)] flex justify-between items-center h-[70px] px-3 fixed top-0 w-[100vw] z-[100]
    ">
        <img src={nicePageLogo} alt="Nicepage logo" className="cursor-pointer" />
        <div className="flex gap-2">
          <img src={logoDesktop} alt="Desktop logo" className="p-2 w-12 bg-blue-200 cursor-pointer" />
          <img src={logoLaptop} alt="Laptop logo" className="p-2 hover:bg-blue-100 w-12 bg-opacity-50 cursor-pointer" />
          <img src={logoTablet} alt="Tablet logo" className="p-2 hover:bg-blue-100 w-12 cursor-pointer" />
          <img src={logoPhoneHorizon} alt="Phone Horizontal logo" className="p-2 hover:bg-blue-100  w-12 cursor-pointer" />
          <img src={logoPhone} alt="Phone logo" className="p-2 hover:bg-blue-100 w-12 cursor-pointer" />
        </div>
        <img src={iconClose} alt="close icon" className="p-2 hover:bg-blue-100 cursor-pointer" />
    </div>
  )
}

export default NiceHeader