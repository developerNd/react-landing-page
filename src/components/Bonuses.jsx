import React from "react";


const Bonuses = () => {
  const bonuses = [
    {
      id: 1,
      image: "/assets/images/bonus1.png",
      title: "AI Hook Creator Software:",
      price: (
        <>
          <span className="text-sm line-through">₹9000</span> FREE
        </>
      ),
      points: [
        "Free access to my AI Hook Creator software.",
        "Trained with years & years of HIGH CONVERTING direct response copy.",
        "One click & get KILLER money making hooks.",
        "1000x better than typical Chat-GPT stuff.",
      ],
    },
    {
      id: 2,
      image: "/assets/images/bonus2.png",
      title: "1.7 Crore Launch Step-By-Step Breakdown",
      price: "PRICELESS",
      points: [
        "Step-by-step breakdown.",
        "Revealing the exact strategy.",
        "Traffic & launch strategy.",
        "Sales strategy.",
        "Numbers, math & stat revealed.",
      ],
    },
    {
      id: 3,
      image: "/assets/images/bonus3.png",
      title: "LIVE Pre Training Party To Kickstart Your Journey!",
      price: "PRICELESS",
      points: [
        "Hotseats with audience.",
        "Answering all Q&As.",
        "BONUS Day extra training!",
        "And much more.",
      ],
    },
    {
      id: 4,
      image: "/assets/images/bonus4.png",
      title: 'Private "Your Eyes Only" Workbooks & Cheat Sheets',
      price: "PRICELESS",
      points: [
        "These are your downloadable resources, cheat-sheets & much more that you'll receive after the challenge!",
        "And access to your eyes only resources.",
        "And so much more.",
      ],
    },
  ];

  return (
    <div className="bg-[#F5F6F8] py-12 p-[20px] relative overflow-hidden">
      {/* Decorative Star - Right Side (Golden) - Top */}
      <div className="absolute -right-1 top-24 z-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="90" viewBox="0 0 52 90" fill="none">
          <mask id="mask0_bonuses_right" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="90" height="90">
            <path d="M90 0H0V90H90V0Z" fill="white"></path>
          </mask>
          <g mask="url(#mask0_bonuses_right)">
            <path d="M45.1143 90C43.6949 90 42.4952 88.9722 42.1515 87.5952C41.0558 83.2064 38.9585 78.5389 35.8594 73.5939C32.1875 67.6562 26.9531 62.1486 20.1563 57.0703C14.2447 52.6023 8.33315 49.5554 2.42162 47.93C1.02152 47.5452 0 46.3036 0 44.8516C0 43.428 0.982228 42.2008 2.35113 41.8099C8.14703 40.1551 13.7305 37.4684 19.1016 33.75C25.2734 29.4531 30.4297 24.2969 34.5703 18.2812C38.2333 12.9224 40.7478 7.62246 42.1138 2.38143C42.4717 1.00843 43.6804 0 45.0994 0C46.534 0 47.7513 1.03076 48.1005 2.42248C48.8889 5.56443 50.121 8.7804 51.7968 12.0703C53.9064 16.1328 56.6014 20.039 59.8828 23.7891C63.2421 27.4609 66.9924 30.7813 71.1329 33.75C76.5436 37.5854 82.044 40.28 87.6348 41.8338C89.0064 42.2149 90 43.436 90 44.8593C90 46.3041 88.9762 47.5353 87.583 47.9174C84.0393 48.8889 80.3916 50.4558 76.6408 52.6171C72.1094 55.2735 67.8906 58.4374 63.9841 62.1094C60.0781 65.7031 56.875 69.4921 54.3748 73.4764C51.2698 78.4319 49.1701 83.1353 48.0766 87.5875C47.7373 88.9686 46.5358 90 45.1143 90Z" fill="url(#paint0_linear_bonuses_right)"></path>
          </g>
          <defs>
            <linearGradient id="paint0_linear_bonuses_right" x1="12.375" y1="8.55" x2="67.05" y2="78.525" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFD9A0"></stop>
              <stop offset="1" stopColor="#FFF5F1"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Decorative Star - Left Side (Purple) - Top */}
      <div className="absolute left-0 top-0 z-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="56" viewBox="0 0 40 56" fill="none">
          <g opacity="0.5" clipPath="url(#clip0_bonuses_left)">
            <mask id="mask0_bonuses_left" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="-16" y="0" width="56" height="56">
              <path d="M40 0H-16V56H40V0Z" fill="white"></path>
            </mask>
            <g mask="url(#mask0_bonuses_left)">
              <path fillRule="evenodd" clipRule="evenodd" d="M14 0H9.99999V23.1716L-6.38477 6.78678L-9.21319 9.61523L7.17157 26H-16V30H7.17154L-9.21319 46.3848L-6.38477 49.2131L9.99999 32.8283V56H14V32.8283L30.3848 49.2131L33.2131 46.3848L16.8283 30H40V26H16.8283L33.2131 9.6152L30.3848 6.78678L14 23.1715V0Z" fill="url(#paint0_linear_bonuses_left)"></path>
            </g>
          </g>
          <defs>
            <linearGradient id="paint0_linear_bonuses_left" x1="-10.26" y1="4.48" x2="12" y2="56" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8957BD"></stop>
              <stop offset="1" stopColor="#667EEA"></stop>
            </linearGradient>
            <clipPath id="clip0_bonuses_left">
              <rect width="56" height="56" fill="white" transform="translate(-16)"></rect>
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Heading - Mobile: 3 lines, Desktop: 1 line */}
        <div className="text-center mb-6">
          {/* Mobile View - 3 lines */}
          <div className="md:hidden">
            <h2 className="text-[27px] font-bold text-blue-900 leading-tight">
              Get <strong>INSANE</strong> Bonuses
            </h2>
            <h2 className="text-[27px] font-bold text-blue-900 leading-tight">
              <span className="bg-[#FFFECD]">(Previously Sold For</span>
            </h2>
            <h2 className="text-[27px] font-bold text-blue-900 leading-tight">
              <span className="bg-[#FFFECD]">₹24,997)</span>
            </h2>
          </div>

          {/* Desktop View - 1 line */}
          <div className="hidden md:block">
            <h2 className="text-4xl font-bold text-blue-900 mb-8">
              Get <strong>INSANE</strong> Bonuses{" "}
              <span className="bg-[#FFFECD] px-2">
                (Previously Sold For ₹24,997)
              </span>
            </h2>
          </div>
        </div>

        {/* Underline decoration */}
        <div className="flex justify-center mb-6">
          <img src="/assets/images/underline.png" alt="" className="h-1 w-40" />
        </div>

        {/* Head Image - Reduced Size */}
        <div className="flex justify-center mb-8">
          <img
            src="/assets/images/head.png"
            alt="Bonuses Preview"
            className="w-full max-w-xl"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>

        {/* Bonuses Grid - 2x2 */}
        <div className="grid md:grid-cols-2 gap-8 mb-6 max-w-4xl mx-auto">
          {bonuses.map((bonus) => (
            <div key={bonus.id} className="relative pt-5">
              {/* Background Image - Behind and slightly above the card */}
              <img
                src="/assets/images/bg.png"
                alt=""
                className="absolute top-0 left-0 w-full h-auto object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />

              <div className="relative bg-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-shadow overflow-hidden rounded-2xl flex flex-col h-full">
                {/* Content */}
                <div className="relative flex flex-col h-full">
                  {/* Bonus Image with Grey Background */}
                  <div
                    className="w-full bg-gray-200"
                    style={{
                      height: "240px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={bonus.image}
                      alt={bonus.title}
                      className="object-contain"
                      style={{
                        mixBlendMode: "multiply",
                        height: "100%",
                        width: "100%",
                      }}
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </div>

                  {/* Card Content - Increased Padding */}
                  <div className="p-8 bg-white flex-grow flex flex-col">
                    {/* Title with Left Border - Moved to Edge */}
                    <div className="relative mb-6">
                      <div
                        className="absolute left-0 top-0 bottom-0 w-1 bg-gray-800 rounded-r-full"
                        style={{ marginLeft: "-32px" }}
                      ></div>
                      <div className="pl-1">
                        <h3 className="text-lg font-bold text-gray-900">
                          {bonus.title}
                        </h3>
                      </div>
                    </div>

                    {/* Points List - Increased Text Size */}
                    <div className="space-y-3 mb-6 flex-grow">
                      {bonus.points.map((point, index) => (
                        <div key={index} className="flex gap-3 items-start">
                          {/* Blue Circle Icon */}
                          <div
                            style={{
                              marginTop: "4px",
                              flexShrink: 0,
                            }}
                          >
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              style={{ display: "block" }}
                            >
                              <circle cx="9" cy="9" r="9" fill="#C1DEF6" />
                              <circle cx="9" cy="9" r="3" fill="#2C82C9" />
                            </svg>
                          </div>
                          {/* Point Text - Increased to text-base */}
                          <p
                            className="text-base text-gray-700 leading-relaxed"
                            style={{ flex: 1 }}
                          >
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price Badge - Full Width with Custom Gradient */}
                  <div
                    className="text-white text-center py-3 font-bold text-xl"
                    style={{
                      background: "linear-gradient(to right, #3950A3, #0A2F50)",
                    }}
                  >
                    {bonus.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bonuses;