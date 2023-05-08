import Link from 'next/link'
import React from 'react'

const PrimaryBtn = ({btnText, btnUrl}) => {
  return (
    <Link href={btnUrl} className='inline-flex h-11 min-w-[135px] bg-Pcolor text-white rounded-[4px] text-base font-medium capitalize justify-center items-center text-center transition-all hover:text-white hover:bg-Hcolor'>{btnText}</Link>
  )
}

export default PrimaryBtn