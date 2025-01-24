import React,{ useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetApiUrl } from "../../utils";
import Logo from '../../assets/logo (2).png';
import Barchart from '../../assets/barchart.png';
import Settings from '../../assets/setting-2.png';

interface User {
  brandName: string;
}

const Homepage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const ApiUrl = GetApiUrl();
  const Navigate = useNavigate();
  const jwt = localStorage.getItem("authToken");

  useEffect(() => {
    fetch(`${ApiUrl}/user/dashboard`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          Navigate("/login");
        }
        return response.json();
      })
      .then((data) => {
        setUser(data.user);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-8">
              {/* Logo */}
              <img 
                src={Logo} 
                alt="RunwayLogic" 
                className="h-8 w-8"
              />
              
              {/* Search */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search products"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg bg-gray-100 text-sm"
                />
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              <a href="#" className="flex items-center text-gray-600 hover:text-gray-900">
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Homepage
              </a>
              <a href="#" className="flex items-center text-gray-600 hover:text-gray-900">
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Price suggestion
              </a>
              <a href="#" className="flex items-center text-gray-600 hover:text-gray-900">
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
                Marketing campaign
              </a>
              
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center">
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Upgrade plan
              </button>
              
              <button className="text-gray-600 hover:text-gray-900">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              
              <button className='text-black-1500 hover:text-gray-1300'>
                <img src={Settings} alt='settings' />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="px-4 sm:px-0">
          <h1 className="text-2xl font-semibold text-gray-900">
            Welcome to RunwayLogic,{user?.brandName}{' '}
            <span role="img" aria-label="rocket">🚀</span>
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            Add your logo, set a password, and choose a plan to get started.
          </p>
        </div>

        {/* Setup Cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {/* Upload Logo Card */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mb-4">
                <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Upload your brand logo</h3>
              <p className="mt-2 text-sm text-gray-500">
                Showcase your brand's unique identity
              </p>
              <button className="mt-4 w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors">
                Add logo
              </button>
            </div>
          </div>

          {/* Security Card */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mb-4">
                <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Strengthen your security</h3>
              <p className="mt-2 text-sm text-gray-500">
                Enhance your protection and secure your account
              </p>
              <button className="mt-4 w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                Add password
              </button>
            </div>
          </div>

          {/* Upgrade Plan Card */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mb-4">
                <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Upgrade your plan</h3>
              <p className="mt-2 text-sm text-gray-500">
                Get access to more features to elevate your brand
              </p>
              <button className="mt-4 w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                Choose pricing
              </button>
            </div>
          </div>
        </div>

        {/* Analytics Section */}
        <div className="mt-8">
          <div className="flex items-center justify-between">
          <div>
            <img src={Barchart} alt='Barchart' className='w-7 h-7'/>
          </div>
            <div>
              <h2 className="text-lg font-medium text-gray-900">Analytics</h2>
              <p className="mt-1 text-sm text-gray-500">
                Your overall product collection summery
              </p>
            </div>
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-3 pr-10 text-sm">
                <option>Last 30 days</option>
                <option>Last 7 days</option>
                <option>Last 90 days</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {/* Total Products */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <p className="text-sm font-medium text-gray-500 truncate">
                  TOTAL PRODUCTS
                </p>
                <p className="mt-2 text-3xl font-semibold text-gray-900">0</p>
              </div>
            </div>

            {/* Total Collection */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <p className="text-sm font-medium text-gray-500 truncate">
                  TOTAL COLLECTION
                </p>
                <p className="mt-2 text-3xl font-semibold text-gray-900">0</p>
              </div>
            </div>

            {/* Total Collection (Duplicate) */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <p className="text-sm font-medium text-gray-500 truncate">
                  TOTAL COLLECTION
                </p>
                <p className="mt-2 text-3xl font-semibold text-gray-900">0</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Homepage