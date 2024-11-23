// components/Navbar.js
import { getContextData } from '@/store/contextData';
import Link from 'next/link';
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';

export default function Navbar() {
  const {cartData} = getContextData()
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Link href="/">
          <span className="text-2xl font-bold text-gray-800 cursor-pointer">E-Shop</span>
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link href="/products">
            <span className="text-gray-600 hover:text-gray-900 cursor-pointer">Products</span>
          </Link>
          <Link href="/about">
            <span className="text-gray-600 hover:text-gray-900 cursor-pointer">About</span>
          </Link>
          <Link href="/contact">
            <span className="text-gray-600 hover:text-gray-900 cursor-pointer">Contact</span>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <FiSearch className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer" />

          <div className="relative cursor-pointer">
            <Link href="/cartPage">
              <FiShoppingCart className="w-5 h-5 text-gray-600 hover:text-gray-900" />
            </Link>
            {cartData.length > 0 &&  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartData.length}
            </span>}
          </div>

          <Link href="/profile">
            <FiUser className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
