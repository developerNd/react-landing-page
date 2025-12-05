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
    <div className="bg-[#FFF] py-10 px-4 relative overflow-hidden">
      {/* Decorative Star - Right Side (Golden) - Top */}
      <div className="absolute -right-1 top-24 z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="90"
          viewBox="0 0 52 90"
          fill="none"
        >
          <mask
            id="mask0_pricing_right"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="90"
            height="90"
          >
            <path d="M90 0H0V90H90V0Z" fill="white"></path>
          </mask>
          <g mask="url(#mask0_pricing_right)">
            <path
              d="M45.1143 90C43.6949 90 42.4952 88.9722 42.1515 87.5952C41.0558 83.2064 38.9585 78.5389 35.8594 73.5939C32.1875 67.6562 26.9531 62.1486 20.1563 57.0703C14.2447 52.6023 8.33315 49.5554 2.42162 47.93C1.02152 47.5452 0 46.3036 0 44.8516C0 43.428 0.982228 42.2008 2.35113 41.8099C8.14703 40.1551 13.7305 37.4684 19.1016 33.75C25.2734 29.4531 30.4297 24.2969 34.5703 18.2812C38.2333 12.9224 40.7478 7.62246 42.1138 2.38143C42.4717 1.00843 43.6804 0 45.0994 0C46.534 0 47.7513 1.03076 48.1005 2.42248C48.8889 5.56443 50.121 8.7804 51.7968 12.0703C53.9064 16.1328 56.6014 20.039 59.8828 23.7891C63.2421 27.4609 66.9924 30.7813 71.1329 33.75C76.5436 37.5854 82.044 40.28 87.6348 41.8338C89.0064 42.2149 90 43.436 90 44.8593C90 46.3041 88.9762 47.5353 87.583 47.9174C84.0393 48.8889 80.3916 50.4558 76.6408 52.6171C72.1094 55.2735 67.8906 58.4374 63.9841 62.1094C60.0781 65.7031 56.875 69.4921 54.3748 73.4764C51.2698 78.4319 49.1701 83.1353 48.0766 87.5875C47.7373 88.9686 46.5358 90 45.1143 90Z"
              fill="url(#paint0_linear_pricing_right)"
            ></path>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_pricing_right"
              x1="12.375"
              y1="8.55"
              x2="67.05"
              y2="78.525"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD9A0"></stop>
              <stop offset="1" stopColor="#FFF5F1"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Decorative Star - Left Side (Purple) - Top */}
      <div className="absolute left-0 top-0 z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="56"
          viewBox="0 0 40 56"
          fill="none"
        >
          <g opacity="0.5" clipPath="url(#clip0_pricing_left)">
            <mask
              id="mask0_pricing_left"
              style={{ maskType: "luminance" }}
              maskUnits="userSpaceOnUse"
              x="-16"
              y="0"
              width="56"
              height="56"
            >
              <path d="M40 0H-16V56H40V0Z" fill="white"></path>
            </mask>
            <g mask="url(#mask0_pricing_left)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 0H9.99999V23.1716L-6.38477 6.78678L-9.21319 9.61523L7.17157 26H-16V30H7.17154L-9.21319 46.3848L-6.38477 49.2131L9.99999 32.8283V56H14V32.8283L30.3848 49.2131L33.2131 46.3848L16.8283 30H40V26H16.8283L33.2131 9.6152L30.3848 6.78678L14 23.1715V0Z"
                fill="url(#paint0_linear_pricing_left)"
              ></path>
            </g>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_pricing_left"
              x1="-10.26"
              y1="4.48"
              x2="12"
              y2="56"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8957BD"></stop>
              <stop offset="1" stopColor="#667EEA"></stop>
            </linearGradient>
            <clipPath id="clip0_pricing_left">
              <rect
                width="56"
                height="56"
                fill="white"
                transform="translate(-16)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
        <div className="flex flex-col items-center gap-6 mt-12 mb-20 relative">
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
          <div className="flex items-center gap-2 mt-4">
            <svg
              className="w-5 h-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <pathy
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
          className="rounded-3xl p-8 md:p-8 shadow-2xl max-w-6xl mx-auto relative z-10"
          style={{
            background: "linear-gradient(to bottom, #070C27, #18214B)",
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

      {/* Decorative Arc - Right Side (Purple) - MOVED OUTSIDE max-w-7xl container */}
      <div
        className="
    absolute right-0 z-0
    top-[37%] md:top-[47%]
  "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="31"
          viewBox="0 0 54 34"
          fill="none"
          className="md:w-[72px] md:h-[45px]"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M71.6616 32.405C71.8578 34.3836 70.227 36 68.2387 36H55.1887C53.2004 36 51.6312 34.3667 51.1823 32.4299C49.5652 25.4513 43.3094 20.25 35.8388 20.25C28.3683 20.25 22.1125 25.4513 20.4952 32.4299C20.0463 34.3667 18.477 36 16.4888 36H3.43878C1.45056 36 -0.180128 34.3836 0.0160323 32.405C1.81991 14.2107 17.1698 0 35.8388 0C54.5076 0 69.8576 14.2107 71.6616 32.405Z"
            fill="url(#paint0_linear_pricing_bottom)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_pricing_bottom"
              x1="56.4462"
              y1="5.76"
              x2="40.2271"
              y2="38.6215"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0509862" stopColor="#D0BCE5" />
              <stop offset="1" stopColor="#E7DDF2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Pricing;
