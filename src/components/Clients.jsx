import React from "react";
import "./Clients.css";


const Clients = () => {


  const clients = [
    {
      id: 1,
      name: "Jatan Shah",
      title: "Microsoft Excel and Stock Market Coach",
      followers: "188K+",
      image: "/assets/images/1.png",
    },
    {
      id: 2,
      name: "Aarzoo Shah",
      title: "India's #1 Life Coach",
      followers: "19.5K+",
      image: "/assets/images/2.png",
    },
    {
      id: 3,
      name: "Karthik Naidu",
      title: "SaaS Business Coach",
      followers: "22.2K+",
      image: "/assets/images/3.png",
    },
    {
      id: 4,
      name: "Swastik Nandakumar",
      title: "Performance coach and business growth expert",
      followers: "44.7K+",
      image: "/assets/images/4.png",
    },
    {
      id: 5,
      name: "Ankit Neerav",
      title: "Law of Attraction Coach",
      followers: "24.3K+",
      image: "/assets/images/5.png",
    },
    {
      id: 6,
      name: "Shankar Kulkarni",
      title: "Financial Freedom & Confidence Coach",
      followers: "9,111+",
      image: "/assets/images/6.png",
    },
    {
      id: 7,
      name: "Viral Jain",
      title: "Amazon Coach",
      followers: "11.1K+",
      image: "/assets/images/7.png",
    },
    {
      id: 8,
      name: "Dharaneetharan",
      title: "Digital Marketing Coach",
      followers: "20.0K+",
      image: "/assets/images/8.png",
    },
    {
      id: 9,
      name: "Omkar Phadatare",
      title: "Stock Market Coach",
      followers: "26.6K+",
      image: "/assets/images/9.png",
    },
    {
      id: 10,
      name: "Saurav Pal",
      title: "Career Scaling Coach",
      followers: "1.53K+",
      image: "/assets/images/10.png",
    },
  ];

  

  const infiniteClients = [...clients, ...clients, ...clients];

  return (
    <>
      <div className="bg-gray-100 py-12 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-4">
            Some Of Our Clients...
          </h2>

          {/* Carousel Container */}
          <div className="relative max-w-[1088px] mx-auto">


            <div className="overflow-hidden py-8 scrolling-carousel">
              <div
                className="flex gap-8"
              >
                {infiniteClients.map((client, index) => (
                  <div
                    key={`${client.id}-${index}`}
                    className="flex-shrink-0 w-[320px]"
                  >
                    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center h-[320px]">
                      <div className="w-28 h-28 rounded-full overflow-hidden mb-5 border-4 border-gray-100 flex-shrink-0">
                        <img
                          src={client.image}
                          alt={client.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                              client.name
                            )}&size=200&background=random`;
                          }}
                        />
                      </div>

                      <div className="bg-white border-2 border-gray-200 px-4 py-2 rounded-full mb-3 flex-shrink-0">
                        <h3 className="text-lg font-bold text-blue-900">
                          {client.name}
                        </h3>
                      </div>

                      <p className="text-gray-600 text-sm mb-4 flex-grow flex items-center justify-center px-2">
                        {client.title}
                      </p>

                      <div className="flex items-center gap-2 flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-pink-600"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        <span className="font-semibold text-sm text-gray-800">
                          Followers: {client.followers}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>


          </div>
        </div>

        {/* Call to Action Section */}
        <div className="max-w-5xl mx-auto mt-14 text-center">
          {/* Desktop View - Two lines */}
          <div className="hidden md:block">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-3 leading-tight">
              In Just 3 Days... You Can Start Getting{" "}
              <span
                className="px-2 underline decoration-2 decoration-blue-900 inline-block"
                style={{ backgroundColor: "#FFFECD" }}
              >
                Ready To Buy
              </span>
            </h3>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 leading-tight">
              <span
                className="px-2 inline-block"
                style={{ backgroundColor: "#FFFECD" }}
              >
                Leads & High Ticket Sales!!
              </span>
            </h3>
          </div>

          {/* Mobile View - LARGER TEXT */}
          <div className="block md:hidden">
            <h3 className="text-[27px] font-bold text-blue-900 leading-tight ">
              In Just 3 Days... You Can Start
            </h3>
            <h3 className="text-[27px] font-bold text-blue-900 leading-tight ">
              Getting{" "}
              <span className="px-2" style={{ backgroundColor: "#FFFECD" }}>
                <span className="underline decoration-2 decoration-blue-900">
                  Ready To Buy
                </span>{" "}
                Leads
              </span>
            </h3>
            <h3 className="text-[27px] font-bold text-blue-900 leading-tight">
              <span className="px-2" style={{ backgroundColor: "#FFFECD" }}>
                & High Ticket Sales!!
              </span>
            </h3>
          </div>
        </div>
      </div>

      {/* New Section - Mockup Images with GIF */}
      <div className="bg-gray-100 -mt-8 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Top Heading - FIXED DESKTOP COLOR */}
          <div className="text-center mb-4">
            {/* Desktop View - WITH CORRECT COLOR */}
            <div className="hidden md:block">
              <h2
                style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontWeight: 500,
                  fontStyle: "normal",
                  color: "rgb(69, 69, 69)",
                  fontSize: "clamp(20px, 2vw, 28px)",
                  lineHeight: "clamp(28px, 2.5vw, 38px)",
                }}
                className="mb-2"
              >
                This is the ultimate black-book of{" "}
                <span
                  style={{
                    fontFamily: "'Instrument Sans', sans-serif",
                    fontWeight: 700,
                    fontStyle: "italic",
                    color: "rgb(69, 69, 69)",
                    textDecoration: "underline",
                    textDecorationThickness: "2px",
                  }}
                >
                  TOP 1% coaches
                </span>{" "}
                <span>(they won't</span>
              </h2>
              <h2
                className="mb-3"
                style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontWeight: 500,
                  fontStyle: "normal",
                  color: "rgb(69, 69, 69)",
                  fontSize: "clamp(20px, 2vw, 28px)",
                  lineHeight: "clamp(28px, 2.5vw, 38px)",
                }}
              >
                reveal it to you…)
              </h2>
            </div>

            {/* Mobile View - SMALLER TEXT */}
            <div className="block md:hidden">
              <h2
                style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontWeight: 500,
                  fontStyle: "normal",
                  color: "rgb(69, 69, 69)",
                  fontSize: "19px",
                  lineHeight: "28px",
                }}
              >
                This is the ultimate black-book of{" "}
                <span
                  style={{
                    fontFamily: "'Instrument Sans', sans-serif",
                    fontWeight: 700,
                    fontStyle: "italic",
                    color: "rgb(69, 69, 69)",
                    fontSize: "19px",
                    lineHeight: "28px",
                    textDecoration: "underline",
                    textDecorationThickness: "2px",
                  }}
                >
                  TOP 1%
                </span>
              </h2>
              <h2
                className="mb-3"
                style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontWeight: 500,
                  fontStyle: "normal",
                  color: "rgb(69, 69, 69)",
                  fontSize: "19px",
                  lineHeight: "28px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Instrument Sans', sans-serif",
                    fontWeight: 700,
                    fontStyle: "italic",
                    color: "rgb(69, 69, 69)",
                    fontSize: "19px",
                    lineHeight: "28px",
                    textDecoration: "underline",
                    textDecorationThickness: "2px",
                  }}
                >
                  coaches
                </span>{" "}
                (they won't reveal it to you…)
              </h2>
            </div>

            <div className="flex justify-center">
              <img src="/assets/images/underline.png" alt="" className="h-1 w-40" />
            </div>
          </div>

          {/* Grid Layout */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-12">
            {/* Left Side - GIF - HIDDEN ON MOBILE */}
            <div className="hidden md:flex justify-center w-full md:w-auto md:ml-20">
              <img
                src="https://lp.launchatscale.com/wp-content/uploads/2025/02/video-1.gif"
                alt="Email inbox animation"
                className="w-full max-w-[240px] sm:max-w-[270px] rounded-2xl shadow-2xl shadow-black/50"
              />
            </div>

            {/* Right Side - Mockup with Text Overlays */}
            <div className="flex flex-col items-center relative w-full md:w-auto md:ml-20 mt-4 md:mt-8">
              {/* Top Text */}
              <div className="text-center px-4 md:px-0 md:ml-24 mb-4">
                <p
                  style={{
                    fontFamily: "'Shadows Into Light', sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(16px, 4vw, 20px)",
                    lineHeight: "clamp(22px, 5vw, 26px)",
                    color: "rgb(11, 44, 103)",
                  }}
                >
                  And when you start applying these principles... your
                </p>
                <p
                  style={{
                    fontFamily: "'Shadows Into Light', sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(16px, 4vw, 20px)",
                    lineHeight: "clamp(22px, 5vw, 26px)",
                    color: "rgb(11, 44, 103)",
                  }}
                >
                  inbox could start looking like this.
                </p>
              </div>

              {/* Mockup Image Container */}
              <div className="relative w-full flex justify-center items-center md:ml-24">
                {/* Mockup Image */}
                <div className="relative ml-20 md:ml-0">
                  <img
                    src="/assets/images/mockup_result.png"
                    alt="Mobile phone mockup"
                    className="w-full max-w-[240px] sm:max-w-[270px] md:max-w-[290px]"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>

                {/* Bottom Left Text - ONLY VISIBLE ON MOBILE */}
                <div
                  className="absolute left-0 md:hidden"
                  style={{
                    bottom: "120px",
                    transform: "rotate(-6deg)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Shadows Into Light', sans-serif",
                      fontWeight: 600,
                      fontSize: "clamp(13px, 3vw, 20px)",
                      lineHeight: "clamp(18px, 4vw, 26px)",
                      color: "#008000",
                    }}
                    className="whitespace-nowrap"
                  >
                    Hundreds of sales @ High
                  </p>
                  <p
                    style={{
                      fontFamily: "'Shadows Into Light', sans-serif",
                      fontWeight: 600,
                      fontSize: "clamp(13px, 3vw, 20px)",
                      lineHeight: "clamp(18px, 4vw, 26px)",
                    }}
                    className="whitespace-nowrap"
                  >
                    <span
                      style={{
                        color: "#008000",
                        fontFamily: "'Shadows Into Light', sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      Ticket
                    </span>{" "}
                    <span
                      style={{
                        color: "rgb(11, 44, 103)",
                        fontFamily: "'Shadows Into Light', sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      through this
                    </span>
                  </p>
                  <p
                    style={{
                      fontFamily: "'Shadows Into Light', sans-serif",
                      fontWeight: 600,
                      fontSize: "clamp(13px, 3vw, 20px)",
                      lineHeight: "clamp(18px, 4vw, 26px)",
                      color: "rgb(11, 44, 103)",
                    }}
                    className="whitespace-nowrap"
                  >
                    Reverse Funnel in a
                  </p>
                  <p
                    style={{
                      fontFamily: "'Shadows Into Light', sans-serif",
                      fontWeight: 600,
                      fontSize: "clamp(13px, 3vw, 20px)",
                      lineHeight: "clamp(18px, 4vw, 26px)",
                      color: "rgb(11, 44, 103)",
                    }}
                    className="whitespace-nowrap"
                  >
                    span of 2 hours ...
                  </p>
                </div>

                {/* Bottom Left Text - DESKTOP VERSION */}
                <div
                  className="hidden md:block absolute -left-28"
                  style={{
                    bottom: "80px",
                    transform: "rotate(-6deg)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Shadows Into Light', sans-serif",
                      fontWeight: 600,
                      fontSize: "20px",
                      lineHeight: "26px",
                      color: "#008000",
                    }}
                    className="whitespace-nowrap"
                  >
                    Hundreds of sales @ High
                  </p>
                  <p
                    style={{
                      fontFamily: "'Shadows Into Light', sans-serif",
                      fontWeight: 600,
                      fontSize: "20px",
                      lineHeight: "26px",
                    }}
                    className="whitespace-nowrap"
                  >
                    <span
                      style={{
                        color: "#008000",
                        fontFamily: "'Shadows Into Light', sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      Ticket
                    </span>{" "}
                    <span
                      style={{
                        color: "rgb(11, 44, 103)",
                        fontFamily: "'Shadows Into Light', sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      through this
                    </span>
                  </p>
                  <p
                    style={{
                      fontFamily: "'Shadows Into Light', sans-serif",
                      fontWeight: 600,
                      fontSize: "20px",
                      lineHeight: "26px",
                      color: "rgb(11, 44, 103)",
                    }}
                    className="whitespace-nowrap"
                  >
                    Reverse Funnel in a
                  </p>
                  <p
                    style={{
                      fontFamily: "'Shadows Into Light', sans-serif",
                      fontWeight: 600,
                      fontSize: "20px",
                      lineHeight: "26px",
                      color: "rgb(11, 44, 103)",
                    }}
                    className="whitespace-nowrap"
                  >
                    span of 2 hours ...
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="flex flex-col items-center gap-6 px-4">
            {/* Enroll Button */}
            <div className="relative w-full sm:w-auto">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg sm:text-xl md:text-2xl px-8 sm:px-12 py-3 sm:py-4 rounded-3xl relative transition transform hover:scale-105 shadow-2xl overflow-hidden w-full sm:w-auto">
                <span className="relative z-10">
                  ENROLL NOW @ ₹99 <span className="line-through">₹999</span>
                </span>
                <span className="absolute inset-0 -skew-x-12 animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
              </button>
              <span className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 bg-black text-white text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2 rounded-full font-bold animate-pulse z-20">
                10 Seats Left
              </span>
            </div>

            {/* Seats Left Text */}
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700"
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
              <p className="text-sm sm:text-base font-semibold text-gray-700">
                Hurry! 28 Seats Of This Event Left
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
