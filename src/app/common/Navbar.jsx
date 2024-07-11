"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import { MdCancel } from "react-icons/md";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "MyStory", href: "/MyStory" },
    { name: "WeddingPhotography", href: "/WeedingPhotography" },
    { name: "CreativePhotography", href: "/CreativePhotography" },
    
    { name: "MediaCoverage", href: "/MediaCoverage" },
    { name: "KindWords", href: "/KindWords" },
    
    { name: "WeddingServices", href: "/WeedingServices" },
    { name: "CreativeServices", href: "/CreativePhotography" },
    { name: "Blogs", href: "/Blogs" },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <nav
      className={`fixed bg-gradient-to-r from-gray-900 via-gray-800 to-black w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gradient-to-r from-gray-900 via-gray-800 to-black shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
            <Image
                    height={32}
                    width={32}
                    className="h-8 w-auto"
                    src="/img/logo.jpg"
                    alt="Logo"
                  />
            </Link>
          </div>
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                {" "}
                <span
                  className={` text-sm flex font-medium px-3 py-2 rounded-md transition-all duration-300 ease-in-out border-b-2 border-transparent ${
                    scrolled
                      ? "text-yellow-600 hover:text-yellow-800 hover:bg-yellow-100 hover:border-yellow-600"
                      : "text-yellow-400 hover:text-yellow-200 hover:bg-white hover:bg-opacity-20 hover:border-yellow-400"
                  } `}
                >
                  {" "}
                  {item.name}{" "}
                </span>{" "}
              </Link>
            ))}
          </div>
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <MdCancel className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <CiMenuBurger className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-r from-gray-900 via-gray-800 to-black shadow-lg">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
               <span
                  className={` text-sm flex font-medium px-3 py-2 rounded-md transition-all duration-300 ease-in-out border-b-2 border-transparent ${
                    scrolled
                      ? "text-yellow-600 hover:text-yellow-800 hover:bg-yellow-100 hover:border-yellow-600"
                      : "text-yellow-400 hover:text-yellow-200 hover:bg-white hover:bg-opacity-20 hover:border-yellow-400"
                  } `}
                >
                  
                  {item.name}
                </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
