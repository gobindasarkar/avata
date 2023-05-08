import React from "react";
import Logo from "../public/avata.png";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarker, FaPhoneAlt, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="py-10 lg:py-[80px]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div>
              <Link href="/">
                <Image
                  src={Logo}
                  alt="avata"
                  width={152}
                  height={40}
                  className="object-cover"
                />
              </Link>
              <p className="text-base text-Bcolor mt-5">
                Online Auction is where everyone goes to shop, sell, and give,
                while discovering variety and affordability.
              </p>
            </div>
            <div>
              <h3 className="text-[22px] font-medium text-Tcolor capitalize mb-6">
                Auction Categories
              </h3>
              <ul className="text-base text-Tcolor space-y-2">
                <li>
                  <Link href="/" className="transition-all hover:text-Pcolor">
                    Real Estate
                  </Link>
                </li>
                <li>
                  <Link href="/" className="transition-all hover:text-Pcolor">
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link href="/" className="transition-all hover:text-Pcolor">
                    Phones
                  </Link>
                </li>
                <li>
                  <Link href="/" className="transition-all hover:text-Pcolor">
                    Jewelry
                  </Link>
                </li>
                <li>
                  <Link href="/" className="transition-all hover:text-Pcolor">
                    Sport items
                  </Link>
                </li>
                <li>
                  <Link href="/" className="transition-all hover:text-Pcolor">
                    Art
                  </Link>
                </li>
                <li>
                  <Link href="/" className="transition-all hover:text-Pcolor">
                    Vehicle
                  </Link>
                </li>
                <li>
                  <Link href="/" className="transition-all hover:text-Pcolor">
                    Ancient
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[22px] font-medium text-Tcolor capitalize mb-6">
                We are Here to Help
              </h3>
              <ul className="text-base text-Tcolor space-y-2">
                <li>
                  <Link href="/" className="transition-all hover:text-Pcolor">
                    Your Account
                  </Link>
                </li>
                <li>
                  <Link href="/" className="transition-all hover:text-Pcolor">
                    Safe and Secure
                  </Link>
                </li>
                <li>
                  <Link href="/" className="transition-all hover:text-Pcolor">
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link href="/" className="transition-all hover:text-Pcolor">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/" className="transition-all hover:text-Pcolor">
                    Help & FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/" className="transition-all hover:text-Pcolor">
                    Admin Login
                  </Link>
                </li>
                <li>
                  <Link href="/" className="transition-all hover:text-Pcolor">
                    User Login
                  </Link>
                </li>
                <li>
                  <Link href="/" className="transition-all hover:text-Pcolor">
                    Seller Login
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[22px] font-medium text-Tcolor capitalize mb-6">
                Follow Us
              </h3>
              <ul className="space-y-3 text-base text-Bcolor">
                <li className="flex gap-x-3">
                  <FaPhoneAlt className="leading-none" />
                  <span className="flex-1">+88 017 1234 7612</span>
                </li>
                <li className="flex gap-x-3">
                  <FaEnvelope className="leading-none" />
                  <span className="flex-1">+Info@createuiuxlab.com</span>
                </li>
                <li className="flex gap-x-3">
                  <FaMapMarker className="leading-none" />
                  <span className="flex-1">28, Near Shamer Lake New York City, Nt–99 USA</span>
                </li>
              </ul>
              <ul className="flex gap-x-3 mt-10">
                <li><a target="_blank" href="#" className="flex items-center justify-center text-center w-11 h-11  rounded-[4px] bg-Pcolor/20 text-Tcolor transition-all hover:text-white hover:bg-Pcolor"><FaFacebookF /></a></li>
                <li><a target="_blank" href="#" className="flex items-center justify-center text-center w-11 h-11  rounded-[4px] bg-Pcolor/20 text-Tcolor transition-all hover:text-white hover:bg-Pcolor"><FaTwitter /></a></li>
                <li><a target="_blank" href="#" className="flex items-center justify-center text-center w-11 h-11  rounded-[4px] bg-Pcolor/20 text-Tcolor transition-all hover:text-white hover:bg-Pcolor"><FaLinkedinIn /></a></li>
                <li><a target="_blank" href="#" className="flex items-center justify-center text-center w-11 h-11  rounded-[4px] bg-Pcolor/20 text-Tcolor transition-all hover:text-white hover:bg-Pcolor"><FaInstagram /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#01050B] py-4 lg:py-7 text-center text-white text-base">
        <div className="container mx-auto px-4">
          <p>
            &copy; Copyright 2023 | By{" "}
            <a
              target="_blank"
              className="transition-all hover:text-Pcolor"
              href="#"
            >
              Avata
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
