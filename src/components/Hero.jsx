import React, { useState, useEffect, useRef } from "react";
import liveIcon from "../assets/images/live-icon.png";
import underline from "../assets/images/underline.png";
import introVideo from "../assets/videos/intro.mp4";

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const words = ["Build", "Scale", "Launch"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handlePlayVideo = () => {
    console.log('Play button clicked');
    console.log('Video ref:', videoRef.current);
    
    if (videoRef.current) {
      setIsPlaying(true);
      
      // Use setTimeout to ensure state updates before playing
      setTimeout(() => {
        videoRef.current.play()
          .then(() => {
            console.log('Video playing successfully');
          })
          .catch(error => {
            console.error('Error playing video:', error);
            setIsPlaying(false);
          });
      }, 100);
    }
  };

  return (
    <div className="bg-gradient-to-b from-pink-50 to-white pb-8 relative overflow-hidden">
      {/* Background Pattern - Slightly larger squares with thinner lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {/* Vertical Lines - 35 lines for slightly larger squares, thinner lines */}
        {[...Array(35)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 bg-gray-400"
            style={{
              left: `${(i + 1) * (100 / 36)}%`,
              width: '0.5px',
            }}
          />
        ))}
        {/* Horizontal Lines - 35 lines for slightly larger squares, thinner lines */}
        {[...Array(35)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute left-0 right-0 bg-gray-400"
            style={{
              top: `${(i + 1) * (100 / 36)}%`,
              height: '0.5px',
            }}
          />
        ))}
      </div>

      {/* Content - Relative to appear above background */}
      <div className="relative z-10">
        {/* Top Banner - No margin, at very top */}
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-3 px-10 rounded-b-3xl">
            <p className="text-base md:text-lg text-center whitespace-nowrap">
              🎯 Give Me 3 Days & I'll Show You How To...
            </p>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="max-w-7xl mx-auto px-4 py-6 text-center">
          {/* Main Heading */}
          <div className="font-bold mb-3">
            {/* Line 1 - Keep on same line for mobile */}
            <div className="mb-2 flex flex-wrap items-center justify-center gap-1 md:gap-0">
              <span
                key={currentWord}
                className="text-blue-900 text-xl sm:text-2xl md:text-5xl font-bold inline-block w-20 sm:w-28 md:w-44 text-center"
                style={{
                  animation: "slideUpSmall 0.5s ease-out forwards",
                }}
              >
                {words[currentWord]}
              </span>
              <span className="text-blue-900 text-xl sm:text-2xl md:text-5xl md:ml-2 text-center">
                Your Coaching Business To
              </span>
            </div>

            {/* Line 2 */}
            <div className="mb-2 flex flex-wrap items-center justify-center gap-1 sm:gap-2">
              <span className="inline-block bg-yellow-300 text-blue-900 px-2 sm:px-3 py-1 text-xl sm:text-2xl md:text-5xl font-bold">
                8 Lakhs/Month
              </span>
              <span className="text-blue-900 text-xl sm:text-2xl md:text-5xl text-center">
                PROFIT Using Army Of
              </span>
            </div>

            {/* Line 3 */}
            <div>
              <span className="text-blue-900 text-xl sm:text-2xl md:text-5xl underline decoration-2">
                A.I. Agents.
              </span>
            </div>
          </div>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-2xl text-gray-600 italic mb-6 mt-2">
            ... Zero Tech Method & Complete Time Freedom.
          </p>

          {/* Features with Two-Color Icons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-white px-6 py-3 rounded-full shadow-md flex items-center gap-3">
              <div className="relative w-7 h-7 flex items-center justify-center flex-shrink-0">
                <div className="absolute inset-0 bg-blue-300 rounded-full"></div>
                <div className="absolute inset-1 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
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
              <span className="font-medium text-base">NO Sales Calls</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-md flex items-center gap-3">
              <div className="relative w-7 h-7 flex items-center justify-center flex-shrink-0">
                <div className="absolute inset-0 bg-blue-300 rounded-full"></div>
                <div className="absolute inset-1 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
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
              <span className="font-medium text-base">NO Endless Content</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-md flex items-center gap-3">
              <div className="relative w-7 h-7 flex items-center justify-center flex-shrink-0">
                <div className="absolute inset-0 bg-blue-300 rounded-full"></div>
                <div className="absolute inset-1 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
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
              <span className="font-medium text-base">NO Begging In DMs</span>
            </div>
          </div>

          {/* Video and Implementation Section */}
          <div className="grid md:grid-cols-2 gap-6 items-start max-w-6xl mx-auto mb-8 mt-8">
            {/* Video Section with External Thumbnail */}
            <div className="bg-black rounded-xl overflow-hidden aspect-video relative shadow-xl w-full">
              <video
                ref={videoRef}
                controls
                className="w-full h-full"
                style={{ display: isPlaying ? 'block' : 'none' }}
                onEnded={() => setIsPlaying(false)}
              >
                <source src={introVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {!isPlaying && (
                <div 
                  className="absolute inset-0 cursor-pointer group"
                  onClick={handlePlayVideo}
                  style={{
                    backgroundImage: 'url(https://lp.launchatscale.com/wp-content/uploads/2024/05/Shubh-Jain-thum1-1-1.avif)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:scale-110 transition transform shadow-2xl">
                      <svg
                        className="w-8 h-8 text-red-600 ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Implementation Agenda */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 text-left shadow-lg relative border border-blue-100">
              {/* LIVE Icon - Top Center */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <img src={liveIcon} alt="Live" className="w-204 h-13.5" />
              </div>

              {/* Header with decorative line */}
              <div className="mt-4 mb-8 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Implementation Agenda:
                </h3>
                <div className="flex justify-center">
                  <img src={underline} alt="" className="h-1 w-32" />
                </div>
              </div>

              {/* Agenda Items */}
              <div className="space-y-5">
                <div className="flex gap-3 pb-4 border-b border-gray-200">
                  <div className="relative w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="absolute inset-0 bg-blue-300 rounded-full"></div>
                    <div className="absolute inset-1 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
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
                  <p className="text-sm leading-relaxed">
                    How to Make{" "}
                    <strong>10 Lakhs or More in Sales In ONE Weekend</strong>{" "}
                    Which Would Otherwise Take You Months to HIT!
                  </p>
                </div>

                <div className="flex gap-3 pb-4 border-b border-gray-200">
                  <div className="relative w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="absolute inset-0 bg-blue-300 rounded-full"></div>
                    <div className="absolute inset-1 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
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
                  <p className="text-sm leading-relaxed">
                    How to{" "}
                    <strong>SELL Premium Offers Without Sales Calls</strong> &
                    Close Effortlessly in 5 hours/month.
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="relative w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="absolute inset-0 bg-blue-300 rounded-full"></div>
                    <div className="absolute inset-1 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
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
                  <p className="text-sm leading-relaxed">
                    How To Create A Buying Movement That Makes{" "}
                    <strong>People Throw Credit Cards</strong> At You To Buy!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Event Details and CTA Section - Side by Side */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 max-w-6xl mx-auto mt-8 mb-8 px-4">
            {/* Left Side - Event Details 2x2 Grid - Move up separately */}
            <div className="w-full md:w-auto md:-mt-12 md:-ml-4">
              <div className="grid grid-cols-2 gap-3 w-full md:w-[565px]">
              <div className="bg-white p-4 rounded-xl shadow-md">
                <div className="flex items-center gap-2">
                  <div className="w-11 h-11 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-blue-600 text-xs font-semibold uppercase">
                      Date
                    </p>
                    <p className="font-bold text-sm sm:text-base">10th - 12th Oct</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-md">
                <div className="flex items-center gap-2">
                  <div className="w-11 h-11 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-blue-600 text-xs font-semibold uppercase">
                      Time
                    </p>
                    <p className="font-bold text-sm sm:text-base">7 PM - 9 PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-md">
                <div className="flex items-center gap-2">
                  <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-blue-600 text-xs font-semibold uppercase">
                      Where
                    </p>
                    <p className="font-bold text-sm sm:text-base">Zoom</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-md">
                <div className="flex items-center gap-2">
                  <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-blue-600 text-xs font-semibold uppercase">
                      Language
                    </p>
                    <p className="font-bold text-sm sm:text-base">English</p>
                  </div>
                </div>
              </div>
            </div>
            </div>

            {/* Right Side - CTA Button and Seats */}
            <div className="flex flex-col items-center justify-center gap-4 w-full md:w-auto">
              {/* CTA Button */}
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-xl px-10 py-4 rounded-xl shadow-2xl relative transition transform hover:scale-105 whitespace-nowrap">
                <span className="absolute -top-3 -right-3 bg-black text-white text-xs px-3 py-1.5 rounded-full font-bold">
                  10 Seats Left
                </span>
                ENROLL NOW @ 99{" "}
                <span className="line-through text-red-300 ml-1">₹999</span>
              </button>

              {/* Seats Indicator - Single Row Rectangles */}
              <div className="flex flex-col items-center mt-3">
                <div className="flex gap-1 justify-center">
                  {[...Array(24)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-[18px] h-[30px] ${
                        i >= 22 ? "bg-red-500" : "bg-gray-300"
                      } rounded-sm ${
                        i >= 22 ? "flex items-center justify-center" : ""
                      }`}
                    >
                      {i >= 22 && (
                        <svg
                          className="w-2.5 h-2.5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
                <p className="mt-7 text-sm font-bold text-gray-800 flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
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
                  Hurry! 28 Seats Of This Event Left
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;