import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid'
import { DateRangePicker } from 'react-date-range'

import Logo from '../../assets/logo.png'

export default function Header ({ placeholder }) {
  const [searchInput, setSearchInput] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [noOfGuests, setNoOfGuests] = useState(1)

  const router = useRouter()

  const handleSelect = (ranges) => {
    setStartDate(ranges?.selection?.startDate)
    setEndDate(ranges?.selection?.endDate)
  }

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection'
  }
  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests
      }
    })
    setSearchInput('')
  }

  const resetInout = () => {
    setSearchInput('')
  }

  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white  shadow-md p-5 md:px-10'>
      {/* Left */}
      <div
        onClick={() => router.push('/')}
        className='relative flex w-24 items-center h-10 cursor-pointer my-auto'
      >
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
          placeholder={placeholder || 'Start your search'}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
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

      {
        searchInput && (
          <div className='flex flex-col col-span-3 mx-auto mt-10'>
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={['#FB5B61']}
              onChange={handleSelect}
            />
            <div className='flex items-center border-b mb-4'>
              <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
              <UsersIcon className='h-5' />
              <input
                type='number'
                className='w-12 pl-2 text-lg border border-cyan-500 rounded-md outline-none text-red-400'
                value={noOfGuests}
                min={1}
                max={100}
                onChange={(e) => setNoOfGuests(e.target.value)}
              />
            </div>
            <div className='flex'>
              <button
                onClick={resetInout}
                className='flex-grow cursor-pointer text-gray-500'
              >
                Cancel
              </button>
              <button
                onClick={search}
                className='flex-grow cursor-pointer text-red-500'
              >
                Search
              </button>
            </div>
          </div>
        )
      }
    </header>
  )
}
