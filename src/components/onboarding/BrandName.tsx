"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEmail } from "../../../Context/EmailContext";
import { useOccupation } from "../../../Context/OccupationContext";
import { useUser } from "../../../Context/UserContext";
import { GetApiUrl } from "../../utils";

function BrandName() {
  const [brandName, setBrandName] = useState("");
  const { email } = useEmail();
  const { occupation } = useOccupation();
  const { setUser } = useUser();
  const [errorMsg, setErrorMsg] = useState("");

  const Navigate = useNavigate();
  const ApiUrl = GetApiUrl();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Define the maximum number of retries
    const maxRetries = 3;
    let attempts = 0;

    // A helper function to handle the retry logic
    const submitRequest = async () => {
      try {
        const response = await fetch(`${ApiUrl}/user/onboarding`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            occupation,
            brandName,
          }),
          credentials: "include", // This ensures the cookie is sent with the request
        });

        const data = await response.json();

        if (!response.ok) {
          setErrorMsg(data.error);
          throw new Error(data.error); // Throw an error to trigger retry
        } else {
          setUser(data.updatedUser);
          const jwt: string = data.token;
          localStorage.setItem("authToken", jwt);
          Navigate("/dashboard");
        }
      } catch (error) {
        attempts++;

        if (attempts < maxRetries) {
          console.log(`Retrying... Attempt ${attempts}`);
          // Retry after a small delay (e.g., 1 second)
          setTimeout(submitRequest, 1000);
        } else {
          console.error("Max retry attempts reached. Unable to submit.");
        }
      }
    };

    // Start the request
    submitRequest();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-green-50/50">
      <div className="w-full max-w-[640px] mx-4">
        {/* Progress bar */}
        <div className="flex gap-1 mb-16">
          <div className="h-0.5 flex-1 bg-gray-200" />
          <div className="h-0.5 flex-1 bg-orange-500" />
          <div className="h-0.5 flex-1 bg-gray-200" />
        </div>

        <div className="space-y-6">
          <h1 className="text-[32px] font-inter tight text-gray-300">
            Welcome aboard
          </h1>

          <div className="bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.05)] p-8">
            <div className="space-y-3">
              <h2 className="text-base">Enter your business name</h2>
              <p className="text-[13px] text-gray-500">
                Provide the name of your brand to create a personalized profile
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8">
              <div className="space-y-1.5">
                <label
                  htmlFor="brandName"
                  className="block text-[13px] text-gray-500"
                >
                  Brand name *
                </label>
                <input
                  type="text"
                  id="brandName"
                  placeholder="e.g Nike"
                  className="w-full h-10 px-3 bg-[#F9FAFB] border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  required
                />
              </div>
              {errorMsg && (
                <p className="mt-2 text-sm text-center text-red-600">
                  {errorMsg}
                </p>
              )}
              <div className="flex justify-between mt-8">
                <span className="text-[13px] text-gray-500">Step 2 of 3</span>
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
  );
}

export default BrandName;
