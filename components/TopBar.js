import React from 'react'
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaTwitter } from 'react-icons/fa'

const TopBar = () => {
  return (
    <div className='hidden sm:flex flex-wrap justify-between py-3'>
        <div>
            <ul className='flex items-center gap-x-4 gap-y-2 text-sm text-white'>
                <li className='flex items-center gap-x-2'><FaPhoneAlt /><span>+99 0123 456 0470</span></li>
                <li className='flex items-center gap-x-2'><FaEnvelope /><span>createuiuxlab@.com</span></li>
            </ul>
        </div>
        <div className="flex gap-x-3 items-end justify-end">
            <ul className='flex gap-x-3 text-base text-white'>
                <li><a className='transition-all hover:text-Pcolor' href="#"><FaFacebookF /></a></li>
                <li><a className='transition-all hover:text-Pcolor' href="#"><FaTwitter /></a></li>
                <li><a className='transition-all hover:text-Pcolor' href="#"><FaLinkedinIn /></a></li>
                <li><a className='transition-all hover:text-Pcolor' href="#"><FaInstagram /></a></li>
            </ul>
        </div>
    </div>
  )
}

export default TopBar