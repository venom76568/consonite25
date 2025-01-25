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
  const [generatedOtp, setGeneratedOtp] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "1234567890"; // Replace with the actual WhatsApp number
    const message = `Hi, I'm ${formData.name}. I've just registered!`; // Dynamic message
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { affiliation, ...data } = formData;

    if (affiliation === "vnit") {
      const response = await fetch(
        "https://consonite-backend.onrender.com/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, affiliation: "vnit" }),
        }
      );
      const result = await response.json();
      setMessages([result.message]);
      setLoading(false);
      if (response.ok) setSubmitted(true);
    } else if (affiliation === "non_vnit") {
      const response = await fetch(
        "https://consonite-backend.onrender.com/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, affiliation: "non_vnit" }),
        }
      );
      const result = await response.json();
      setMessages([result.message]);
      setLoading(false);
      if (response.ok) {
        setGeneratedOtp(result.otp);
        setOtpSent(true);
      }
    }
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // if (formData.otp !== generatedOtp) {
    //   setMessages(["Invalid OTP. Please try again."]);
    //   setLoading(false);
    //   return;
    // }

    setMessages([
      "Thank you for registering! For further details send `hi` to us on Whatsapp below..",
    ]);
    setSubmitted(true);
    setLoading(false);
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
              onClick={handleWhatsAppRedirect}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
