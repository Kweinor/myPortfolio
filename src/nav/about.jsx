import { useState } from "react";

function About({ darkMode }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <div
    id="about"
      className={`${
        darkMode ? "bg-[#050014] text-gray-400" : "bg-[#f8f5ee] text-gray-800"
      } py-20 flex flex-col md:flex-row items-center justify-center gap-30`}
    >
    
       {/* Image */}
      <figure>
        <img className="mt-5 w-72 md:w-96 lg:w-120" src="port.png" alt="About me" />
      </figure>

      {/* Text */}
      <div className="w-80 md:w-[450px]">
        <h2 className={`text-2xl md:text-4xl mb-4 text-center md:text-left ${darkMode? "text-[#503f82]": "text-[#272b53]"} font-semibold`}>
          About
        </h2>

        {/* Mobile: Show truncated text with Read More button */}
        <p className="leading-relaxed md:hidden">
          I’m a full-stack developer and graphic designer who believes technology
          and creativity are not separate paths, but two sides of the same story.
          I build digital experiences that don’t just work—they speak, they move,
          and they connect. My work is driven by the idea that clean code and
          thoughtful design can elevate even the simplest idea into something
          memorable.

          {readMore && (
            <>
              <br />
              <br />
              Over the years, I’ve developed a deep love for crafting end-to-end
              solutions. On the development side, I move comfortably across the
              stack—building responsive interfaces, designing smooth user flows,
              architecting robust backends, and optimizing systems for
              performance and scalability.
              <br />
              <br />
              As a designer, I focus on turning feelings into visuals. Whether
              it's branding, UI/UX design, or digital graphics, I aim for work
              that is visually striking yet purposeful. I blend minimalism with
              bold storytelling, making sure every element has a voice.
              <br />
              <br />
              What excites me most is the intersection of both worlds. Being both
              a developer and a designer allows me to create products that are as
              visually compelling as they are technically solid. I’m always
              exploring new tools, new ideas, and new ways to push boundaries.
              If it challenges me, inspires me, or lets me build something
              meaningful—I’m all in.
            </>
          )}
        </p>

        {/* Desktop: Show all text */}
        <p className="leading-relaxed hidden w-130 md:block">
          I'm a full-stack developer and graphic designer who believes technology
          and creativity are not separate paths, but two sides of the same story.
          I build digital experiences that don't just work—they speak, they move,
          and they connect. My work is driven by the idea that clean code and
          thoughtful design can elevate even the simplest idea into something
          memorable.
          Over the years, I've developed a deep love for crafting end-to-end
          solutions. On the development side, I move comfortably across the
          stack—building responsive interfaces, designing smooth user flows,
          architecting robust backends, and optimizing systems for
          performance and scalability.
          As a designer, I focus on turning feelings into visuals. Whether
          it's branding, UI/UX design, or digital graphics, I aim for work
          that is visually striking yet purposeful. I blend minimalism with
          bold storytelling, making sure every element has a voice.
          What excites me most is the intersection of both worlds. Being both
          a developer and a designer allows me to create products that are as
          visually compelling as they are technically solid. I'm always
          exploring new tools, new ideas, and new ways to push boundaries.
          If it challenges me, inspires me, or lets me build something
          meaningful—I'm all in.
        </p>

        {/* Read More Button - Mobile only */}
        <button
          onClick={() => setReadMore(!readMore)}
          className="mt-4 md:hidden text-blue-600 dark:text-blue-400 font-semibold"
        >
          {readMore ? "Read Less" : "Read More"}
        </button>
      </div>
   
    </div>
  );
}

export default About;
