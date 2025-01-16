"use client";

import { useNavigate } from "react-router-dom";
import { useOccupation } from "../../../Context/OccupationContext";

function Occupation() {
  const { occupation, setOccupation } = useOccupation();

  const Navigate = useNavigate();

  const handleNext = () => {
    if (occupation == "Fashion designer" || occupation == "Brand owner") {
      Navigate("/brand-name");
    } else if (occupation == "dropshipper") {
      Navigate("/dropshipper-name");
    }
  };

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
                Which option describes your occupation better?
              </h2>
              <p className="text-[13px] text-gray-500">
                Share your occupation, and we'll tailor solutions to fit your
                business needs.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Dropshipper Option */}
              <button
                onClick={() => setOccupation("dropshipper")}
                className="relative rounded-2xl p-4 text-center hover:bg-gray-50 transition-colors"
              >
                <div
                  className={`aspect-square mb-4 rounded-2xl overflow-hidden
                  ${
                    occupation === "dropshipper"
                      ? "ring-2 ring-orange-500"
                      : "ring-1 ring-gray-100"
                  }`}
                >
                  <img
                    src="./image 3.png?height=200&width=200"
                    alt="Dropshipper"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[13px] text-gray-500">Dropshipper</span>
              </button>

              {/* Fashion Designer Option */}
              <button
                onClick={() => setOccupation("Fashion designer")}
                className="relative rounded-2xl p-4 text-center hover:bg-gray-50 transition-colors"
              >
                <div
                  className={`aspect-square mb-4 rounded-2xl overflow-hidden
                  ${
                    occupation === "Fashion designer"
                      ? "ring-2 ring-orange-500"
                      : "ring-1 ring-gray-100"
                  }`}
                >
                  <img
                    src="./image.png?height=200&width=200"
                    alt="Fashion designer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[13px] text-gray-500">
                  Fashion designer
                </span>
              </button>

              {/* Brand Owner Option */}
              <button
                onClick={() => setOccupation("Brand owner")}
                className="relative rounded-2xl p-4 text-center hover:bg-gray-50 transition-colors"
              >
                <div
                  className={`aspect-square mb-4 rounded-2xl overflow-hidden
                  ${
                    occupation === "Brand owner"
                      ? "ring-2 ring-orange-500"
                      : "ring-1 ring-gray-100"
                  }`}
                >
                  <img
                    src="./image (1).png?height=200&width=200"
                    alt="Brand owner"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[13px] text-gray-500">Brand owner</span>
              </button>
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
