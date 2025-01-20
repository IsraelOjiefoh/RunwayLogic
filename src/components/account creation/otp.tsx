import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEmail } from "../../../Context/EmailContext";
import { GetApiUrl } from "../../utils";

const OtpVerification: React.FC = () => {
  const { email } = useEmail();
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const Navigate = useNavigate();
  const ApiUrl = GetApiUrl();

  const handleChange = (value: string, index: number) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Automatically focus on the next input if a digit is entered
      if (value && index < otp.length - 1) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      const previousInput = document.getElementById(`otp-${index - 1}`);
      previousInput?.focus();
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const otpCode = otp.join(""); // Join OTP array into a string

    try {
      const response = await fetch(`${ApiUrl}/auth/verify-code`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          code: otpCode, // Send OTP code and email in the request body
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMsg(data.error);
      } else {
        Navigate("/occupation");
      }
    } catch (error) {
      console.error("Error submitting OTP:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    try {
      const response = await fetch(`${ApiUrl}/auth/resend-code`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        setErrorMsg(data.error); // Handle success response
      } else {
        setMessage(data.message || "A new code has been sent to your email");
      }
    } catch (error) {
      console.error("Error resending OTP:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-2">We’ve sent you a code</h2>
      <p className="text-gray-600 mb-6">
        Please enter the 6-digit code we sent to your email address
      </p>
      <div className="flex space-x-2 mb-6">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
      </div>
      {errorMsg && (
        <p className="mt-2 text-sm text-center text-red-600">{errorMsg}</p>
      )}
      {message && (
        <p className="mt-2 text-sm text-center text-green-600">{message}</p>
      )}
      <button
        className="w-full max-w-xs px-4 py-2 bg-gray-800 text-white font-medium text-lg rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={handleSubmit}
      >
        {isLoading ? "Verifying email..." : "Verify email"}
      </button>
      <p className="text-sm text-gray-600 mt-4">
        Didn’t get a code?{" "}
        <span
          onClick={handleResendCode}
          className="text-blue-500 cursor-pointer hover:underline"
        >
          Click here to get a new one
        </span>
      </p>
    </div>
  );
};

export default OtpVerification;
