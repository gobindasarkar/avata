import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const SingleCategoryItem = ({CategoryData}) => {
  const {CategoryThumb,CategoryTitle,Categoryurl} = CategoryData;
  return (
    <div className='relative mx-auto w-[180px] lg:w-[220px] xl:w-[255px] h-[180px] lg:h-[220px] xl:h-[255px] rounded-full border-2 border-Pcolor overflow-hidden group'>
      <Image className='w-[180px] lg:w-[220px] xl:w-[255px] h-[180px] lg:h-[220px] xl:h-[255px] rounded-full transition-all group-hover:scale-105' src={CategoryThumb} alt="catagory Name" />
      <Link className='absolute left-0 top-0 w-full h-full bg-black/80 rounded-full flex justify-center items-center text-center text-lg lg:text-2xl font-medium capitalize text-white p-5 transition-all opacity-0 invisible group-hover:opacity-100 group-hover:visible' href={Categoryurl}>{CategoryTitle}</Link>
    </div>
  )
}

export default SingleCategoryItem