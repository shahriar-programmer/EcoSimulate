import { ReactElement, useState } from "react"
import leftArrowIcon from "../../assets/icon-arrow-left.png";
import rightArrowIcon from "../../assets/icon-arrow-left.png";
import searchIcon from "../../assets/icon-search.svg";

type Props = {
    children: ReactElement,
    setShowLocation: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Sidebar({children,setShowLocation}: Props) {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className={`transition ${showSidebar ? 'w-1/4' : 'w-0'} p-4 text-gray-700 relative`}>
      <div className="flex border-2 rounded">
        <input type="search" name="location" id="location" placeholder="Search Location...." className="w-full h-10 p-2 text-lg text-gray-600 border-r-2"/>
        <button className="px-2 transition hover:bg-gray-200/40" onClick={() => setShowLocation(true)}>
            <img src={searchIcon} alt="" className="" width={"30px"} height={"30px"}/>
        </button>
        </div>
        {children}
        <div className="absolute z-10 p-2 bg-white border rounded-full cursor-pointer -right-4 top-1/2" onClick={() => setShowSidebar(prevValues => !prevValues)}>
          {
            showSidebar ? (
            <img src={leftArrowIcon} alt="" width={"30px"} height={"30px"}/>
            ) : (
            <img src={rightArrowIcon} alt="" width={"30px"} height={"30px"}/>
            )
          }
        </div>
    </div>
  )
}