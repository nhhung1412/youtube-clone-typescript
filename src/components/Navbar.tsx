import { BsYoutube, BsFillKeyboardFill } from 'react-icons/bs'
import { BiVideoPlus, BiBell } from 'react-icons/bi'
import { RxHamburgerMenu } from 'react-icons/rx'
import { HiMicrophone } from 'react-icons/hi2'
import { TfiClose, TfiSearch } from 'react-icons/tfi'

import userIcon from '../assets/images/user-icon.png'

import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-8 py-2 h-16 bg-white opacity-95 sticky top-0 z-50 shadow-sm">
      <div className="flex gap-5 items-center">
        {/* Toggle Menu Mobile */}
        <div className="text-2xl rounded-3xl h-10 flex items-center px-2 hover:bg-gray-200 duration-200 cursor-pointer">
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

      <form action="">
        <div className="flex bg-white items-center h-10">
          <div className="flex items-center rounded-l-3xl h-full border focus-within:border-blue-500">
            <div className="px-4">
              <TfiSearch className="text-base" />
            </div>
            <input
              type="text"
              className="w-96 focus:outline-none border-none"
            />
            {/* <AiOutlineClose className='h-10 w-16 flex items-center justify-center bg-zinc-800' /> */}
            <BsFillKeyboardFill className="text-xl cursor-pointer opacity-80 hover:opacity-100" />
            <div className="rounded-3xl h-10 flex items-center p-3 hover:bg-gray-200 duration-200">
              <TfiClose className="text-lg cursor-pointer duration-200" />
            </div>
          </div>
          <button className="bg-gray-100 border rounded-r-3xl flex items-center justify-center h-full px-5 hover:bg-gray-200 duration-200">
            <TfiSearch className="text-xl" />
          </button>
          <button className="rounded-3xl h-10 flex items-center p-3 ml-2 bg-gray-50 hover:bg-gray-200 duration-200">
            <HiMicrophone className="text-xl" />
          </button>
        </div>
      </form>

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
        <div className="ml-5">
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
