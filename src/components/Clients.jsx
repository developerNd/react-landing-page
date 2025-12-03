import React, { useState, useEffect, useRef } from "react";
import mockupImage from "../assets/images/mockup_result.png";
import underline from "../assets/images/underline.png";
import client1 from "../assets/images/1.png";
import client2 from "../assets/images/2.png";
import client3 from "../assets/images/3.png";
import client4 from "../assets/images/4.png";
import client5 from "../assets/images/5.png";
import client6 from "../assets/images/6.png";
import client7 from "../assets/images/7.png";
import client8 from "../assets/images/8.png";
import client9 from "../assets/images/9.png";
import client10 from "../assets/images/10.png";

const Clients = () => {
  const [offset, setOffset] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const animationRef = useRef(null);
  const containerRef = useRef(null);

  const clients = [
    {
      id: 1,
      name: "Jatan Shah",
      title: "Microsoft Excel and Stock Market Coach",
      followers: "188K+",
      image: client1,
    },
    {
      id: 2,
      name: "Aarzoo Shah",
      title: "India's #1 Life Coach",
      followers: "19.5K+",
      image: client2,
    },
    {
      id: 3,
      name: "Karthik Naidu",
      title: "SaaS Business Coach",
      followers: "22.2K+",
      image: client3,
    },
    {
      id: 4,
      name: "Swastik Nandakumar",
      title: "Performance coach and business growth expert",
      followers: "44.7K+",
      image: client4,
    },
    {
      id: 5,
      name: "Ankit Neerav",
      title: "Law of Attraction Coach",
      followers: "24.3K+",
      image: client5,
    },
    {
      id: 6,
      name: "Shankar Kulkarni",
      title: "Financial Freedom & Confidence Coach",
      followers: "9,111+",
      image: client6,
    },
    {
      id: 7,
      name: "Viral Jain",
      title: "Amazon Coach",
      followers: "11.1K+",
      image: client7,
    },
    {
      id: 8,
      name: "Dharaneetharan",
      title: "Digital Marketing Coach",
      followers: "20.0K+",
      image: client8,
    },
    {
      id: 9,
      name: "Omkar Phadatare",
      title: "Stock Market Coach",
      followers: "26.6K+",
      image: client9,
    },
    {
      id: 10,
      name: "Saurav Pal",
      title: "Career Scaling Coach",
      followers: "1.53K+",
      image: client10,
    },
  ];

  const cardWidth = 320;
  const gap = 32;
  const cardTotalWidth = cardWidth + gap;
  const totalWidth = clients.length * cardTotalWidth;

  // Smooth continuous scroll animation
  useEffect(() => {
    let lastTimestamp = 0;
    const speed = 0.3; // Pixels per frame (slower = smoother)

    const animate = (timestamp) => {
      if (lastTimestamp === 0) {
        lastTimestamp = timestamp;
      }

      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      setOffset((prevOffset) => {
        const newOffset = prevOffset + speed;

        // Reset when we've scrolled through all original cards
        if (newOffset >= totalWidth) {
          return 0;
        }

        return newOffset;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [totalWidth]);

  const handlePrevious = () => {
    setOffset((prevOffset) => {
      const newOffset = prevOffset - cardTotalWidth;
      return newOffset < 0 ? totalWidth - cardTotalWidth : newOffset;
    });
  };

  const handleNext = () => {
    setOffset((prevOffset) => {
      const newOffset = prevOffset + cardTotalWidth;
      return newOffset >= totalWidth ? 0 : newOffset;
    });
  };

  // Triple the clients for seamless infinite scroll
  const infiniteClients = [...clients, ...clients, ...clients];

  return (
    <>
      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
            Some Of Our Clients...
          </h2>

          {/* Carousel Container - Centered with fixed width for 3 cards */}
          <div className="relative max-w-[1088px] mx-auto">
            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-10 rounded-full p-2"
              aria-label="Previous clients"
            >
              <svg
                className="w-8 h-8 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Cards Container - Shows exactly 3 cards with margins */}
            <div className="overflow-hidden py-8">
              <div
                ref={containerRef}
                className="flex gap-8"
                style={{
                  transform: `translateX(-${offset}px)`,
                  transition: "none", // No transition for smooth continuous scroll
                }}
              >
                {infiniteClients.map((client, index) => (
                  <div
                    key={`${client.id}-${index}`}
                    className="flex-shrink-0 w-[320px]"
                  >
                    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center h-[320px]">
                      {/* Client Image */}
                      <div className="w-28 h-28 rounded-full overflow-hidden mb-5 border-4 border-gray-100 flex-shrink-0">
                        <img
                          src={client.image}
                          alt={client.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback to a placeholder if image fails to load
                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                              client.name
                            )}&size=200&background=random`;
                          }}
                        />
                      </div>

                      {/* Client Name with White Background */}
                      <div className="bg-white border-2 border-gray-200 px-4 py-2 rounded-full mb-3 flex-shrink-0">
                        <h3 className="text-lg font-bold text-blue-900">
                          {client.name}
                        </h3>
                      </div>

                      {/* Client Title - Flexible space */}
                      <p className="text-gray-600 text-sm mb-4 flex-grow flex items-center justify-center px-2">
                        {client.title}
                      </p>

                      {/* Instagram Followers - Fixed at bottom */}
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

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-10 rounded-full p-2"
              aria-label="Next clients"
            >
              <svg
                className="w-8 h-8 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="max-w-5xl mx-auto mt-16 text-center px-4">
          <h3 className="text-2xl md:text-4xl font-bold text-blue-900 mb-3">
            In Just 3 Days... You Can Start Getting{" "}
            <span className="bg-yellow-200 px-2 underline decoration-2 decoration-blue-900">
              Ready To Buy
            </span>
          </h3>
          <h3 className="text-2xl md:text-4xl font-bold text-blue-900">
            <span className="bg-yellow-200 px-2">
              Leads & High Ticket Sales!!
            </span>
          </h3>
        </div>
      </div>

      {/* New Section - Mockup Images with GIF */}
      <div className="bg-gray-100 -mt-8 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Top Heading */}
          <div className="text-center mb-8">
            <h2 className="text-lg md:text-2xl font-bold text-gray-600 mb-2">
              This is the ultimate black-book of{" "}
              <span className="italic underline decoration-2 text-gray-800">
                TOP 1% coaches
              </span>{" "}
              <span className="text-gray-600">(they won't</span>
            </h2>
            <h2 className="text-lg md:text-2xl font-bold text-gray-600 mb-3">
              reveal it to you…)
            </h2>

            {/* Underline decoration using image from Hero */}
            <div className="flex justify-center">
              <img src={underline} alt="" className="h-1 w-32" />
            </div>
          </div>

          {/* Grid Layout - GIF on Left, Mockup on Right */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
            {/* Left Side - GIF (Moved slightly right) */}
            <div className="flex justify-center md:ml-20">
              <img
                src="https://lp.launchatscale.com/wp-content/uploads/2025/02/video-1.gif"
                alt="Email inbox animation"
                className="w-full max-w-[270px] rounded-2xl shadow-2xl shadow-black/50"
              />
            </div>

            {/* Right Side - Mockup with Text Overlays (Moved right with margin top) */}
            <div className="flex flex-col items-center relative md:ml-20 mt-8">
              {/* Top Text - 2 Lines (Moved right) */}
              <div
                className=" text-center md:ml-24"
                style={{
                  fontFamily:
                    "'Segoe Script', 'Bradley Hand', 'Brush Script MT', cursive",
                }}
              >
                <p className="text-base md:text-lg font-bold text-blue-900">
                  And when you start applying these principles... your
                </p>
                <p className="text-base md:text-lg font-bold text-blue-900">
                  inbox could start looking like this.
                </p>
              </div>

              {/* Mockup Image Container (Moved right) */}
              <div className="relative md:ml-24">
                <img
                  src={mockupImage}
                  alt="Mobile phone mockup"
                  className="w-full max-w-[290px]"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />

                {/* Bottom Left Text Overlay - 4 Lines with Handwritten Style (Moved even more left with slope) */}
                <div
                  className="absolute bottom-20 left-5 transform -translate-x-64 -rotate-6 text-center"
                  style={{
                    fontFamily:
                      "'Segoe Script', 'Bradley Hand', 'Brush Script MT', cursive",
                  }}
                >
                  <p className="text-green-600 font-bold text-base md:text-lg whitespace-nowrap leading-snug">
                    Hundreds of sales @ High
                  </p>
                  <p className="font-bold text-base md:text-lg whitespace-nowrap leading-snug">
                    <span className="text-green-600">Ticket</span>{" "}
                    <span className="text-blue-900">through this</span>
                  </p>
                  <p className="text-blue-900 font-bold text-base md:text-lg whitespace-nowrap leading-snug">
                    Reverse Funnel in a
                  </p>
                  <p className="text-blue-900 font-bold text-base md:text-lg whitespace-nowrap leading-snug">
                    span of 2 hours ...
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="flex flex-col items-center gap-6 mt-12">
            {/* Enroll Button with Shimmer Effect */}
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
    </>
  );
};

export default Clients;
