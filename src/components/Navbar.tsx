import { BsYoutube, BsCameraVideo, BsBell, BsFillKeyboardFill } from 'react-icons/bs'
import { BiVideoPlus, BiBell } from 'react-icons/bi'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoAppsSharp } from 'react-icons/io5'
import { HiMicrophone } from 'react-icons/hi2'
import { TfiClose, TfiSearch } from 'react-icons/tfi'

import { NavLink, Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-8 h-14 bg-white opacity-95 sticky top-0 z-50'>
            <div className="flex gap-5 items-center">
                {/* Toggle Menu Mobile */}
                <div className='text-2xl'>
                    <RxHamburgerMenu />
                </div>
                {/* Logo Youtube */}
                <Link to='/'>
                    <div className='flex gap-1 items-center justify-center'>
                        <BsYoutube className='text-3xl text-red-600' />
                        <span className="text-xl tracking-[-2.5px] font-bold">YouTube</span>
                        <sup className='font-normal text-xs'>VN</sup>
                    </div>
                </Link>
            </div>
            {/* Form search */}

            <form action="">
                <div className="flex bg-white items-center h-10">
                    <div className="flex items-center rounded-l-3xl h-full border focus-within:border-blue-500">
                        <div className='px-4'><TfiSearch className='text-base' /></div>
                        <input type="text" className='w-96 focus:outline-none border-none' />
                        {/* <AiOutlineClose className='h-10 w-16 flex items-center justify-center bg-zinc-800' /> */}
                        <BsFillKeyboardFill className='text-xl cursor-pointer opacity-80 hover:opacity-100' />
                        <div className='rounded-3xl h-10 flex items-center p-3 hover:bg-gray-200 duration-200'>
                            <TfiClose className='text-lg cursor-pointer duration-200' />
                        </div >
                    </div>
                    <button className='bg-gray-100 border rounded-r-3xl flex items-center justify-center h-full px-5 hover:bg-gray-200 duration-200'>
                        <TfiSearch className='text-xl' />
                    </button>
                    <button className='rounded-3xl h-10 flex items-center p-3 ml-2 bg-gray-50 hover:bg-gray-200 duration-200'>
                        <HiMicrophone className='text-xl' />
                    </button>
                </div>

            </form>

            {/* User */}
            <div className='flex items-center gap-2 '>
                <div className='rounded-3xl h-10 flex items-center p-2 hover:bg-gray-200 duration-200'>
                    <BiVideoPlus className='cursor-pointer text-2xl' />
                </div>
                <div className='rounded-3xl h-10 flex items-center p-2 hover:bg-gray-200 duration-200'>
                    <BiBell className='cursor-pointer text-2xl' />
                </div>
                <div className='ml-2'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStSh28K6TE7a4N4qD8tyG4L-Nrt2k8E3X4qpHp43fE-A&s" className='w-8 h-8 rounded-3xl cursor-pointer' alt="" />
                </div>
            </div>
        </div >
    )
}

