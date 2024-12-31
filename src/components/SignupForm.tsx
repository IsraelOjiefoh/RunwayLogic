'use client'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: ''
  })

  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // Navigate to the next page
    navigate('/next')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-green-50/50">
      <div className="w-full max-w-[640px] mx-4">
        {/* Progress bar */}
        <div className="flex gap-1 mb-16">
          <div className="h-0.5 flex-1 bg-orange-500" />
          <div className="h-0.5 flex-1 bg-gray-200" />
          <div className="h-0.5 flex-1 bg-gray-200" />
        </div>

        <div className="space-y-6">
          <h1 className="text-[32px] font-inter tight text-gray-300">Welcome aboard</h1>

          <div className="bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.05)] p-8">
            <div className="space-y-3">
              <h2 className="text-base">Firstly, please enter your full name</h2>
              <p className="text-[13px] text-gray-500">
                Provide your name to create a personalized profile
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="firstName" className="block text-[13px] text-gray-500">
                    First name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="e.g John"
                    className="w-full h-10 px-3 bg-[#F9FAFB] border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors"
                    value={formData.firstName}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      firstName: e.target.value
                    }))}
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="lastName" className="block text-[13px] text-gray-500">
                    Last name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="e.g Doe"
                    className="w-full h-10 px-3 bg-[#F9FAFB] border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors"
                    value={formData.lastName}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      lastName: e.target.value
                    }))}
                    required
                  />
                </div>
              </div>

             
              <div className="flex justify-between items-center mt-8">
              <span className="text-sm text-gray-400">Step 1 of 3</span>
                <button
                  type="submit"
                  className="group flex items-center text-sm text-gray-700 hover:text-gray-900 focus:outline-none"
                >
                  Next
                  <svg 
                    className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupForm

