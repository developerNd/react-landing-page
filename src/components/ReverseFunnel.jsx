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
      isPortrait: true, // Portrait format
    },
    {
      id: 2,
      thumbnail: require("../assets/images/thumb2.png"),
      video: require("../assets/videos/testimonial2.mp4"),
      text: '"Generated 80 lakh in two days!"',
      isPortrait: true, // Portrait format
    },
    {
      id: 3,
      thumbnail: require("../assets/images/thumb3.png"),
      video: require("../assets/videos/testimonial3.mp4"),
      text: '"Made so much revenue 3 days, what usually takes 6 months!"',
      isPortrait: true, // Portrait format - Changed to true
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
    <div className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Heading - "You'll" with underline on first row */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-2">
            After{" "}
            <span className="bg-yellow-200 px-2">65+ Crores In Sales</span> The
            Only System{" "}
            <span className="underline decoration-4 decoration-blue-900">
              You'll
            </span>
          </h2>
          <h2 className="text-2xl md:text-4xl font-bold text-blue-900">
            <span className="underline decoration-4 decoration-blue-900">
              Ever Need
            </span>{" "}
            To Hit 1 CR Rapidly In 2025!
          </h2>
        </div>

        {/* Underline decoration using image from Clients section */}
        <div className="flex justify-center mb-8">
          <img src={underline} alt="" className="h-1 w-32" />
        </div>

        {/* Pipe System Image - Slightly increased size */}
        <div className="flex justify-center mb-16">
          <img
            src={pipeSystemImage}
            alt="Reverse Funnel System Pipeline"
            className="w-full max-w-6xl"
            onError={(e) => {
              e.target.style.display = "none";
              console.log("Pipe system image not found");
            }}
          />
        </div>

        {/* Three Testimonial Video Cards - Increased size with proper shadow */}
        <div className="grid md:grid-cols-3 gap-4 mb-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-shadow"
            >
              {/* Video Thumbnail with Play Button Overlay - Thumbnail inside with padding */}
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
                  {/* Play Button Overlay with Transparent Symbol */}
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

      {/* Video Modal - Portrait and Landscape Support with proper aspect ratio */}
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

            {/* Video Player - Portrait videos maintain aspect ratio */}
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
