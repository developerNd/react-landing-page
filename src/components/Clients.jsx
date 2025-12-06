import React, { useEffect, useRef } from "react";
import "./Clients.css";

const Clients = () => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const offsetRef = useRef(0);

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

  const cardWidth = 330;
  const gap = 32;
  const cardTotalWidth = cardWidth + gap;
  const totalWidth = clients.length * cardTotalWidth;

  // Smooth continuous scroll animation using direct DOM manipulation
  useEffect(() => {
    const speed = 0.5; // Pixels per frame

    const animate = () => {
      if (containerRef.current) {
        offsetRef.current += speed;

        // Reset when we've scrolled through one complete set
        if (offsetRef.current >= totalWidth) {
          offsetRef.current = 0;
        }

        // Apply transform directly to DOM
        containerRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
      }

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
    offsetRef.current -= cardTotalWidth;
    if (offsetRef.current < 0) {
      offsetRef.current = totalWidth - cardTotalWidth;
    }
  };

  const handleNext = () => {
    offsetRef.current += cardTotalWidth;
    if (offsetRef.current >= totalWidth) {
      offsetRef.current = 0;
    }
  };

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
            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-10 rounded-full p-2 hover:bg-gray-200 transition-colors"
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

            {/* Cards Container */}
            <div className="overflow-hidden py-8">
              <div
                ref={containerRef}
                className="flex gap-8"
                style={{
                  willChange: "transform",
                }}
              >
                {infiniteClients.map((client, index) => (
                  <div
                    key={`${client.id}-${index}`}
                    className="flex-shrink-0 w-[330px]"
                  >
                    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center h-[330px]">
                      <div className="w-[120px] h-[120px] rounded-full overflow-hidden mb-5 border-4 border-gray-100 flex-shrink-0">
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

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-10 rounded-full p-2 hover:bg-gray-200 transition-colors"
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
              <img
                src="/assets/images/underline.png"
                alt=""
                className="h-1 w-40"
              />
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

                  {/* Animated Arrow Annotations - SWAPPED POSITIONS */}

                  {/* Down-Left Arrow NOW ON RIGHT - DESKTOP */}
                  <div
                    className="hidden md:block absolute"
                    style={{ top: "-20px", right: "-20px" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 500 500"
                      width="100"
                      height="100"
                      preserveAspectRatio="xMidYMid meet"
                      style={{ transform: "rotate(-10deg)" }}
                    >
                      <defs>
                        <clipPath id="arrow_desktop_right_clip">
                          <rect width="500" height="500" x="0" y="0"></rect>
                        </clipPath>
                      </defs>
                      <g clipPath="url(#arrow_desktop_right_clip)">
                        <g transform="matrix(1,0,0,1,0,0)" opacity="1">
                          <g
                            opacity="1"
                            transform="matrix(1,0,0,1,95.05500030517578,425.7869873046875)"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fillOpacity="0"
                              stroke="rgb(255,0,24)"
                              strokeOpacity="1"
                              strokeWidth="13"
                              d="M-25.740999221801758,-23.406999588012695 C-24.871000289916992,-7.802000045776367 -24,7.802999973297119 -23.1299991607666,23.406999588012695 C-10.505999565124512,8.527999877929688 6.828000068664551,-2.2929999828338623 25.739999771118164,-7.099999904632568"
                              className="animated-arrow-path"
                            />
                          </g>
                        </g>
                        <g transform="matrix(1,0,0,1,0,0)" opacity="1">
                          <g
                            opacity="1"
                            transform="matrix(1,0,0,1,255.5500030517578,240.7790069580078)"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fillOpacity="0"
                              stroke="rgb(255,0,24)"
                              strokeOpacity="1"
                              strokeWidth="13"
                              d="M175.13499450683594,-189.9739990234375 C161.4409942626953,-148.10299682617188 135.91700744628906,-110.1719970703125 102.28600311279297,-81.71700286865234 C88.3270034790039,-69.90599822998047 71.69999694824219,-59.28799819946289 53.41699981689453,-59.57899856567383 C35.1349983215332,-59.87099838256836 16.31800079345703,-75.51100158691406 18.886999130249023,-93.61399841308594 C21.636999130249023,-112.99099731445312 47.48699951171875,-122.16200256347656 65.15899658203125,-113.75299835205078 C82.83100128173828,-105.34400177001953 92.38600158691406,-85.58799743652344 95.91899871826172,-66.33899688720703 C100.44100189208984,-41.70600128173828 97.14399719238281,-15.699999809265137 86.62100219726562,7.026000022888184 C78.4280014038086,24.7189998626709 65.4280014038086,40.79600143432617 47.900001525878906,49.334999084472656 C30.371999740600586,57.874000549316406 8.015999794006348,57.724998474121094 -7.619999885559082,46.077999114990234 C-23.256999969482422,34.43000030517578 -29.490999221801758,10.54699993133545 -18.923999786376953,-5.839000225067139 C-3.9159998893737793,-29.113000869750977 36.314998626708984,-23.327999114990234 49.97800064086914,0.7599999904632568 C63.64099884033203,24.847999572753906 54.209999084472656,56.983001708984375 34.53099822998047,76.46800231933594 C14.852999687194824,95.9530029296875 -12.673999786376953,105.17500305175781 -39.69499969482422,111.23999786376953 C-66.71700286865234,117.30400085449219 -94.58100128173828,120.93299865722656 -120.00499725341797,131.91299438476562 C-145.42799377441406,142.89199829101562 -168.83099365234375,163.00799560546875 -175.13499450683594,189.9739990234375"
                              className="animated-arrow-path"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>

                  {/* Down-Left Arrow NOW ON RIGHT - MOBILE */}
                  <div
                    className="md:hidden absolute"
                    style={{
                      top: "-30px",
                      right: "-20px",
                      transform: "rotate(-10deg)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 500 500"
                      width="90"
                      height="90"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <defs>
                        <clipPath id="arrow_mobile_right_clip">
                          <rect width="500" height="500" x="0" y="0"></rect>
                        </clipPath>
                      </defs>
                      <g clipPath="url(#arrow_mobile_right_clip)">
                        <g transform="matrix(1,0,0,1,0,0)" opacity="1">
                          <g
                            opacity="1"
                            transform="matrix(1,0,0,1,95.05500030517578,425.7869873046875)"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fillOpacity="0"
                              stroke="rgb(255,0,24)"
                              strokeOpacity="1"
                              strokeWidth="13"
                              d="M-25.740999221801758,-23.406999588012695 C-24.871000289916992,-7.802000045776367 -24,7.802999973297119 -23.1299991607666,23.406999588012695 C-10.505999565124512,8.527999877929688 6.828000068664551,-2.2929999828338623 25.739999771118164,-7.099999904632568"
                              className="animated-arrow-path"
                            />
                          </g>
                        </g>
                        <g transform="matrix(1,0,0,1,0,0)" opacity="1">
                          <g
                            opacity="1"
                            transform="matrix(1,0,0,1,255.5500030517578,240.7790069580078)"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fillOpacity="0"
                              stroke="rgb(255,0,24)"
                              strokeOpacity="1"
                              strokeWidth="13"
                              d="M175.13499450683594,-189.9739990234375 C161.4409942626953,-148.10299682617188 135.91700744628906,-110.1719970703125 102.28600311279297,-81.71700286865234 C88.3270034790039,-69.90599822998047 71.69999694824219,-59.28799819946289 53.41699981689453,-59.57899856567383 C35.1349983215332,-59.87099838256836 16.31800079345703,-75.51100158691406 18.886999130249023,-93.61399841308594 C21.636999130249023,-112.99099731445312 47.48699951171875,-122.16200256347656 65.15899658203125,-113.75299835205078 C82.83100128173828,-105.34400177001953 92.38600158691406,-85.58799743652344 95.91899871826172,-66.33899688720703 C100.44100189208984,-41.70600128173828 97.14399719238281,-15.699999809265137 86.62100219726562,7.026000022888184 C78.4280014038086,24.7189998626709 65.4280014038086,40.79600143432617 47.900001525878906,49.334999084472656 C30.371999740600586,57.874000549316406 8.015999794006348,57.724998474121094 -7.619999885559082,46.077999114990234 C-23.256999969482422,34.43000030517578 -29.490999221801758,10.54699993133545 -18.923999786376953,-5.839000225067139 C-3.9159998893737793,-29.113000869750977 36.314998626708984,-23.327999114990234 49.97800064086914,0.7599999904632568 C63.64099884033203,24.847999572753906 54.209999084472656,56.983001708984375 34.53099822998047,76.46800231933594 C14.852999687194824,95.9530029296875 -12.673999786376953,105.17500305175781 -39.69499969482422,111.23999786376953 C-66.71700286865234,117.30400085449219 -94.58100128173828,120.93299865722656 -120.00499725341797,131.91299438476562 C-145.42799377441406,142.89199829101562 -168.83099365234375,163.00799560546875 -175.13499450683594,189.9739990234375"
                              className="animated-arrow-path"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>

                  {/* Right Arrow NOW ON LEFT - DESKTOP */}
                  <div
                    className="hidden md:block absolute"
                    style={{
                      top: "290px",
                      left: "-100px",
                      transform: "scaleY(-1)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 500 500"
                      width="120"
                      height="120"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <defs>
                        <clipPath id="arrow_desktop_left_clip">
                          <rect width="500" height="500" x="0" y="0"></rect>
                        </clipPath>
                      </defs>
                      <g clipPath="url(#arrow_desktop_left_clip)">
                        <g
                          transform="matrix(0.9999988079071045,0,0,0.9999988079071045,0.000518798828125,0.0003662109375)"
                          opacity="1"
                        >
                          <g
                            opacity="1"
                            transform="matrix(1,0,0,1,423.6669921875,310.82501220703125)"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fillOpacity="0"
                              stroke="rgb(255,0,24)"
                              strokeOpacity="1"
                              strokeWidth="13"
                              d="M-21.969999313354492,-23.840999603271484 C-8.01099967956543,-18.031999588012695 6.888999938964844,-14.491000175476074 21.9689998626709,-13.397000312805176 C10.616000175476074,-2.4019999504089355 0.7919999957084656,10.168999671936035 -7.135000228881836,23.840999603271484"
                              className="animated-arrow-path"
                            />
                          </g>
                        </g>
                        <g transform="matrix(1,0,0,1,0,0)" opacity="1">
                          <g
                            opacity="1"
                            transform="matrix(1,0,0,1,243.42300415039062,251.12600708007812)"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fillOpacity="0"
                              stroke="rgb(255,0,24)"
                              strokeOpacity="1"
                              strokeWidth="13"
                              d="M-185.56300354003906,-89.73200225830078 C-189.13800048828125,-68.2229995727539 -190.98500061035156,-45.99300003051758 -186.06300354003906,-24.750999450683594 C-181.13999938964844,-3.509999990463257 -168.60899353027344,16.788999557495117 -149.28500366210938,26.889999389648438 C-129.96200561523438,36.99100112915039 -103.63300323486328,34.5890007019043 -89.22200012207031,18.22599983215332 C-74.55899810791016,1.5759999752044678 -79.97899627685547,-30.684999465942383 -101.59500122070312,-35.68600082397461 C-113.5479965209961,-38.45199966430664 -126.45899963378906,-32.12300109863281 -133.4739990234375,-22.058000564575195 C-140.48800659179688,-11.993000030517578 -142.1929931640625,1.0740000009536743 -140.32899475097656,13.199999809265137 C-135.5030059814453,44.606998443603516 -108.43099975585938,69.08899688720703 -78.37799835205078,79.41100311279297 C-48.32500076293945,89.73300170898438 -15.607000350952148,88.31500244140625 16.014999389648438,85.18900299072266 C75.23400115966797,79.33599853515625 133.89999389648438,67.90699768066406 190.98500061035156,51.10100173950195"
                              className="animated-arrow-path"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>

                  {/* Right Arrow NOW ON LEFT - MOBILE */}
                  <div
                    className="md:hidden absolute"
                    style={{
                      top: "180px",
                      left: "-70px",
                      transform: "scaleY(-1) rotate(15deg)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 500 500"
                      width="100"
                      height="100"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <defs>
                        <clipPath id="arrow_mobile_left_clip">
                          <rect width="500" height="500" x="0" y="0"></rect>
                        </clipPath>
                      </defs>
                      <g clipPath="url(#arrow_mobile_left_clip)">
                        <g
                          transform="matrix(0.9999988079071045,0,0,0.9999988079071045,0.000518798828125,0.0003662109375)"
                          opacity="1"
                        >
                          <g
                            opacity="1"
                            transform="matrix(1,0,0,1,423.6669921875,310.82501220703125)"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fillOpacity="0"
                              stroke="rgb(255,0,24)"
                              strokeOpacity="1"
                              strokeWidth="13"
                              d="M-21.969999313354492,-23.840999603271484 C-8.01099967956543,-18.031999588012695 6.888999938964844,-14.491000175476074 21.9689998626709,-13.397000312805176 C10.616000175476074,-2.4019999504089355 0.7919999957084656,10.168999671936035 -7.135000228881836,23.840999603271484"
                              className="animated-arrow-path"
                            />
                          </g>
                        </g>
                        <g transform="matrix(1,0,0,1,0,0)" opacity="1">
                          <g
                            opacity="1"
                            transform="matrix(1,0,0,1,243.42300415039062,251.12600708007812)"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fillOpacity="0"
                              stroke="rgb(255,0,24)"
                              strokeOpacity="1"
                              strokeWidth="13"
                              d="M-185.56300354003906,-89.73200225830078 C-189.13800048828125,-68.2229995727539 -190.98500061035156,-45.99300003051758 -186.06300354003906,-24.750999450683594 C-181.13999938964844,-3.509999990463257 -168.60899353027344,16.788999557495117 -149.28500366210938,26.889999389648438 C-129.96200561523438,36.99100112915039 -103.63300323486328,34.5890007019043 -89.22200012207031,18.22599983215332 C-74.55899810791016,1.5759999752044678 -79.97899627685547,-30.684999465942383 -101.59500122070312,-35.68600082397461 C-113.5479965209961,-38.45199966430664 -126.45899963378906,-32.12300109863281 -133.4739990234375,-22.058000564575195 C-140.48800659179688,-11.993000030517578 -142.1929931640625,1.0740000009536743 -140.32899475097656,13.199999809265137 C-135.5030059814453,44.606998443603516 -108.43099975585938,69.08899688720703 -78.37799835205078,79.41100311279297 C-48.32500076293945,89.73300170898438 -15.607000350952148,88.31500244140625 16.014999389648438,85.18900299072266 C75.23400115966797,79.33599853515625 133.89999389648438,67.90699768066406 190.98500061035156,51.10100173950195"
                              className="animated-arrow-path"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Bottom Left Text sections remain the same... */}
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
