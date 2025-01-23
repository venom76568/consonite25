// import React, { useState } from 'react';
// import { User, CreditCard, BadgeCheck } from 'lucide-react';
// import AnimatedTitle from "./AnimatedTitle";

// const Register = () => {
//   const [affiliation, setAffiliation] = useState<'vnitian' | 'non-vnitian' | null>(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     identity: '',
//     payment: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div id='Register' className="bg-black flex flex-col gap-3 items-center justify-center p-4 sm:p-6 md:p-8">

//         <div>
//         <AnimatedTitle
//           title="<b>F</b><b>o</b><b>r</b><b>m</b>"
//           containerClass="mt-5 !text-white text-center z-30 bottom-20"
//         />
//       </div>

//       <div className="bg-gray-900 rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-[90%] sm:max-w-md border border-gray-800">
//         <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
//           Event Registration
//         </h2>
        
//         {/* Affiliation Selection */}
//         {!affiliation && (
//           <div className="space-y-4">
//             <p className="text-gray-400 text-center mb-6">Please select your affiliation:</p>
//             <button
//               onClick={() => setAffiliation('vnitian')}
//               className="w-full py-3 sm:py-4 px-4 sm:px-6 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2 text-base sm:text-lg"
//             >
//               <BadgeCheck className="w-5 h-5" />
//               From VNIT
//             </button>
//             <button
//               onClick={() => setAffiliation('non-vnitian')}
//               className="w-full py-3 sm:py-4 px-4 sm:px-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2 text-base sm:text-lg"
//             >
//               <User className="w-5 h-5" />
//               Non-VNITIAN
//             </button>
//           </div>
//         )}

//         {/* Message for Vnitians */}
//         {affiliation === 'vnitian' && (
//           <div className="text-center">
//             <div className="bg-gray-800 p-6 rounded-xl mb-6">
//               <BadgeCheck className="w-12 sm:w-16 h-12 sm:h-16 text-purple-500 mx-auto mb-4" />
//               <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
//                 Great! You're a Vnitian
//               </h3>
//               <p className="text-gray-300">
//                 Please collect your passes from the Canteen
//               </p>
//             </div>
//             <button
//               onClick={() => setAffiliation(null)}
//               className="text-purple-400 hover:text-purple-300 underline text-sm sm:text-base"
//             >
//               Go back
//             </button>
//           </div>
//         )}

//         {/* Form for Non-Vnitians */}
//         {affiliation === 'non-vnitian' && (
//           <form onSubmit={handleSubmit} className="space-y-5">
//             <div>
//               <label className="block text-sm font-medium text-gray-300 mb-2">
//                 Name
//               </label>
//               <div className="relative">
//                 <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   className="pl-10 w-full py-2.5 sm:py-3 px-4 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-white placeholder-gray-400"
//                   placeholder="Enter your full name"
//                   required
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-300 mb-2">
//                 Identity
//               </label>
//               <div className="relative">
//                 <BadgeCheck className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type="text"
//                   name="identity"
//                   value={formData.identity}
//                   onChange={(e) => setFormData({ ...formData, identity: e.target.value })}
//                   className="pl-10 w-full py-2.5 sm:py-3 px-4 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-white placeholder-gray-400"
//                   placeholder="Enter your ID number"
//                   required
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-300 mb-2">
//                 Payment Details
//               </label>
//               <div className="relative">
//                 <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type="text"
//                   name="payment"
//                   value={formData.payment}
//                   onChange={(e) => setFormData({ ...formData, payment: e.target.value })}
//                   className="pl-10 w-full py-2.5 sm:py-3 px-4 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-white placeholder-gray-400"
//                   placeholder="Enter payment details"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="flex gap-4 pt-2">
//               <button
//                 type="button"
//                 onClick={() => setAffiliation(null)}
//                 className="flex-1 py-2.5 sm:py-3 px-4 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors text-sm sm:text-base"
//               >
//                 Back
//               </button>
//               <button
//                 type="submit"
//                 className="flex-1 py-2.5 sm:py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg transition-colors text-sm sm:text-base"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from 'react';
import { User, CreditCard, BadgeCheck } from 'lucide-react';
import AnimatedTitle from "./AnimatedTitle";

const Register = () => {
  const [affiliation, setAffiliation] = useState<'vnitian' | 'non-vnitian' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    identity: '',
    payment: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handlePhonePePayment = async () => {
    const requestPayload = {
      paymentAmount: formData.payment, // Payment amount
      name: formData.name, // User name
      identity: formData.identity, // Identity
    };

    try {
      const response = await fetch('http://localhost:5000/payment/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestPayload),
      });

      const data = await response.json();

      if (response.ok) {
        // Assuming the backend returns the redirect URL in response
        const redirectUrl = data.redirectUrl;
        if (redirectUrl) {
          // Redirect user to the payment page
          window.location.href = redirectUrl;
        } else {
          alert('Payment initiation failed. Redirect URL not found.');
        }
      } else {
        alert('Payment Failed.');
        console.error('Payment Error:', data);
      }
    } catch (error) {
      alert('An error occurred during the payment process.');
      console.error('Error:', error);
    }
  };

  return (
    <div id='Register' className="bg-black flex flex-col gap-3 items-center justify-center p-4 sm:p-6 md:p-8">

      <div>
        <AnimatedTitle
          title="<b>A</b><b>r</b><b>t</b><b>i</b><b>s</b><b>t</b>"
          containerClass="mt-5 !text-white text-center z-30 bottom-20"
        />
      </div>

      <div className="bg-gray-900 rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-[90%] sm:max-w-md border border-gray-800">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
          Event Registration
        </h2>

        {/* Affiliation Selection */}
        {!affiliation && (
          <div className="space-y-4">
            <p className="text-gray-400 text-center mb-6">Please select your affiliation:</p>
            <button
              onClick={() => setAffiliation('vnitian')}
              className="w-full py-3 sm:py-4 px-4 sm:px-6 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2 text-base sm:text-lg"
            >
              <BadgeCheck className="w-5 h-5" />
              From VNIT
            </button>
            <button
              onClick={() => setAffiliation('non-vnitian')}
              className="w-full py-3 sm:py-4 px-4 sm:px-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2 text-base sm:text-lg"
            >
              <User className="w-5 h-5" />
              Non-VNITIAN
            </button>
          </div>
        )}

        {/* Message for Vnitians */}
        {affiliation === 'vnitian' && (
          <div className="text-center">
            <div className="bg-gray-800 p-6 rounded-xl mb-6">
              <BadgeCheck className="w-12 sm:w-16 h-12 sm:h-16 text-purple-500 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                Great! You're a Vnitian
              </h3>
              <p className="text-gray-300">
                Please collect your passes from the Canteen
              </p>
            </div>
            <button
              onClick={() => setAffiliation(null)}
              className="text-purple-400 hover:text-purple-300 underline text-sm sm:text-base"
            >
              Go back
            </button>
          </div>
        )}

        {/* Form for Non-Vnitians */}
        {affiliation === 'non-vnitian' && (
          <form onSubmit={handleSubmit} className="space-y-5">
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
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="pl-10 w-full py-2.5 sm:py-3 px-4 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-white placeholder-gray-400"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Identity
              </label>
              <div className="relative">
                <BadgeCheck className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="identity"
                  value={formData.identity}
                  onChange={(e) => setFormData({ ...formData, identity: e.target.value })}
                  className="pl-10 w-full py-2.5 sm:py-3 px-4 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-white placeholder-gray-400"
                  placeholder="Enter your ID number"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Payment Details
              </label>
              <div className="relative">
                <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="payment"
                  value={formData.payment}
                  onChange={(e) => setFormData({ ...formData, payment: e.target.value })}
                  className="pl-10 w-full py-2.5 sm:py-3 px-4 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-white placeholder-gray-400"
                  placeholder="Enter payment amount (INR)"
                  required
                />
              </div>

              {/* PhonePe Payment Button */}
              <button
                type="button"
                onClick={handlePhonePePayment}
                className="w-full mt-4 py-2.5 sm:py-3 px-4 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-lg transition-colors text-sm sm:text-base"
              >
                Pay with PhonePe
              </button>
            </div>

            <div className="flex gap-4 pt-2">
              <button
                type="button"
                onClick={() => setAffiliation(null)}
                className="flex-1 py-2.5 sm:py-3 px-4 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors text-sm sm:text-base"
              >
                Back
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 sm:py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg transition-colors text-sm sm:text-base"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
