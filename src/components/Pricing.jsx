import React from "react";
import underline from "../assets/images/underline.png";
import pricingTable from "../assets/images/pricing_table.png";
import shubhImage from "../assets/images/man.png";
import "./caveat.css";

const Pricing = () => {
  const credentials = [
    "Sold Over 62+ Crores in Sales for clients.",
    "TOP Players Trust Us With Their Marketing!",
    "Managed An Email List Of Over 640,000+ Names OVERALL...",
    "Inventor Of The Reverse Funnels",
    "The #1 Launch Expert Of India!",
  ];

  return (
    <div className="bg-[#FFF] py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Heading - Mobile: 2 lines with Caveat font, Desktop: 1 line */}
        <div className="text-center mb-6">
          {/* Mobile View - 2 lines with custom font */}
          <div className="md:hidden">
            <h2 
              style={{
                fontFamily: "'Caveat', sans-serif",
                fontWeight: 700,
                fontStyle: "normal",
                color: "rgb(15, 44, 128)",
                fontSize: "30px",
                lineHeight: "39px",
              }}
            >
              YES! Save My Spot For The 'High Ticket
            </h2>
            <h2 
              style={{
                fontFamily: "'Caveat', sans-serif",
                fontWeight: 700,
                fontStyle: "normal",
                color: "rgb(15, 44, 128)",
                fontSize: "30px",
                lineHeight: "39px",
              }}
            >
              Sprint!!'
            </h2>
          </div>

          {/* Desktop View - 1 line with custom font */}
          <div className="hidden md:block">
            <h2 
              style={{
                fontFamily: "'Caveat', sans-serif",
                fontWeight: 700,
                fontStyle: "normal",
                color: "rgb(15, 44, 128)",
                fontSize: "clamp(32px, 4vw, 38px)",
                lineHeight: "1.2",
              }}
              className="mb-3"
            >
              YES! Save My Spot For The 'High Ticket Sprint!!'
            </h2>
          </div>
        </div>

        {/* Underline decoration */}
        <div className="flex justify-center mb-8">
          <img src={underline} alt="" className="h-1 w-40" />
        </div>

        {/* Pricing Table Image */}
        <div className="flex justify-center mb-8">
          <img
            src={pricingTable}
            alt="Pricing Options"
            className="w-full max-w-3xl"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>

        {/* Price Today Section */}
        <div className="text-center mb-8">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Price Today:{" "}
            <span className="line-through text-gray-400">₹1499</span>{" "}
            <span className="line-through text-gray-400">₹999</span>{" "}
            <span className="text-green-600">₹99/-</span>
          </h3>
        </div>

        {/* CTA Button - Full width on mobile */}
        <div className="flex flex-col items-center gap-6 mt-12 mb-16">
          {/* Enroll Button with Badge */}
          <div className="relative w-full md:w-auto">
            <button className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-bold text-lg md:text-2xl px-8 md:px-12 py-4 rounded-3xl relative transition transform hover:scale-105 shadow-2xl overflow-hidden">
              <span className="relative z-10">
                ENROLL NOW @ ₹99 <span className="line-through">₹999</span>
              </span>
              <span className="absolute inset-0 -skew-x-12 animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
            </button>
            <span className="absolute -top-3 -right-3 bg-black text-white text-sm px-4 py-2 rounded-full font-bold animate-pulse z-20">
              10 Seats Left
            </span>
          </div>

          {/* Seats Left Text */}
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <p className="text-base font-semibold text-gray-700">
              Hurry! 28 Seats Of This Event Left
            </p>
          </div>
        </div>

        {/* Who Is Shubh Section - Updated gradient with two colors */}
        <div 
          className="rounded-3xl p-8 md:p-8 shadow-2xl max-w-6xl mx-auto"
          style={{
            background: "linear-gradient(to bottom, #070C27, #18214B)"
          }}
        >
          {/* Heading */}
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Who Is Shubh and Why Should You Care?
            </h2>
            {/* White Underline */}
            <div className="flex justify-center">
              <img
                src={underline}
                alt=""
                className="h-1 w-44"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
          </div>

          {/* Content Grid - Image on Left, Points on Right */}
          <div className="grid md:grid-cols-2 gap-10 items-start mt-10 relative">
            {/* Left Side - Image with Star */}
            <div className="flex justify-center relative">
              {/* Decorative Star - Updated color */}
              <div className="absolute -left-6 top-4 z-10">
                <svg width="40" height="46" viewBox="0 0 40 56" fill="none">
                  <path 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    d="M14 0H9.99999V23.1716L-6.38477 6.78678L-9.21319 9.61523L7.17157 26H-16V30H7.17154L-9.21319 46.3848L-6.38477 49.2131L9.99999 32.8283V56H14V32.8283L30.3848 49.2131L33.2131 46.3848L16.8283 30H40V26H16.8283L33.2131 9.6152L30.3848 6.78678L14 23.1715V0Z" 
                    fill="#423F83"
                  />
                </svg>
              </div>
              {/* Placeholder for man image */}
              <img
                src={shubhImage}
                alt="Shubh Jain"
                className="w-80 h-auto md:w-96 -mt-4 relative z-20"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>

            {/* Right Side - Credentials List with separators */}
            <div>
              {credentials.map((credential, index) => (
                <div key={index}>
                  <div className="flex gap-3 items-start py-4">
                    {/* Blue Circle Icon */}
                    <div
                      style={{
                        marginTop: "2px",
                        flexShrink: 0,
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        style={{ display: "block" }}
                      >
                        <circle cx="9" cy="9" r="9" fill="#102347" />
                        <circle cx="9" cy="9" r="4" fill="#2C82C9" />
                      </svg>
                    </div>
                    {/* Credential Text - Updated with Instrument Sans styles */}
                    <p
                      style={{
                        fontFamily: "'Instrument Sans', sans-serif",
                        fontWeight: 700,
                        fontStyle: "normal",
                        color: "rgb(255, 255, 255)",
                        fontSize: "15px",
                        lineHeight: "23px",
                        flex: 1,
                      }}
                    >
                      {credential}
                    </p>
                  </div>
                  {/* Separator Line - except for last item */}
                  {index < credentials.length - 1 && (
                    <div className="border-b border-gray-400 opacity-30"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;