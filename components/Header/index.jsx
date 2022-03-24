import Image from 'next/image'
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid'
import Logo from '../../assets/logo.png'

export default function Header () {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white  shadow-md p-5 md:px-10'>
      {/* Left */}
      <div className='relative flex w-24 items-center h-10 cursor-pointer my-auto'>
        <Image
          src={Logo}
          objectFit='contain'
          objectPosition='left'
          layout='fill'
          alt='AirBnb'
        />
      </div>

      {/* Middle */}
      <div className='flex items-center md:border-2  rounded-full pr-1 md:shadow-sm'>
        <input
          className='flex-grow appearance-none border-none text-gray-600 placeholder-gray-400 rounded-full w-full py-2 px-4 leading-tight focus:outline-none focus:bg-transparent focus:border-gray-500'
          type='text'
          placeholder='Start your search'
        />
        <SearchIcon
          className='hidden md:inline-flex h-8 w-8 bg-red-500 text-white rounded-full p-2 cursor-pointer mx-auto'
        />
      </div>

      {/* Right */}
      <div className='flex items-center space-x-4 justify-end'>
        <p className='hidden md:inline-flex cursor-pointer'>Become a host</p>
        <GlobeAltIcon className='w-6 h-6 text-red-600' />

        <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
          <MenuIcon className='w-6 h-6' />
          <UserCircleIcon className='w-6 h-6' />
        </div>

      </div>
    </header>
  )
}
