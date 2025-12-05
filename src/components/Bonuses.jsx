import React from "react";
import underline from "../assets/images/underline.png";
import bonus1 from "../assets/images/bonus1.png";
import bonus2 from "../assets/images/bonus2.png";
import bonus3 from "../assets/images/bonus3.png";
import bonus4 from "../assets/images/bonus4.png";
import head from "../assets/images/head.png";
import bg from "../assets/images/bg.png";

const Bonuses = () => {
  const bonuses = [
    {
      id: 1,
      image: bonus1,
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
      image: bonus2,
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
      image: bonus3,
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
      image: bonus4,
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
    <div className="bg-[#F5F6F8] py-12 p-[20px]">
      <div className="max-w-7xl mx-auto">
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
          <img src={underline} alt="" className="h-1 w-40" />
        </div>

        {/* Head Image - Reduced Size */}
        <div className="flex justify-center mb-8">
          <img
            src={head}
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
                src={bg}
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
