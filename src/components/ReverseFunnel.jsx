import React, { useState } from "react";
import pipeSystemImage from "../assets/images/pipe_system.png";
import underline from "../assets/images/underline.png";

const ReverseFunnel = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const testimonials = [
    {
      id: 1,
      thumbnail: require("../assets/images/thumb1.png"),
      video: require("../assets/videos/testimonial1.mp4"),
      text: '"Made 65 lakhs without ads!"',
      isPortrait: true,
    },
    {
      id: 2,
      thumbnail: require("../assets/images/thumb2.png"),
      video: require("../assets/videos/testimonial2.mp4"),
      text: '"Generated 80 lakh in two days!"',
      isPortrait: true,
    },
    {
      id: 3,
      thumbnail: require("../assets/images/thumb3.png"),
      video: require("../assets/videos/testimonial3.mp4"),
      text: '"Made so much revenue 3 days, what usually takes 6 months!"',
      isPortrait: true,
    },
  ];

  const handlePlayVideo = (testimonial) => {
    setPlayingVideo(testimonial);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPlayingVideo(null);
  };

  return (
    <div className="bg-[#F8FAFF] py-12 px-4 md:px-4">
      {/* Add keyframes for arrow animation */}
      <style>
        {`
          @keyframes drawArrow {
            0% {
              stroke-dashoffset: 1000;
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            50% {
              stroke-dashoffset: 0;
              opacity: 1;
            }
            100% {
              stroke-dashoffset: 0;
              opacity: 1;
            }
          }
          
          .animated-arrow path {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: drawArrow 2s ease-in-out infinite;
          }
          
          .animated-arrow-delay-1 path {
            animation-delay: 0s;
          }
          
          .animated-arrow-delay-2 path {
            animation-delay: 0s;
          }
          
          .animated-arrow-delay-3 path {
            animation-delay: 0s;
          }


        `}
      </style>

      <div className="max-w-7xl mx-auto">
        {/* Top Heading - Mobile: 4 lines FULL WIDTH, Desktop: 2 lines */}
        <div className="text-center mb-6">
          {/* Mobile View - 4 lines with NO horizontal padding */}
          <div className="md:hidden -mx-4 px-0">
            <h2 className="text-[27px] font-bold text-blue-900 leading-tight">
              After <span className="bg-[#FFFECD]">65+ Crores In Sales</span>
            </h2>
            <h2 className="text-[27px] font-bold text-blue-900 leading-tight ">
              The Only System{" "}
              <span className="underline decoration-4 decoration-blue-900">
                You'll Ever
              </span>
            </h2>
            <h2 className="text-[27px] font-bold text-blue-900 leading-tight">
              <span className="underline decoration-4 decoration-blue-900">
                Need
              </span>{" "}
              To Hit 1 CR Rapidly In
            </h2>
            <h2 className="text-[27px] font-bold text-blue-900 leading-tight">
              2025!
            </h2>
          </div>

          {/* Desktop View - 2 lines */}
          <div className="hidden md:block">
            <h2 className="text-4xl font-bold text-blue-900 mb-2">
              After{" "}
              <span className="bg-[#FFFECD] px-2">65+ Crores In Sales</span> The
              Only System{" "}
              <span className="underline decoration-4 decoration-blue-900">
                You'll
              </span>
            </h2>
            <h2 className="text-4xl font-bold text-blue-900">
              <span className="underline decoration-4 decoration-blue-900">
                Ever Need
              </span>{" "}
              To Hit 1 CR Rapidly In 2025!
            </h2>
          </div>
        </div>

        {/* Underline decoration - Reduced margin on mobile */}
        <div className="flex justify-center mb-4 md:mb-8">
          <img src={underline} alt="" className="h-1 w-40" />
        </div>

        {/* Pipe System Image - FULL WIDTH on mobile by breaking out of padding */}
        <div className="flex justify-center mb-8 -mx-4 md:mx-0">
          <img
            src={pipeSystemImage}
            alt="Reverse Funnel System Pipeline"
            className="w-full md:max-w-6xl px-1 md:px-0"
            onError={(e) => {
              e.target.style.display = "none";
              console.log("Pipe system image not found");
            }}
          />
        </div>

        {/* Animated Arrows Above Videos - Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-4 mb-6 max-w-6xl mx-auto">
          {/* Arrow 1 - Left pointing down with left curve */}
          <div className="flex justify-center items-end" style={{ height: '100px' }}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 500 500" 
              width="90" 
              height="100" 
              preserveAspectRatio="xMidYMid meet"
              style={{ transform: 'rotate(-53deg) scaleX(-1)' }}
              className="animated-arrow animated-arrow-delay-1"
            >
              <defs>
                <clipPath id="arrow_clip_1">
                  <rect width="500" height="500" x="0" y="0"></rect>
                </clipPath>
              </defs>
              <g clipPath="url(#arrow_clip_1)">
                <g transform="matrix(0.9424005746841431,0,0,0.9424005746841431,22.443023681640625,21.231292724609375)" opacity="1">
                  <g opacity="1" transform="matrix(1,0,0,1,395.6400146484375,406.60198974609375)">
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      fillOpacity="0" 
                      fill="none"
                      stroke="rgb(255,3,3)" 
                      strokeOpacity="1" 
                      strokeWidth="13" 
                      d="M-20.073999404907227,-6.644000053405762 C-11.211999893188477,1.972000002861023 -2.3499999046325684,10.588000297546387 6.51200008392334,19.204999923706055 C11.032999992370605,6.401000022888184 15.553000450134277,-6.4019999504089355 20.072999954223633,-19.20599937438965"
                    />
                  </g>
                </g>
                <g transform="matrix(1,0,0,1,0,0)" opacity="1">
                  <g opacity="1" transform="matrix(1,0,0,1,241.61900329589844,244.86000061035156)">
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      fillOpacity="0" 
                      fill="none"
                      stroke="rgb(255,3,3)" 
                      strokeOpacity="1" 
                      strokeWidth="13" 
                      d="M-157.33299255371094,-170.66700744628906 C-79.21399688720703,-152.82699584960938 20.39699935913086,-125.90799713134766 18.66699981689453,-101.33300018310547 C16.583999633789062,-71.75 -130.9969940185547,-64.63899993896484 -130.66600036621094,-45.33300018310547 C-130.4770050048828,-34.270999908447266 -20.452999114990234,-60.83100128173828 58.66699981689453,-10.666999816894531 C115.947998046875,25.650999069213867 141.22999572753906,91.81099700927734 153.23300170898438,148.71800231933594"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>

          {/* Arrow 2 - Center pointing straight down */}
          <div className="flex justify-center items-end" style={{ height: '100px' }}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 500 500" 
              width="90" 
              height="100" 
              preserveAspectRatio="xMidYMid meet"
              className="animated-arrow animated-arrow-delay-2"
            >
              <defs>
                <clipPath id="arrow_clip_2">
                  <rect width="500" height="500" x="0" y="0"></rect>
                </clipPath>
              </defs>
              <g clipPath="url(#arrow_clip_2)">
                <g transform="matrix(0.9424005746841431,0,0,0.9424005746841431,8.761749267578125,20.2310791015625)" opacity="1">
                  <g opacity="1" transform="matrix(1,0,0,1,165.5489959716797,408.22698974609375)">
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      fillOpacity="0" 
                      fill="none"
                      stroke="rgb(255,3,3)" 
                      strokeOpacity="1" 
                      strokeWidth="13" 
                      d="M-22.608999252319336,-10.553000450134277 C-22.608999252319336,-10.553000450134277 10.477999687194824,25.02899932861328 10.477999687194824,25.02899932861328 C14.522000312805176,8.343000411987305 18.565000534057617,-8.343000411987305 22.608999252319336,-25.02899932861328"
                    />
                  </g>
                </g>
                <g transform="matrix(1,0,0,1,0,0)" opacity="1">
                  <g opacity="1" transform="matrix(1,0,0,1,249.40199279785156,242.52999877929688)">
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      fillOpacity="0" 
                      fill="none"
                      stroke="rgb(255,3,3)" 
                      strokeOpacity="1" 
                      strokeWidth="13" 
                      d="M160.60000610351562,-173.0290069580078 C-76.98200225830078,-178.9709930419922 -158.76100158691406,-174.7209930419922 -159.39999389648438,-165.91799926757812 C-160.60000610351562,-149.406005859375 123.46099853515625,-113.99199676513672 121.48899841308594,-87.69499969482422 C120.177001953125,-70.2040023803711 -5.004000186920166,-92.18800354003906 -63.400001525878906,-23.695999145507812 C-101.3740005493164,20.843000411987305 -98.48400115966797,88.83899688720703 -84.93299865722656,149.91400146484375"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>

          {/* Arrow 3 - Right pointing down with right curve */}
          <div className="flex justify-center items-end" style={{ height: '100px' }}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 500 500" 
              width="90" 
              height="100" 
              preserveAspectRatio="xMidYMid meet"
              style={{ transform: 'rotate(53deg)' }}
              className="animated-arrow animated-arrow-delay-3"
            >
              <defs>
                <clipPath id="arrow_clip_3">
                  <rect width="500" height="500" x="0" y="0"></rect>
                </clipPath>
              </defs>
              <g clipPath="url(#arrow_clip_3)">
                <g transform="matrix(0.9424005746841431,0,0,0.9424005746841431,22.443023681640625,21.231292724609375)" opacity="1">
                  <g opacity="1" transform="matrix(1,0,0,1,395.6400146484375,406.60198974609375)">
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      fillOpacity="0" 
                      fill="none"
                      stroke="rgb(255,3,3)" 
                      strokeOpacity="1" 
                      strokeWidth="13" 
                      d="M-20.073999404907227,-6.644000053405762 C-11.211999893188477,1.972000002861023 -2.3499999046325684,10.588000297546387 6.51200008392334,19.204999923706055 C11.032999992370605,6.401000022888184 15.553000450134277,-6.4019999504089355 20.072999954223633,-19.20599937438965"
                    />
                  </g>
                </g>
                <g transform="matrix(1,0,0,1,0,0)" opacity="1">
                  <g opacity="1" transform="matrix(1,0,0,1,241.61900329589844,244.86000061035156)">
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      fillOpacity="0" 
                      fill="none"
                      stroke="rgb(255,3,3)" 
                      strokeOpacity="1" 
                      strokeWidth="13" 
                      d="M-157.33299255371094,-170.66700744628906 C-79.21399688720703,-152.82699584960938 20.39699935913086,-125.90799713134766 18.66699981689453,-101.33300018310547 C16.583999633789062,-71.75 -130.9969940185547,-64.63899993896484 -130.66600036621094,-45.33300018310547 C-130.4770050048828,-34.270999908447266 -20.452999114990234,-60.83100128173828 58.66699981689453,-10.666999816894531 C115.947998046875,25.650999069213867 141.22999572753906,91.81099700927734 153.23300170898438,148.71800231933594"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>



        {/* Three Testimonial Video Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-shadow"
            >
              {/* Video Thumbnail with Play Button Overlay */}
              <div className="p-4">
                <div
                  className="relative w-full bg-gray-200 rounded-xl overflow-hidden cursor-pointer group"
                  style={{ paddingBottom: "56.25%" }}
                >
                  <img
                    src={testimonial.thumbnail}
                    alt={`Testimonial ${testimonial.id}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=Testimonial+${testimonial.id}&size=400&background=random`;
                    }}
                  />
                  {/* Play Button Overlay */}
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-30 transition"
                    onClick={() => handlePlayVideo(testimonial)}
                  >
                    <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition transform">
                      <svg
                        className="w-10 h-10 text-gray-800 ml-1"
                        fill="transparent"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        style={{ opacity: 0.8 }}
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Text */}
              <div className="px-5 pb-5 text-center">
                <p className="text-base md:text-lg font-semibold text-gray-800">
                  {testimonial.text}
                </p>
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

      {/* Video Modal */}
      {isModalOpen && playingVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-[100] flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className={`relative ${
              playingVideo.isPortrait
                ? "w-full max-w-md h-auto"
                : "w-full max-w-4xl"
            }`}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition z-10"
            >
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Video Player */}
            <video
              controls
              autoPlay
              className={`w-full rounded-lg ${
                playingVideo.isPortrait ? "max-h-[80vh]" : ""
              }`}
              style={playingVideo.isPortrait ? { aspectRatio: "9/16" } : {}}
              onClick={(e) => e.stopPropagation()}
            >
              <source src={playingVideo.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReverseFunnel;