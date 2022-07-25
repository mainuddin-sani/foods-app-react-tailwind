import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineClose,
  AiFillTag
} from "react-icons/ai";
import {TbTruckDelivery} from 'react-icons/tb';
import {MdFavorite, MdHelp} from 'react-icons/md';
import {FaWallet, FaUserFriends} from 'react-icons/fa';
import {BsFillSaveFill} from 'react-icons/bs';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    console.log(nav);
  return (
    <div className="max-w-[1640] max-auto flex items-center justify-between p-4">
      {/* left side */}
      <div className="flex items-center">
        <div className="cursor-pointer" onClick={()=>setNav(!nav)}>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      {/* search input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch />
        <input
          type="text"
          className="bg-transparent p-2 focus:outline-none"
          placeholder="Search foods"
        />
      </div>
      {/* cart button */}
      <button className="md:flex bg-black text-white py-2 rounded-full items-center hidden">
        <AiOutlineShoppingCart className="mr-2" size={20} /> Cart
      </button>
      {/* mobile menu */}
      <div  className={nav ? 'bg-black/60 fixed z-10 h-screen top-0 left-0 w-full': ''}></div>
      {/* side drawer menu */}
      <div className={nav ? 'fixed w-[300px] h-screen z-10 left-0 top-0 bg-white duration-300': 'fixed w-[300px] h-screen z-10 left-[-100%] top-0 bg-white'}>
            <AiOutlineClose onClick={()=>setNav(!nav)} size={30} className="absolute right-4 top-4 cursor-pointer" />
            <h2 className="text-2xl p-4">Best <span className="font-bold">Eats</span></h2>
            <nav>
                <ul className="flex flex-col p-4 text-gray-800">
                    <li className="text-xl py-4 flex items-center">
                        <TbTruckDelivery className="mr-4" size={20} /> Orders
                    </li>
                    <li className="text-xl py-4 flex items-center">
                        <MdFavorite className="mr-4" size={20} /> Favorites
                    </li>
                    <li className="text-xl py-4 flex items-center">
                        <FaWallet className="mr-4" size={20} /> Wallet
                    </li>
                    <li className="text-xl py-4 flex items-center">
                        <MdHelp className="mr-4" size={20} /> Help
                    </li>
                    <li className="text-xl py-4 flex items-center">
                        <AiFillTag className="mr-4" size={20} /> Promotions
                    </li>
                    <li className="text-xl py-4 flex items-center">
                        <BsFillSaveFill className="mr-4" size={20} /> Best Ones
                    </li>
                    <li className="text-xl py-4 flex items-center">
                        <FaUserFriends className="mr-4" size={20} /> Invite Friends
                    </li>
                </ul>
            </nav>
      </div>
    </div>
    
  );
};

export default Navbar;
