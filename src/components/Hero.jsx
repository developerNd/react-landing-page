import React, { useState, useEffect, useRef } from "react";
import liveIcon from "../assets/images/live-icon.png";
import underline from "../assets/images/underline.png";
import introVideo from "../assets/videos/intro.mp4";
import "./Hero.css"; 

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
    <div className="bg-white pb-8 relative overflow-hidden">
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
        {/* Top Banner - Updated gradient with #3A51A6 to #0F2C80 */}
        <div className="flex justify-center">
          <div className="text-white py-4 sm:py-6 px-8 sm:px-12 md:px-20 rounded-b-2xl" style={{
            background: 'linear-gradient(to right, #3A51A6, #0F2C80)'
          }}>
            <p className="text-center whitespace-normal sm:whitespace-nowrap" style={{
              fontFamily: 'Instrument Sans',
              fontWeight: 600,
              fontSize: 'clamp(16px, 3vw, 20px)',
              lineHeight: 'clamp(20px, 4vw, 21px)',
              color: 'rgb(252, 254, 255)'
            }}>
              ⏰ Give Me 3 Days & I'll Show You How To...
            </p>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="max-w-7xl mx-auto px-4 py-10 text-center">
          {/* Main Heading */}
          <div className="font-bold mb-6">
            {/* Line 1 - Keep on same line for mobile - Updated color to #0F2C80 */}
            <div className="mb-2 flex flex-wrap items-center justify-center gap-1 md:gap-0">
              <span
                key={currentWord}
                className="text-xl sm:text-2xl md:text-5xl font-bold inline-block w-20 sm:w-28 md:w-44 text-center"
                style={{
                  animation: "slideUpSmall 0.5s ease-out forwards",
                  fontFamily: 'Instrument Sans',
                  fontWeight: 900,
                  color: 'rgb(15, 44, 128)'
                }}
              >
                {words[currentWord]}
              </span>
              <span className="text-xl sm:text-2xl md:text-5xl md:ml-2 text-center" style={{
                fontFamily: 'Instrument Sans',
                fontWeight: 900,
                color: 'rgb(15, 44, 128)'
              }}>
                Your Coaching Business To
              </span>
            </div>

            {/* Line 2 - Updated color to #0F2C80 */}
            <div className="mb-2 flex flex-wrap items-center justify-center gap-1 sm:gap-2">
              <span className="inline-block px-2 sm:px-3 py-1 text-xl sm:text-2xl md:text-5xl font-bold" style={{
                background: 'linear-gradient(to right, #FFFECA, #FFFDB3)',
                borderTopLeftRadius: '12px',
                borderBottomRightRadius: '12px',
                fontFamily: 'Instrument Sans',
                fontWeight: 900,
                color: 'rgb(8, 22, 64)'
              }}>
                8 Lakhs/Month
              </span>
              <span className="text-xl sm:text-2xl md:text-5xl text-center" style={{
                fontFamily: 'Instrument Sans',
                fontWeight: 900,
                color: 'rgb(15, 44, 128)'
              }}>
                PROFIT Using Army Of
              </span>
            </div>

            {/* Line 3 - Updated color to #0F2C80 */}
            <div>
              <span className="text-xl sm:text-2xl md:text-5xl underline decoration-2" style={{
                fontFamily: 'Instrument Sans',
                fontWeight: 900,
                color: 'rgb(15, 44, 128)'
              }}>
                A.I. Agents.
              </span>
            </div>
          </div>

          {/* Subheading */}
          <p style={{
            fontFamily: 'Instrument Sans',
            fontStyle: 'italic',
            fontWeight: 500,
            fontSize: 'clamp(18px, 4vw, 26px)',
            lineHeight: 'clamp(24px, 5vw, 33px)',
            color: 'rgb(69, 69, 69)'
          }} className="mb-8 mt-2 px-2">
            ... Zero Tech Method & Complete Time Freedom.
          </p>

          {/* Features with Two-Color Icons - Updated colors to #BCC7F9 outer and #1C348F inner */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-4 mb-12 sm:mb-16 px-2">
            <div className="bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 sm:gap-3 justify-center" style={{
              boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.15)'
            }}>
              <div className="relative w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center flex-shrink-0">
                <div className="absolute inset-0 rounded-full" style={{ backgroundColor: "#BCC7F9" }}></div>
                <div className="absolute inset-1 rounded-full flex items-center justify-center" style={{ backgroundColor: "#1C348F" }}>
                  <svg
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white"
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
              <span style={{
                fontFamily: 'Instrument Sans',
                fontWeight: 400,
                fontSize: 'clamp(14px, 2.5vw, 19px)',
                lineHeight: 'clamp(21px, 3.5vw, 29px)',
                color: 'rgb(69, 69, 69)'
              }}>NO Sales Calls</span>
            </div>
            <div className="bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 sm:gap-3 justify-center" style={{
              boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.15)'
            }}>
              <div className="relative w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center flex-shrink-0">
                <div className="absolute inset-0 rounded-full" style={{ backgroundColor: "#BCC7F9" }}></div>
                <div className="absolute inset-1 rounded-full flex items-center justify-center" style={{ backgroundColor: "#1C348F" }}>
                  <svg
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white"
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
              <span style={{
                fontFamily: 'Instrument Sans',
                fontWeight: 400,
                fontSize: 'clamp(14px, 2.5vw, 19px)',
                lineHeight: 'clamp(21px, 3.5vw, 29px)',
                color: 'rgb(69, 69, 69)'
              }}>NO Content Junk</span>
            </div>
            <div className="bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 sm:gap-3 col-span-2 sm:col-span-1 justify-center" style={{
              boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.15)'
            }}>
              <div className="relative w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center flex-shrink-0">
                <div className="absolute inset-0 rounded-full" style={{ backgroundColor: "#BCC7F9" }}></div>
                <div className="absolute inset-1 rounded-full flex items-center justify-center" style={{ backgroundColor: "#1C348F" }}>
                  <svg
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white"
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
              <span style={{
                fontFamily: 'Instrument Sans',
                fontWeight: 400,
                fontSize: 'clamp(14px, 2.5vw, 19px)',
                lineHeight: 'clamp(21px, 3.5vw, 29px)',
                color: 'rgb(69, 69, 69)'
              }}>NO Begging For Sales</span>
            </div>
          </div>

          {/* Video and Implementation Section */}
          <div className="grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-6 items-start max-w-6xl mx-auto mb-8 mt-8">
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
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 sm:p-8 text-left shadow-lg relative border border-blue-100">
              {/* LIVE Icon - Top Center - Fixed positioning with larger size */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-20" style={{
                top: '-30px'
              }}>
                <img 
                  src={liveIcon} 
                  alt="Live" 
                  className="h-auto"
                  style={{
                    width: 'clamp(350px, 40vw, 350px)',
                    maxWidth: '350px'
                  }}
                />
              </div>

              {/* Header with decorative line - Added top padding */}
              <div className="mb-6 sm:mb-8 text-center pt-4 sm:pt-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                  Implementation Agenda:
                </h3>
                <div className="flex justify-center">
                  <img src={underline} alt="" className="h-1 w-24 sm:w-32" />
                </div>
              </div>

              {/* Agenda Items - Updated colors to #BCC7F9 outer and #1C348F inner */}
              <div className="space-y-5">
                <div className="flex gap-3 pb-4 border-b border-gray-200">
                  <div className="relative w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="absolute inset-0 rounded-full" style={{ backgroundColor: "#BCC7F9" }}></div>
                    <div className="absolute inset-1 rounded-full flex items-center justify-center" style={{ backgroundColor: "#1C348F" }}>
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
                  <p className="leading-relaxed" style={{
                    fontFamily: 'Instrument Sans',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: 'rgb(42, 42, 42)'
                  }}>
                    How to Make{" "}
                    <strong style={{
                      fontFamily: 'Instrument Sans',
                      fontWeight: 700,
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: 'rgb(42, 42, 42)'
                    }}>10 Lakhs or More in Sales In ONE Weekend</strong>{" "}
                    Which Would Otherwise Take You Months to HIT!
                  </p>
                </div>

                <div className="flex gap-3 pb-4 border-b border-gray-200">
                  <div className="relative w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="absolute inset-0 rounded-full" style={{ backgroundColor: "#BCC7F9" }}></div>
                    <div className="absolute inset-1 rounded-full flex items-center justify-center" style={{ backgroundColor: "#1C348F" }}>
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
                  <p className="leading-relaxed" style={{
                    fontFamily: 'Instrument Sans',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: 'rgb(42, 42, 42)'
                  }}>
                    How to{" "}
                    <strong style={{
                      fontFamily: 'Instrument Sans',
                      fontWeight: 700,
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: 'rgb(42, 42, 42)'
                    }}>SELL Premium Offers Without Sales Calls</strong> &
                    Close Effortlessly in 5 hours/month.
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="relative w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="absolute inset-0 rounded-full" style={{ backgroundColor: "#BCC7F9" }}></div>
                    <div className="absolute inset-1 rounded-full flex items-center justify-center" style={{ backgroundColor: "#1C348F" }}>
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
                  <p className="leading-relaxed" style={{
                    fontFamily: 'Instrument Sans',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: 'rgb(42, 42, 42)'
                  }}>
                    How To Create A Buying Movement That Makes{" "}
                    <strong style={{
                      fontFamily: 'Instrument Sans',
                      fontWeight: 700,
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: 'rgb(42, 42, 42)'
                    }}>People Throw Credit Cards</strong> At You To Buy!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Event Details and CTA Section - Side by Side */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 max-w-6xl mx-auto mt-8 mb-8 px-4">
            {/* Left Side - Event Details 2x2 Grid - WHITE BACKGROUND, GRADIENT ICONS */}
            <div className="w-full md:w-auto md:-mt-16 md:-ml-4">
              <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full md:w-[565px]">
              <div className="bg-white p-3 sm:p-4 rounded-xl" style={{
                boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.15)'
              }}>
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center flex-shrink-0" style={{
                    background: 'linear-gradient(to bottom right, #1E2A56, #6279E1)'
                  }}>
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-white"
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
                    <p style={{
                      fontFamily: 'Instrument Sans',
                      fontWeight: 400,
                      fontSize: 'clamp(10px, 2vw, 12px)',
                      lineHeight: 'clamp(15px, 2.5vw, 18px)',
                      color: 'rgb(102, 126, 234)'
                    }}>
                      Date
                    </p>
                    <p style={{
                      fontFamily: 'Instrument Sans',
                      fontWeight: 700,
                      fontSize: 'clamp(14px, 2.5vw, 19px)',
                      lineHeight: 'clamp(21px, 3.5vw, 29px)',
                      color: 'rgb(42, 42, 42)'
                    }}>10th - 12th Oct</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-3 sm:p-4 rounded-xl" style={{
                boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.15)'
              }}>
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center flex-shrink-0" style={{
                    background: 'linear-gradient(to bottom right, #1E2A56, #6279E1)'
                  }}>
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-white"
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
                    <p style={{
                      fontFamily: 'Instrument Sans',
                      fontWeight: 400,
                      fontSize: 'clamp(10px, 2vw, 12px)',
                      lineHeight: 'clamp(15px, 2.5vw, 18px)',
                      color: 'rgb(102, 126, 234)'
                    }}>
                      Time
                    </p>
                    <p style={{
                      fontFamily: 'Instrument Sans',
                      fontWeight: 700,
                      fontSize: 'clamp(14px, 2.5vw, 19px)',
                      lineHeight: 'clamp(21px, 3.5vw, 29px)',
                      color: 'rgb(42, 42, 42)'
                    }}>7 PM - 9 PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-3 sm:p-4 rounded-xl" style={{
                boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.15)'
              }}>
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center flex-shrink-0" style={{
                    background: 'linear-gradient(to bottom right, #1E2A56, #6279E1)'
                  }}>
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-white"
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
                    <p style={{
                      fontFamily: 'Instrument Sans',
                      fontWeight: 400,
                      fontSize: 'clamp(10px, 2vw, 12px)',
                      lineHeight: 'clamp(15px, 2.5vw, 18px)',
                      color: 'rgb(102, 126, 234)'
                    }}>
                      Where
                    </p>
                    <p style={{
                      fontFamily: 'Instrument Sans',
                      fontWeight: 700,
                      fontSize: 'clamp(14px, 2.5vw, 19px)',
                      lineHeight: 'clamp(21px, 3.5vw, 29px)',
                      color: 'rgb(42, 42, 42)'
                    }}>Zoom</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-3 sm:p-4 rounded-xl" style={{
                boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.15)'
              }}>
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center flex-shrink-0" style={{
                    background: 'linear-gradient(to bottom right, #1E2A56, #6279E1)'
                  }}>
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-white"
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
                    <p style={{
                      fontFamily: 'Instrument Sans',
                      fontWeight: 400,
                      fontSize: 'clamp(10px, 2vw, 12px)',
                      lineHeight: 'clamp(15px, 2.5vw, 18px)',
                      color: 'rgb(102, 126, 234)'
                    }}>
                      Language
                    </p>
                    <p style={{
                      fontFamily: 'Instrument Sans',
                      fontWeight: 700,
                      fontSize: 'clamp(14px, 2.5vw, 19px)',
                      lineHeight: 'clamp(21px, 3.5vw, 29px)',
                      color: 'rgb(42, 42, 42)'
                    }}>English</p>
                  </div>
                </div>
              </div>
            </div>
            </div>

            {/* Right Side - CTA Button and Seats */}
            <div className="flex flex-col items-center justify-center gap-4 w-full md:w-auto">
              {/* CTA Button with Shimmer Effect */}
              <div className="relative w-full md:w-auto">
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl shadow-2xl relative transition transform hover:scale-105 overflow-hidden w-full md:w-auto md:whitespace-nowrap">
                  <span className="relative z-10">
                    ENROLL NOW @ 99{" "}
                    <span className="line-through text-red-300 ml-1">₹999</span>
                  </span>
                  <span className="absolute inset-0 -skew-x-12 animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
                </button>
                <span className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 bg-black text-white text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-bold z-20">
                  10 Seats Left
                </span>
              </div>

              {/* Seats Indicator - Single Row Rectangles */}
              <div className="flex flex-col items-center mt-3">
                <div className="flex gap-1 justify-center">
                  {[...Array(24)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-[14px] sm:w-[18px] h-[24px] sm:h-[30px] ${
                        i >= 22 ? "bg-red-500" : "bg-gray-300"
                      } rounded-sm ${
                        i >= 22 ? "flex items-center justify-center" : ""
                      }`}
                    >
                      {i >= 22 && (
                        <svg
                          className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-white"
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
                <p className="mt-5 sm:mt-7 text-xs sm:text-sm font-bold text-gray-800 flex items-center gap-2">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4"
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