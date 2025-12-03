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
        'How to get your dream <strong>high-ticket clients</strong> lining up to work with you before you even pitch them.',
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
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Heading - Sprint on second line, yellow background for 3-Day High-Ticket */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-2">
            Results Driven Agenda For <span className="bg-yellow-200 px-2">3-Day High-Ticket</span>
          </h2>
          <h2 className="text-2xl md:text-4xl font-bold text-blue-900">
            Sprint
          </h2>
        </div>

        {/* Underline decoration */}
        <div className="flex justify-center mb-12">
          <img src={underline} alt="" className="h-1 w-32" />
        </div>

        {/* Three Day Cards - Medium size */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
          {days.map((day) => (
            <div
              key={day.id}
              className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-shadow overflow-hidden"
              style={{ borderTopLeftRadius: '16px', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px' }}
            >
              {/* Day Image with Day Badge overlapping the image */}
              <div className="relative">
                {/* Day Badge - Top left corner with custom border radius */}
                <div className="absolute top-0 left-0 bg-yellow-200 text-gray-800 px-4 py-2 flex items-center gap-2 font-bold text-xs z-10" style={{ borderTopLeftRadius: '16px', borderBottomRightRadius: '16px' }}>
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
                          marginTop: '4px',
                          flexShrink: 0
                        }}
                      >
                        <svg width="20" height="20" viewBox="0 0 20 20" style={{ display: 'block' }}>
                          <circle cx="10" cy="10" r="10" fill="#93C5FD" />
                          <circle cx="10" cy="10" r="3.5" fill="#2563EB" />
                        </svg>
                      </div>
                      {/* Point Text */}
                      <p
                        className="text-sm text-gray-700 leading-relaxed"
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

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-6 mt-12">
          {/* Enroll Button with Badge */}
          <div className="relative">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-xl md:text-2xl px-12 py-4 rounded-xl relative transition transform hover:scale-105 shadow-2xl overflow-hidden">
              <span className="relative z-10">ENROLL NOW @ 99 ₹999</span>
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