import React, { useState } from "react";
import {
  FaBars,
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import {} from "react-icons/bs";
import { Link } from "react-router-dom";
const Navbar2 = () => {
  const [nav, showNav] = useState(false);
  const handleToggle = () => {
    showNav(!nav);
  };
  return (
    <div className="w-full bg-gray-700 min-h-[50px] flex justify-between items-center text-white ">
      <ul className="hidden md:flex px-4 ">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/#gallery">
          <li>Gallery</li>
        </Link>
        <li href="/#deals">Deals</li>
        <li href="/#contact">Contact</li>
      </ul>
      <div className="flex justify-between ">
        <FaFacebookF className="mx-4" />
        <FaTwitter className="mx-4" />
        <FaGooglePlusG className="mx-4" />
        <FaInstagram className="mx-4" />
      </div>
      <div className="md:hidden flex" onClick={handleToggle}>
        <FaBars size={20} className="mr-4 z-10" />
      </div>
      {/* mobile menu */}
      <div
        className={
          nav
            ? `overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col`
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className="h-full w-full text-center pt-12">
          <li className="text-2xl py-2" href="/">
            Home
          </li>
          <li className="text-2xl py-2" href="/#gallery">
            Gallery
          </li>
          <li className="text-2xl py-2" href="/#deals">
            Deals
          </li>
          <li className="text-2xl py-2" href="/#contact">
            Contact
          </li>
        </ul>
      </div>
      {/* mobile menu */}
    </div>
  );
};

export default Navbar2;
