import React, { useState } from "react";
import { User, Smartphone } from "lucide-react";
import AnimatedTitle from "./AnimatedTitle";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    affiliation: "",
    otp: "",
  });
  const [otpSent, setOtpSent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [generatedOtp, setGeneratedOtp] = useState<string | null>(null); // Store OTP from backend
  const [blacklist, setBlacklist] = useState<string[]>([
    "1234567890",
    "9876543210",
  ]); // Frontend blacklist array
  const [loading, setLoading] = useState(false); // Loading state for backend requests

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true when the request starts

    const { affiliation, ...data } = formData;

    if (affiliation === "vnit") {
      // Save VNIT user details
      const response = await fetch(
        "https://consonite-backend-1.onrender.com/api/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, affiliation: "vnit" }),
        }
      );
      const result = await response.json();
      setMessages([result.message]);

      setLoading(false); // Set loading state to false when the request is complete
      if (response.ok) setSubmitted(true);
    } else if (affiliation === "non_vnit") {
      // Send OTP
      const response = await fetch(
        "https://consonite-backend-1.onrender.com/api/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, affiliation: "non_vnit" }),
        }
      );
      const result = await response.json();
      setMessages([result.message]);

      setLoading(false); // Set loading state to false when the request is complete
      // Store OTP in frontend state
      if (response.ok) {
        setGeneratedOtp(result.otp); // Store generated OTP
        setOtpSent(true);
      }
    }
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true when the request starts

    const { otp, phone } = formData;

    // Check if the phone number is blacklisted
    if (blacklist.includes(phone)) {
      setMessages([
        "Error occured processing your email request please try again later. ",
      ]);
      setLoading(false); // Set loading state to false when the request is complete
      return;
    }

    // Compare the entered OTP with the backend-generated OTP
    // if (otp !== generatedOtp) {
    //   setMessages(["Invalid OTP. Please try again."]);
    //   setLoading(false); // Set loading state to false when the request is complete
    //   return;
    // }

    // If OTP is correct and phone is not blacklisted
    setMessages([
      "Thank you for registering with us to proceed further click on the link below.",
    ]);
    setSubmitted(true);
    setLoading(false); // Set loading state to false when the request is complete
  };

  return (
    <div
      id="Register"
      className="bg-black flex flex-col gap-3 items-center justify-center p-4 sm:p-6 md:p-8"
    >
      <div>
        <AnimatedTitle
          title="<b>F</b><b>o</b><b>r</b><b>m</b>"
          containerClass="mt-5 !text-white text-center z-30 bottom-20"
        />
      </div>

      <div className="bg-gray-900 rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-[90%] sm:max-w-md border border-gray-800">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
          Event Registration
        </h2>

        {/* Render messages if available */}
        {messages.length > 0 && (
          <div className="space-y-2 mb-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className="bg-gray-800 text-gray-200 text-sm sm:text-base p-2 rounded-md"
              >
                {message}
              </div>
            ))}
          </div>
        )}

        {!submitted && (
          <form
            onSubmit={otpSent ? handleVerifyOtp : handleSubmit}
            className="space-y-5"
          >
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="pl-10 w-full py-2.5 sm:py-3 px-4 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-white placeholder-gray-400"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full py-2.5 sm:py-3 px-4 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-white"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Mobile
              </label>
              <div className="relative">
                <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="pl-10 w-full py-2.5 sm:py-3 px-4 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-white placeholder-gray-400"
                  placeholder="Enter your mobile number"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Affiliation
              </label>
              <select
                name="affiliation"
                value={formData.affiliation}
                onChange={(e) =>
                  setFormData({ ...formData, affiliation: e.target.value })
                }
                className="w-full py-2.5 sm:py-3 px-4 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-white"
                required
              >
                <option value="">Select Affiliation</option>
                <option value="vnit">VNIT</option>
                <option value="non_vnit">Non-VNIT</option>
              </select>
            </div>

            {otpSent && formData.affiliation === "non_vnit" && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  OTP
                </label>
                <input
                  type="text"
                  name="otp"
                  value={formData.otp}
                  onChange={(e) =>
                    setFormData({ ...formData, otp: e.target.value })
                  }
                  className="w-full py-2.5 sm:py-3 px-4 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-white"
                  placeholder="Enter OTP sent to your email"
                  required
                />
              </div>
            )}

            <button
              type="submit"
              className={`w-full py-2.5 sm:py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg transition-colors text-sm sm:text-base ${
                loading ? "cursor-wait opacity-50" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Loading..." : otpSent ? "Verify OTP" : "Submit"}
            </button>
          </form>
        )}

        {submitted && (
          <div className="text-center">
            <button
              className="flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors text-sm sm:text-base"
              onClick={() => {
                // Handle the redirect or action for WhatsApp (e.g., link to WhatsApp or custom logic)
                window.open("https://wa.me/your-phone-number", "_blank");
              }}
            >
              {/* <span className="w-5 h-5">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/WhatsApp_icon.png/120px-WhatsApp_icon.png"
                  alt="WhatsApp Icon"
                />
              </span> */}
              <span>Contact us on WhatsApp</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
