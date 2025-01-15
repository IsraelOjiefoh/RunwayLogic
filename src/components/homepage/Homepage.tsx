import React from 'react';
import logo from "../../assets/logo (2).png";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineMegaphone } from "react-icons/hi2";
import { FaBoltLightning } from "react-icons/fa6";
import { LiaImage } from "react-icons/lia";
import { GoShieldLock } from "react-icons/go";
import { MdOutlineAddCard } from "react-icons/md";
import { RiBarChart2Fill } from "react-icons/ri";
import { CiCalendar } from "react-icons/ci";

const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="w-full h-full" />
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-1 focus-within:ring focus-within:ring-orange-300">
            <IoSearchOutline/>
            <input
              type="text"
              placeholder="Search products"
              className="ml-2 border-none focus:ring-0 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-sm text-gray-700 hover:text-gray-900">Homepage</button>
          <button className="text-sm text-gray-700 hover:text-gray-900">Price suggestions</button>
          <button className="text-sm text-gray-700 hover:text-gray-900 flex items-center">
            <HiOutlineMegaphone/>
            Marketing campaign
          </button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"> <FaBoltLightning/>Upgrade plan</button>
          <button className="relative">
           <IoIosNotificationsOutline/>
          </button>
          <div className="text-gray-700 font-bold text-lg">OD</div>
        </div>
      </header>

      {/* Welcome Section */}
      <main className="p-6 space-y-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800">
          Welcome to RunwayLogic, David 🚀
          </h2>
          <p className="text-sm text-gray-600">
            Add your logo, set a password, and choose a plan to get started.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <h3 className="text-gray-800 font-medium"> <LiaImage/> Upload your brand logo</h3>
            <p className="text-sm text-gray-600 mb-4">Showcase your brand's unique identity.</p>
            <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-600">Add logo</button>
          </div>
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <GoShieldLock/>
            <h3 className="text-gray-800 font-medium">Strengthen your security</h3>
            <p className="text-sm text-gray-600 mb-4">
              Enhance your protection and secure your account.
            </p>
            <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-600">
              Add password
            </button>
          </div>
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <MdOutlineAddCard/>
            <h3 className="text-gray-800 font-medium">Upgrade your plan</h3>
            <p className="text-sm text-gray-600 mb-4">Get access to all features to elevate your brand.</p>
            <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-600">
              Choose pricing
            </button>
          </div>
        </div>

         {/* Analytics Section */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <RiBarChart2Fill/>
              <h3 className="text-gray-800 font-medium">Analytics</h3>
            </div>
            <div className="flex items-center space-x-2">
             <CiCalendar/>
              <span className="text-sm text-gray-600">Last 30 days</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-6">Your overall product collection summary</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow rounded-lg p-6 text-center">
              <h4 className="text-2xl font-bold text-gray-800">0</h4>
              <p className="text-sm text-gray-600">Total Products</p>
            </div>
            <div className="bg-white shadow rounded-lg p-6 text-center">
              <h4 className="text-2xl font-bold text-gray-800">0</h4>
              <p className="text-sm text-gray-600">Total Collection</p>
            </div>
            <div className="bg-white shadow rounded-lg p-6 text-center">
              <h4 className="text-2xl font-bold text-gray-800">0</h4>
              <p className="text-sm text-gray-600">Total Collection</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Homepage;