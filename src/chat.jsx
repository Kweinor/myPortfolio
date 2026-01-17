import { useState } from "react";

const items =
    ["I build complete web applications from start to finish — frontend, backend, and database.I focus on creating fast, scalable, and secure systems tailored to your specific needs. Whether it’s a business website, dashboard, or custom web app, I deliver clean code and smooth functionality across all devices.",
     "I design and develop responsive user interfaces that look great and feel intuitive. Using modern frameworks like React, Tailwind CSS, and JavaScript, I create visually appealing layouts that provide seamless user experiences and high performance.",
     "I build strong, secure server-side logic to power your applications. From APIs to authentication systems, I use technologies like Node.js, Express, and MongoDB to make sure your application runs efficiently, handles data safely, and scales as your project grows.", 
     "I design clean, intuitive, and user-friendly interfaces that enhance user experience. I focus on layout structure, usability, wireframes, design systems, and interactive prototypes that make digital products easy and enjoyable to use.",
     "I create modern and visually appealing graphic designs for branding and marketing — logos, posters, banners, flyers, and social media graphics that help brands stand out and communicate clearly."
    ];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <div className="flex flex-col items-center py-8 w-full justify-center mb-10">
      <div className="flex items-center justify-center space-x-4 w-full  relative">
        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="p-2 bg-gray-300 rounded hover:bg-gray-400 z-10"
        >
          {"<"}
        </button>

        {/* Carousel */}
        <div className="flex justify-center items-center w-full max-w-4xl relative h-70 overflow-hidden">
          {items.map((item, index) => {
            // Determine the position relative to activeIndex
            let position = null;
            if (index === activeIndex) position = "center";
            else if (index === (activeIndex - 1 + items.length) % items.length)
              position = "left";
            else if (index === (activeIndex + 1) % items.length) position = "right";

            // Only render visible cards (max 3)
            if (!position) return null;

            let className =
              "absolute transition-all duration-500 transform text-center";

            if (position === "center") className += " scale-125 z-20";
            else className += " scale-80 z-10";

            let leftPosition = position === "left" ? "0" : position === "center" ? "50%" : "calc(100% - 150px)";

            return (
              <div
                key={index}
                className={`${className} bg-black/15 text-blue-950 w-120 p-10 rounded-lg`}
                style={{
                    
                  left: leftPosition,
                  width: "min(90%, 350px)",
                  transform: position === "center" ? "translateX(-15%) scale(0.90)" : "scale(0.9)",
                }}
              >
                {item}
              </div>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="p-2 bg-gray-300 rounded hover:bg-gray-400 z-10"
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
