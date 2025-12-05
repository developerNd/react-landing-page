import React from "react";
import day1Image from "../assets/images/day1.png";
import day2Image from "../assets/images/day2.png";
import day3Image from "../assets/images/day3.png";
import underline from "../assets/images/underline.png";

const Agenda = () => {
  const days = [
    {
      id: 1,
      dayNumber: "DAY 01",
      title: "Build",
      image: day1Image,
      points: [
        "EXACT 4-Step High-Ticket Offer Creation Formula that only TOP 1% coaches know.",
        'An ancient offer creation "law" that 99.8% people MISS out, which stops them to make more sales.',
        "An old-school offer strategy that crushes Cold Audience and makes it almost neurologically impossible for people to not consider buying your offer.",
        "Once you know this - creating million dollar offers & campaigns will be cake-walk!",
        "And so much more...",
      ],
    },
    {
      id: 2,
      dayNumber: "DAY 02",
      title: "Sell - 10 Payday Custom Roadmap",
      image: day2Image,
      points: [
        'Your "Reverse-math" to your NEXT 10 lakh payday.',
        "<strong>7-Figure Launch Checklist</strong> used behind every BIG launch.",
        "How to get your dream <strong>high-ticket clients</strong> lining up to work with you before you even pitch them.",
        "Battle-tested <strong>5 Hour Engine</strong> that makes you the most money and sales in a shorter duration.",
        "The TOP SECRET *** technique to CRUSH your launch the very first time.",
      ],
    },
    {
      id: 3,
      dayNumber: "DAY 03",
      title: "Scale Big",
      image: day3Image,
      points: [
        'My 40 crores "Signature-Talk" Framework.',
        "This #1 thing that absolutely EXTREME FEW PEOPLE do, but pulls in 60% more sales.",
        "How do I create presentations that are guaranteed to CRUSH.",
        "How to persuade the whole crowd without selling or talking about your product.",
        "The #1 strategy you can use to make any offer SELL AT ANY PRICE.",
        "How to SCALE the presentation easily.",
      ],
    },
  ];

  return (
    <div className="bg-[#FFFFFF] py-12 p-[10px] relative overflow-hidden">
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
            id="mask0_agenda_right"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="90"
            height="90"
          >
            <path d="M90 0H0V90H90V0Z" fill="white"></path>
          </mask>
          <g mask="url(#mask0_agenda_right)">
            <path
              d="M45.1143 90C43.6949 90 42.4952 88.9722 42.1515 87.5952C41.0558 83.2064 38.9585 78.5389 35.8594 73.5939C32.1875 67.6562 26.9531 62.1486 20.1563 57.0703C14.2447 52.6023 8.33315 49.5554 2.42162 47.93C1.02152 47.5452 0 46.3036 0 44.8516C0 43.428 0.982228 42.2008 2.35113 41.8099C8.14703 40.1551 13.7305 37.4684 19.1016 33.75C25.2734 29.4531 30.4297 24.2969 34.5703 18.2812C38.2333 12.9224 40.7478 7.62246 42.1138 2.38143C42.4717 1.00843 43.6804 0 45.0994 0C46.534 0 47.7513 1.03076 48.1005 2.42248C48.8889 5.56443 50.121 8.7804 51.7968 12.0703C53.9064 16.1328 56.6014 20.039 59.8828 23.7891C63.2421 27.4609 66.9924 30.7813 71.1329 33.75C76.5436 37.5854 82.044 40.28 87.6348 41.8338C89.0064 42.2149 90 43.436 90 44.8593C90 46.3041 88.9762 47.5353 87.583 47.9174C84.0393 48.8889 80.3916 50.4558 76.6408 52.6171C72.1094 55.2735 67.8906 58.4374 63.9841 62.1094C60.0781 65.7031 56.875 69.4921 54.3748 73.4764C51.2698 78.4319 49.1701 83.1353 48.0766 87.5875C47.7373 88.9686 46.5358 90 45.1143 90Z"
              fill="url(#paint0_linear_agenda_right)"
            ></path>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_agenda_right"
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
          <g opacity="0.5" clipPath="url(#clip0_agenda_left)">
            <mask
              id="mask0_agenda_left"
              style={{ maskType: "luminance" }}
              maskUnits="userSpaceOnUse"
              x="-16"
              y="0"
              width="56"
              height="56"
            >
              <path d="M40 0H-16V56H40V0Z" fill="white"></path>
            </mask>
            <g mask="url(#mask0_agenda_left)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 0H9.99999V23.1716L-6.38477 6.78678L-9.21319 9.61523L7.17157 26H-16V30H7.17154L-9.21319 46.3848L-6.38477 49.2131L9.99999 32.8283V56H14V32.8283L30.3848 49.2131L33.2131 46.3848L16.8283 30H40V26H16.8283L33.2131 9.6152L30.3848 6.78678L14 23.1715V0Z"
                fill="url(#paint0_linear_agenda_left)"
              ></path>
            </g>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_agenda_left"
              x1="-10.26"
              y1="4.48"
              x2="12"
              y2="56"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8957BD"></stop>
              <stop offset="1" stopColor="#667EEA"></stop>
            </linearGradient>
            <clipPath id="clip0_agenda_left">
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

      {/* Decorative Arc - Right Side Bottom (Purple) - Smaller on mobile */}
      <div className="absolute right-0 bottom-0 z-0">
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
            fill="url(#paint0_linear_agenda_bottom)"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_agenda_bottom"
              x1="56.4462"
              y1="5.76"
              x2="40.2271"
              y2="38.6215"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0509862" stopColor="#D0BCE5"></stop>
              <stop offset="1" stopColor="#E7DDF2"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Heading - Mobile: 2 lines, Desktop: 2 lines */}
        <div className="text-center mb-8">
          {/* Mobile View - 2 lines with yellow background */}
          <div className="md:hidden">
            <h2 className="text-[27px] font-bold text-blue-900 leading-tight">
              Results Driven Agenda For <span className="bg-[#FFFECD]">3-</span>
            </h2>
            <h2 className="text-[27px] font-bold text-blue-900 leading-tight">
              <span className="bg-[#FFFECD]">Day High-Ticket</span> Sprint
            </h2>
          </div>

          {/* Desktop View - 2 lines */}
          <div className="hidden md:block">
            <h2 className="text-4xl font-bold text-blue-900 mb-2">
              Results Driven Agenda For{" "}
              <span className="bg-[#FFFECD] px-2">3-Day High-Ticket</span>
            </h2>
            <h2 className="text-4xl font-bold text-blue-900">Sprint</h2>
          </div>
        </div>

        {/* Underline decoration */}
        <div className="flex justify-center mb-4">
          <img src={underline} alt="" className="h-1 w-40" />
        </div>

        {/* Three Day Cards - Medium size */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto px-3 md:px-0">
          {days.map((day) => (
            <div
              key={day.id}
              className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-shadow overflow-hidden"
              style={{
                borderTopLeftRadius: "16px",
                borderBottomLeftRadius: "16px",
                borderBottomRightRadius: "16px",
              }}
            >
              {/* Day Image with Day Badge overlapping the image */}
              <div className="relative">
                {/* Day Badge - Top left corner with custom border radius */}
                <div
                  className="absolute top-0 left-0 bg-[#FFFECD] text-gray-800 px-4 py-2 flex items-center gap-2 font-bold text-xs z-10"
                  style={{
                    borderTopLeftRadius: "16px",
                    borderBottomRightRadius: "16px",
                  }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  {day.dayNumber}
                </div>

                <img
                  src={day.image}
                  alt={day.title}
                  className="w-full h-60 object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />

                {/* Title Overlay at Bottom with Blur Background */}
                <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md bg-black/40 px-5 py-3">
                  <h3 className="text-white text-xl md:text-2xl font-bold">
                    {day.title}
                  </h3>
                </div>
              </div>

              {/* Points List */}
              <div className="p-6">
                <div className="space-y-4">
                  {day.points.map((point, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      {/* Blue Circle Icon - Using SVG for perfect circles */}
                      <div
                        style={{
                          marginTop: "4px",
                          flexShrink: 0,
                        }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          style={{ display: "block" }}
                        >
                          <circle cx="10" cy="10" r="10" fill="#C1DEF6" />
                          <circle cx="10" cy="10" r="3.5" fill="#2C82C9" />
                        </svg>
                      </div>
                      {/* Point Text */}
                      <p
                        className="text-base text-gray-700 leading-relaxed"
                        style={{ flex: 1 }}
                        dangerouslySetInnerHTML={{ __html: point }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button - Full width on mobile */}
        <div className="flex flex-col items-center gap-6 mt-12">
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
      </div>
    </div>
  );
};

export default Agenda;
