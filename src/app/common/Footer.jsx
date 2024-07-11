"use client"
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-300 py-8 mt-auto w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/">
              <p className="flex items-center space-x-2">
                <Image
                  height={40}
                  width={40}
                  className="h-10 w-auto"
                  src="/img/logo.jpg"
                  alt="JMJ Files Logo"
                />
                <span className="text-white text-lg font-semibold">JMJ Films</span>
              </p>
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="https://facebook.com">
              <p target="_blank" aria-label="Facebook">
                <FaFacebook className="text-white hover:text-gray-400" size={24} />
              </p>
            </Link>
            <Link href="https://twitter.com">
              <p target="_blank" aria-label="Twitter">
                <FaTwitter className="text-white hover:text-gray-400" size={24} />
              </p>
            </Link>
            <Link href="https://instagram.com">
              <p target="_blank" aria-label="Instagram">
                <FaInstagram className="text-white hover:text-gray-400" size={24} />
              </p>
            </Link>
            <Link href="https://linkedin.com">
              <p target="_blank" aria-label="LinkedIn">
                <FaLinkedin className="text-white hover:text-gray-400" size={24} />
              </p>
            </Link>
          </div>
          <div className="mt-4 md:mt-0 text-sm text-gray-400">
            &copy; {currentYear} JMJ Films. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
