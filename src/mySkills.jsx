import { motion } from "framer-motion";

function Skills({ darkMode }) {

  const skills = [
    { name: "React", icon: "react1.png" },
    { name: "JavaScript", icon: "js.webp" },
    { name: "HTML5", icon: "hhtml.svg" },
    { name: "CSS3", icon: "ts.png" },
    { name: "Node.js", icon: "nodejs.png" },
    { name: "Express", icon: "express.png" },
    { name: "MongoDB", icon: "mongo.png" },
    { name: "Git", icon: "git.png" },
    { name: "Figma", icon: "figma.png" },
    { name: "Adobe Photoshop", icon: "photoshop.png" },
    { name: "Adobe Illustrator", icon: "illustrator.png" },
    { name: "Tailwind CSS", icon: "tailwind1.png" },
  ];

  return (
    <section
      className={`${darkMode ? "bg-[#050014] text-gray-600" : "bg-[#f1efe7] text-[#3b2f23]"} py-20`}
    >
      <h1 className={`text-center text-2xl md:text-4xl font-bold ${darkMode? "text-[#503f82]" : "text-[#1f2937]"}`}>Skills</h1>
      <p className="text-center mx-auto max-w-sm">
        The skills, tools and technologies I am really good at:
      </p>

      {/* FULL SCREEN VIEWPORT */}
      <div className="w-screen overflow-hidden mt-14">
        <motion.div
          className="flex gap-16 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 80,
            repeat: Infinity,
          }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center  justify-center min-w-[120px]"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className={`${skill.name == "Figma" && "w-28 h-18",
                              skill.name == "Adobe Illustrator" && "w-18 h-18"
                } w-14 h-14 object-contain`}
              />
              <span className="mt-4 text-sm whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
