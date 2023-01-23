import { BsYoutube, BsFillKeyboardFill } from 'react-icons/bs'
import { BiVideoPlus, BiBell } from 'react-icons/bi'
import { RxHamburgerMenu } from 'react-icons/rx'
import { HiMicrophone } from 'react-icons/hi2'
import { TfiClose, TfiSearch } from 'react-icons/tfi'

import userIcon from '../assets/images/user-icon.png'

import { Link } from 'react-router-dom'

type handleToggleSideBar = {
  handleToggleSideBar: () => void
}

export const Navbar = ({ handleToggleSideBar }: handleToggleSideBar) => {
  return (
    <div className="flex justify-between items-center px-4 pb-2 h-header bg-white sticky top-0 z-50 ">
      {/* left navbar */}
      <div className="flex gap-5 items-center">
        {/* Toggle Menu Mobile */}
        <div
          className="text-2xl rounded-3xl h-10 flex items-center px-2 hover:bg-gray-200 duration-200 cursor-pointer
          "
          onClick={() => handleToggleSideBar()}
        >
          <RxHamburgerMenu />
        </div>
        {/* Logo Youtube */}
        <Link to="/">
          <div className="flex gap-1 items-center justify-center">
            <BsYoutube className="text-3xl text-main" />
            <span className="text-xl tracking-[-2.5px] font-bold">YouTube</span>
            <sup className="font-normal text-[10px]">CLONE</sup>
          </div>
        </Link>
      </div>

      {/* Form search */}
      <div className="flex bg-white items-center h-10 min-w-0 flex-[0.65]">
        <form className="flex items-center rounded-l-3xl h-full border focus-within:border-blue-500 w-full">
          <div className="px-4">
            <TfiSearch className="text-base" />
          </div>

          <input
            type="text"
            className="focus:outline-none border-none  w-full"
          />

          <BsFillKeyboardFill className="hidden lg:block text-xl cursor-pointer opacity-80 hover:opacity-100" />

          <div
            id="search-form"
            className="rounded-3xl h-10 flex items-center p-3 hover:bg-gray-200 duration-200"
          >
            <TfiClose className="text-lg cursor-pointer duration-200" />
          </div>
        </form>

        <button className="bg-gray-100 border rounded-r-3xl flex items-center justify-center h-full px-5 hover:bg-gray-200 duration-200">
          <TfiSearch className="text-xl" />
        </button>

        <button className="rounded-3xl h-10 flex items-center p-3 ml-2 bg-gray-50 hover:bg-gray-200 duration-200">
          <HiMicrophone className="text-xl" />
        </button>
      </div>

      {/* User */}
      <div className="flex items-center gap-2 ">
        <div className="rounded-3xl h-10 flex items-center p-2 hover:bg-gray-200 duration-200">
          <BiVideoPlus className="cursor-pointer text-2xl" />
        </div>
        <div className="rounded-3xl h-10 flex items-center p-2 hover:bg-gray-200 duration-200 relative">
          <BiBell className="cursor-pointer text-2xl " />
          <span className="absolute text-xs rounded-full bg-red-600 text-white top-1 right-0 flex items-center px-[2px]">
            99+
          </span>
        </div>
        <div className="mx-5 w-8 h-8">
          <img
            src={userIcon}
            className="w-8 h-8 rounded-3xl cursor-pointer"
            alt="logo user"
          />
        </div>
      </div>
    </div>
  )
}
