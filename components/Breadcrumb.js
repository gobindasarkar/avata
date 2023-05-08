import React from 'react'
import HeroBannerBg from "../public/hero-banner-bg.jpg";
import Link from 'next/link';
const Breadcrumb = ({pageTitle}) => {
  return (
    <div>
      <div
      style={{
        backgroundImage: `url(${HeroBannerBg.src})`,
      }}
      className="bg-cover bg-center bg-no-repeat relative z-10 before:absolute before:w-full before:h-full before:content-[''] before:bg-black/70 before:left-0 before:top-0 before:-z-10 pb-[100px] lg:pb-[160px] pt-[160px] lg:pt-[280px]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center w-full lg:w-6/12 mx-auto">
            <h2 className="text-4xl lg:text-5xl font-semibold capitalize text-white mb-4">{pageTitle}</h2>
            <ul className='flex gap-x-7 text-base lg:text-2xl font-semibold text-white justify-center capitalize'>
              <li className='relative after:absolute after:content after:w-2.5 after:h-2.5 after:rounded-full after:bg-Pcolor after:-right-5 after:top-2/4 after:-translate-y-2/4 last:after:hidden'><Link href="/">Home</Link></li>
              <li className='relative after:absolute after:content after:w-2.5 after:h-2.5 after:rounded-full after:bg-Pcolor after:-right-5 after:top-2/4 after:-translate-y-2/4 last:after:hidden text-Pcolor'>{pageTitle}</li>
            </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Breadcrumb