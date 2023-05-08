import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../public/avata.png";
import { useRouter } from "next/router";
import { FaBars, FaSearch, FaUserAlt } from "react-icons/fa";
const NaveBar = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="flex flex-wrap items-center justify-between py-3 md:py-5 rounded-[10px] bg-white px-4 lg:px-7">
      <div className="order-1">
        <Link className="inline-block" href="/">
          <Image
            className="object-cover"
            width={100}
            height={40}
            src={Logo}
            alt="avata"
          />
        </Link>
      </div>
      <div className={`order-3 md:order-2 w-full md:w-auto ${isActive ? "block" : "hidden md:block"}`}>
        <nav>
          <ul className="flex flex-col md:flex-row gap-y-3 mt-5 md:mt-0 gap-x-5 lg:gap-x-8 text-base font-medium text-Tcolor">
            <li>
              <Link
                className={`relative before:absolute  before:w-full before:h-[2px] before:bg-Pcolor before:bottom-0 before:left-0 before:opacity-0 hover:before:opacity-100 transition-all before:transition-all before:scale-x-0 hover:before:scale-x-100 hover:text-Pcolor ${
                  router.pathname == "/"
                    ? "before:scale-x-100 before:opacity-100 text-Pcolor"
                    : ""
                }`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`relative before:absolute  before:w-full before:h-[2px] before:bg-Pcolor before:bottom-0 before:left-0 before:opacity-0 hover:before:opacity-100 transition-all before:transition-all before:scale-x-0 hover:before:scale-x-100 hover:text-Pcolor ${
                  router.pathname == "/auctions"
                    ? "before:scale-x-100 before:opacity-100 text-Pcolor"
                    : ""
                }`}
                href="/auctions"
              >
                Auctions
              </Link>
            </li>
            <li>
              <Link
                className={`relative before:absolute  before:w-full before:h-[2px] before:bg-Pcolor before:bottom-0 before:left-0 before:opacity-0 hover:before:opacity-100 transition-all before:transition-all before:scale-x-0 hover:before:scale-x-100 hover:text-Pcolor ${
                  router.pathname == "/blog"
                    ? "before:scale-x-100 before:opacity-100 text-Pcolor"
                    : ""
                }`}
                href="/blog"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className={`relative before:absolute  before:w-full before:h-[2px] before:bg-Pcolor before:bottom-0 before:left-0 before:opacity-0 hover:before:opacity-100 transition-all before:transition-all before:scale-x-0 hover:before:scale-x-100 hover:text-Pcolor ${
                  router.pathname == "/contact"
                    ? "before:scale-x-100 before:opacity-100 text-Pcolor"
                    : ""
                }`}
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="order-2 md:order-3">
        <ul className="flex items-center gap-x-3 sm:gap-x-5 text-base sm:text-lg text-Tcolor">
          <li>
            <Link className="transition-all hover:text-Pcolor" href="/"><FaSearch /></Link>
          </li>
          <li>
            <Link className="transition-all hover:text-Pcolor" href="/"><FaUserAlt /></Link>
          </li>
          <li className="block md:hidden leading-[0]">
            <button className="p-0 transition-all hover:text-Pcolor" onClick={handleToggle}><FaBars /></button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NaveBar;
