import React, { useEffect } from 'react';
import { trackSchedule, trackCompleteRegistration } from '../utils/facebookConversion';
import './LDSThankYou.css';

const LDSThankYou = () => {
  // Track successful booking on page load
  useEffect(() => {
    const trackBookingSuccess = async () => {
      try {
        // Track Schedule event
        await trackSchedule();

        // Track CompleteRegistration event
        await trackCompleteRegistration();

        console.log('Booking success events tracked');
      } catch (error) {
        console.error('Error tracking booking success:', error);
      }
    };

    trackBookingSuccess();
  }, []);
  return (
    <div className="bg-white min-h-screen pb-8 relative overflow-hidden px-[10px]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Main Content Container */}
        <div className="max-w-4xl mx-auto py-12 sm:py-20 text-center px-4">
          {/* Success Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32">
              <div className="absolute inset-0 rounded-full bg-green-100 animate-pulse-slow"></div>
              <div className="absolute inset-2 rounded-full bg-green-500 flex items-center justify-center">
                <svg
                  className="w-12 h-12 sm:w-16 sm:h-16 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Congratulations Text */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-800">
            Congratulations!
          </h1>

          {/* Success Message */}
          <div className="mb-8">
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-green-600 mb-2">
              Your Slot Has Been Booked Successfully!
            </p>
            <div className="flex justify-center mt-4">
              <img
                src="/assets/images/underline.png"
                alt=""
                className="h-1 w-48 sm:w-64"
              />
            </div>
          </div>

          {/* Thank You Message */}
          <div className="max-w-2xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
              Thank you for taking the first step towards scaling your business to
              <strong className="text-blue-700"> 10–15 Machines/Month</strong>!
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-8">
              You will receive a confirmation email shortly with all the details of your scheduled call.
            </p>

            {/* Back to Home Link */}
            <a
              href="/"
              className="inline-block text-blue-600 hover:text-blue-800 font-semibold text-base sm:text-lg underline transition"
            >
              Return to Home Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LDSThankYou;
