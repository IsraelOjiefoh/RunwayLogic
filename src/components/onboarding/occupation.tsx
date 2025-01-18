"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useOccupation } from "../../../Context/OccupationContext";

function Occupation() {
  const { occupation, setOccupation } = useOccupation();
  const [inputOccupation, setInputOccupation] = useState("");
  const [filteredOccupations, setFilteredOccupations] = useState([]);
  const [customOccupation, setCustomOccupation] = useState(false);
  const navigate = useNavigate();

  const occupationsList = [
    "Fashion designer",
    "Fashion retailer",
    "Brand owner",
    "Dropshipper",
    "Clothing manufacturer",
    "Textile supplier",
    "Wholesale distributor",
    "Boutique owner",
    "E-commerce entrepreneur",
    "Apparel entrepreneur",
  ];

  // Handle occupation input change and filter occupations list
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputOccupation(value);

    // Filter list based on input
    const filtered = occupationsList.filter((occupation) =>
      occupation.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOccupations(filtered);

    // Check if user is typing a custom occupation
    if (!filtered.length && value.length > 0) {
      setCustomOccupation(true);
    } else {
      setCustomOccupation(false);
    }
  };

  // Set the occupation when an option is clicked or enter key is pressed
  const handleOccupationSelect = (occupation) => {
    setOccupation(occupation);
    navigate("/brand-name");
  };

  const handleNext = () => {
    if (occupation || customOccupation) {
      navigate("/brand-name");
    } else {
      alert("Please select or enter an occupation.");
    }
  };

  useEffect(() => {
    // Ensure occupation is set when it's selected or typed
    if (occupation) {
      setInputOccupation(occupation);
    }
  }, [occupation]);

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
          <h1 className="text-[32px] font-inter tight text-gray-300">
            Welcome aboard
          </h1>

          <div className="bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.05)] p-8">
            <div className="space-y-3">
              <h2 className="text-base">
                Which occupation describes you best?
              </h2>
              <p className="text-[13px] text-gray-500">
                Share your occupation, and we'll tailor solutions to fit your
                business needs.
              </p>
            </div>

            <div className="mt-8">
              <input
                type="text"
                placeholder="Type your occupation..."
                value={inputOccupation}
                onChange={handleInputChange}
                className="w-full h-10 px-3 bg-[#F9FAFB] border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors"
              />

              {/* Suggestions dropdown */}
              {inputOccupation &&
                !customOccupation &&
                filteredOccupations.length > 0 && (
                  <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-md max-h-40 overflow-y-auto">
                    {filteredOccupations.map((occupation, index) => (
                      <button
                        key={index}
                        onClick={() => handleOccupationSelect(occupation)}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        {occupation}
                      </button>
                    ))}
                  </div>
                )}

              {/* If user enters a custom occupation */}
              {customOccupation && (
                <div className="mt-4 text-sm text-gray-600">
                  <p>Your custom occupation: "{inputOccupation}"</p>
                </div>
              )}
            </div>

            <div className="flex justify-between mt-8">
              <span className="text-[13px] text-gray-500">Step 2 of 3</span>
              <button
                onClick={handleNext}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Occupation;
