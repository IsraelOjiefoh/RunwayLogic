"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetApiUrl } from "../../utils";
import { useEmail } from "../../../Context/EmailContext";
import logo from "../../assets/logo (2).png";
import googleIcon from "../../assets/google.png";
// import facebookIcon from "../../assets/facebook.png";
// import appleIcon from "../../assets/apple.png";
import Picture from "../../assets/pic.png";

const SignUp: React.FC = () => {
  const { email, setEmail } = useEmail();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();
  const ApiUrl = GetApiUrl();

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex for validation

    if (!email || !emailRegex.test(email)) {
      setErrorMsg("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`${ApiUrl}/auth/email-auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the request content type
        },
        body: JSON.stringify({ email }), // Convert the email to JSON format
      });

      const result = await response.json(); // Parse the JSON response
      if (response.status === 409) {
        navigate("/login");
        return;
      }
      if (!response.ok) {
        throw new Error(result.error || "Failed to send email");
      }

      navigate("/otp"); // Redirect after successful signup
    } catch (error: any) {
      console.error("Signup error:", error.message);
      setErrorMsg("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 gap-0">
      {/* Left Side - Sign Up Form */}
      <div className="p-6 lg:p-8 flex items-center justify-center">
        <div className="w-full max-w-md space-y-6">
          {/* Logo */}
          <div className="w-24 h-24">
            <img src={logo} alt="Logo" className="w-full h-full" />
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-gray-500">
                Optimize news and grow your brand with AI-driven insights
              </p>
            </div>

            <form onSubmit={handleEmailSignup} className="space-y-4" noValidate>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. johndoe@gmail.com"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              {errorMsg && (
                <p className="mt-2 text-sm text-center text-red-600">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 disabled:opacity-50"
              >
                {isLoading ? "Creating account..." : "Create my account"}
              </button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={() => (window.location.href = `${ApiUrl}/auth/google`)}
                className="flex items-center justify-center p-2 border rounded-md hover:bg-gray-50"
              >
                <img src={googleIcon} alt="Google" />
              </button>
              {/* <button
                onClick={() => handleSocialSignup("facebook")}
                className="flex items-center justify-center p-2 border rounded-md hover:bg-gray-50"
              >
                <img src={facebookIcon} alt="Facebook" />
              </button>
              <button
                onClick={() => handleSocialSignup("apple")}
                className="flex items-center justify-center p-2 border rounded-md hover:bg-gray-50"
              >
                <img src={appleIcon} alt="Apple" />
              </button> */}
            </div>

            <p className="text-xs text-center text-gray-500">
              By creating an account, I agree to the{" "}
              <a
                href="#"
                className="underline underline-offset-4 hover:text-gray-800"
              >
                Terms of service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="underline underline-offset-4 hover:text-gray-800"
              >
                Privacy policy
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Product Preview */}
      <div className="relative hidden lg:block">
        <div className="absolute inset-0">
          <img
            src={Picture}
            alt="Background"
            className="object-cover w-full h-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
