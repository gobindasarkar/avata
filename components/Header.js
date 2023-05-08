import React from 'react'
import TopBar from './TopBar'
import NaveBar from './NaveBar'

const Header = () => {
  return (
    <header className='absolute w-full left-0 top-0 right-0 z-30 pt-3 sm:pt-0'>
      <div className="container mx-auto px-4">
        <TopBar /> 
        <NaveBar />
      </div>
    </header>
  )
}

export default Header