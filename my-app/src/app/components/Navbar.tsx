"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { CiCircleAlert } from "react-icons/ci";
import { BsCartDash } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import Link from "next/link";






// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <div>
//       {/* Top Navbar - Blue Section */}
//       <div className="bg-blue-500 text-white text-center py-2">
//         <span><FaCheck /> Free shipping on all orders over $50</span>
//       </div>

//       {/* Middle Navbar - Logo and Cart Icon */}
//       <div className="bg-gray-100 py-4">
//         <div className="flex items-center justify-between max-w-7xl mx-auto px-4">
//           {/* Logo */}
//           <div>
//             <Image src="/Logo.png" alt="Logo" width={140} height={140} />
//           </div>

//           {/* Cart Icon */}
//           <div className="lg:hidden">
//             <Link href="/cart">
//               <Image src="/Cart.png" alt="Cart" width={130} height={130} />
//             </Link>
//           </div>

//           {/* Hamburger Icon for Mobile */}
//           <div className="lg:hidden" onClick={toggleMenu}>
//             <button className="text-white">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 className="w-8 h-8"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Navbar - Navigation Links */}
//       <div
//         className={"lg:bg-gray-800 text-white ${isOpen ? 'block' : 'hidden'} lg:block"}
//       >
//         <div className="max-w-7xl mx-auto px-4 py-2">
//           <ul className="flex flex-col lg:flex-row lg:space-x-8 justify-center">
//             <li className="py-2 lg:py-0">
//               <Link href="/">Home</Link>
//             </li>
//             <li className="py-2 lg:py-0">
//               <Link href="/products">Products</Link>
//             </li>
//             <li className="py-2 lg:py-0">
//               <Link href="/about">Shop</Link>
//             </li>
//             <li className="py-2 lg:py-0">
//               <Link href="/pages">Pages</Link>
//             </li>
//             <li className="py-2 lg:py-0">
//               <Link href="/shop">About</Link>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
//       {isOpen && (
//         <div className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden" onClick={() => setIsOpen(false)}></div>
//       )}
//     </div>
//   );
// };

// export default Navbar;



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="">
      {/* <!-- top bar --> */}
      <div className="md:px-56 hidden text-gray-200 md:flex justify-between items-center px-4 py-2 bg-[#272343]">
        <div className="text-sm flex">
          <FaCheck /> Free shipping on all orders over $50
        </div>
        <div className="flex items-center space-x-6 text-sm">
          <div className="hover:underline">Eng</div>
          <div className="hover:underline">FAQs</div>
          <div className="flex items-center space-x-1">
            <CiCircleAlert size={16} />
            <span className="hover:underline">Need Help</span>
          </div>
        </div>
      </div>

      {/* <!-- middle bar --> */}
      <div className="bg-gray-100 md:px-56 shadow-md border-b border-gray-200 px-4 py-3">
        <div className="container mx-auto flex justify-between items-center">
          {/* logo */}
          <div className="flex items-center space-x-2 size-10">
          <img src="/Logo1.png" alt="Comforty Logo"  />
            <span className="text-xl font-bold text-gray-700">Comforty</span>
          </div>

          {/* cart */}
          <div className="relative hidden md:flex items-center">
            <BsCartDash size={30} className="text-gray-700" />
            <span className="absolute top-0 right-0 bg-teal-600 text-white text-xs rounded-full px-1">
              4
            </span>
          </div>

          {/* mobile menu icon */}
          <div className="md:hidden flex items-center">
            <FaBars
              size={20}
              onClick={() => setMenuOpen(!menuOpen)}
              className="cursor-pointer text-gray-700"
            />
          </div>
        </div>
      </div>

      {/* <!-- section3 menu and contact --> */}
      <div className="hidden md:px-56 md:flex bg-white px-4 py-3">
        <div className="container mx-auto flex justify-between items-center">
          {/* Links */}
          <div className="flex space-x-6 font-thin text-gray-700">
          <ul className="flex flex-col lg:flex-row lg:space-x-8 justify-center">
            <li className="py-2 lg:py-0">
              <Link href="/">Home</Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link href="/Products">Products</Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link href="/about">Shop</Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link href="/pages">Pages</Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link href="/shop">About</Link>
            </li>
          </ul>
          </div>
          {/* contact */}
          <div className="text-gray-700">Contact: (808) 555-0111</div>
        </div>
      </div>

      {/* mobile menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white py-3 space-y-2 text-gray-700">
          <ul className="flex flex-col lg:flex-row lg:space-x-8 justify-center">
            <li className="py-2 lg:py-0">
              <Link href="/">Home</Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link href="/Products">Products</Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link href="/about">Shop</Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link href="/pages">Pages</Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link href="/shop">About</Link>
            </li>
          </ul>
        </div>

      )}
    </div>
  );
};

export default Navbar;