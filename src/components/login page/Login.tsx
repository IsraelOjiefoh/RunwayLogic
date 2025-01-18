import React from 'react';
import Logo from '../../assets/logo (2).png';
import Picture from '../../assets/pic.png';

const Login: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="flex-1 p-8 lg:p-12">
        {/* Logo */}
        <div className="mb-12">
          <img 
            src={Logo}
            alt="Company Logo" 
            className="w-8 h-8"
          />
        </div>

        {/* Login Form */}
        <div className="max-w-md">
          <h1 className="text-[42px] font-medium text-gray-900 mb-2">
            Welcome back
          </h1>
          <p className="text-gray-600 mb-8">
            Are you a new user?{' '}
            <a href="/signup" className="text-gray-900 hover:underline">
              Create an account
            </a>
          </p>

          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="e.g Johndoe@gmail.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Login
            </button>
          </form>

          <div className="mt-6">
            <a 
              href="/password-login" 
              className="inline-flex items-center text-gray-600 hover:text-gray-900"
            >
              Login with password
              <svg 
                className="ml-2 w-4 h-4" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M5 12h14m-7-7l7 7-7 7"/>
              </svg>
            </a>
          </div>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <button className="flex justify-center items-center py-2.5 border rounded-lg hover:bg-gray-50">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
                  />
                  <path
                    fill="#34A853"
                    d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09c1.97 3.92 6.02 6.62 10.71 6.62z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29v-3.09h-3.98c-.8 1.6-1.27 3.41-1.27 5.38 0 1.97.47 3.78 1.27 5.38l3.98-3.09z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42c-2.07-1.94-4.78-3.13-8.02-3.13-4.69 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"
                  />
                </svg>
              </button>

              <button className="flex justify-center items-center py-2.5 border rounded-lg hover:bg-gray-50">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>

              <button className="flex justify-center items-center py-2.5 border rounded-lg hover:bg-gray-50">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="black">
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.78 1.18-.19 2.31-.89 3.51-.84 1.54.07 2.7.6 3.44 1.51-3.03 1.81-2.52 5.87.22 7.22-.65 1.29-1.51 2.58-2.25 4.3zm-2.82-16.1c-.11 1.5-1.37 2.76-2.9 2.96-.18-1.68 1.17-2.84 2.9-2.96z"/>
                </svg>
              </button>
            </div>
          </div>

          <p className="mt-8 text-sm text-gray-600">
            By creating an account, I agree to the{' '}
            <a href="/terms" className="text-gray-900 hover:underline">
              Terms of service
            </a>
            {' '}and{' '}
            <a href="/privacy" className="text-gray-900 hover:underline">
              Privacy policy
            </a>
          </p>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="hidden lg:block lg:w-1/2">
        <div className="h-full w-full bg-cover bg-cover">
          <img src={Picture} alt='pic' className="object-cover w-full h-fit" />
        </div>
      </div>
    </div>
  )
}

export default Login