function WorkProcess({darkMode}) {
  const steps = [
    {
      step: "01",
      title: "Discover",
      desc: "Understanding project goals, target audience, and features before starting.",
    },
    {
      step: "02",
      title: "Design",
      desc: "Creating clean wireframes and UI designs using Figma.",
    },
    {
      step: "03",
      title: "Develop",
      desc: "Building fast, responsive, and scalable applications with modern tools.",
    },
    {
      step: "04",
      title: "Deliver",
      desc: "Testing, deploying, and ensuring everything works perfectly.",
    },
  ];

  return (
    <div className={`py-0 ${ darkMode?  "bg-[#0B1226]": "bg-[#f8f5ee]   text-gray-800"}`}>
        <div className="bg-black/10 backdrop-blur-lg py-20">
      <h2 className={`text-4xl font-bold text-center ${darkMode? "text-[#503f82]": "text-[#503f82]"} mb-12`}>My Work Process</h2>
      <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
       <div className="pl-4 md:pl-12 w-full md:w-96 lg:w-140">
        <h4 className={`text-2xl flex justify-center font-medium ${darkMode? "text-[#9194a1]" :"text-[#130b29]"} text-center`}>Turning Ideas Into Impact</h4>
        <p className={`text-center w-full ${darkMode? "text-gray-500" :"text-gray-800"} lg:180`}>I follow a structured and collaborative process to deliver high-quality results.
From understanding your goals to designing, building and deploying your product, every step is handled with clarity and purpose.</p>
       </div>
      <div className="flex flex-col lg:grid md:grid-cols-2 gap-20 lg:gap-10 max-w-6xl mx-auto px-5">
        {steps.map((item, index) => (
          <div
            key={index}
 className={`${darkMode? "bg-[#050014]/70":"bg-[#f8f5ee]"} p-6 rounded-2xl shadow-xl w-80 hover:scale-105 transition duration-300
        ${index % 2 === 1 ? "translate-y-10" : ""}  /* Stagger without changing size */
      `}        >
            <h3 className="text-5xl font-extrabold text-gray-700">{item.step}</h3>
            <h4 className={`text-xl ${darkMode? "text-[#545887]" : ""} font-semibold mt-3`}>{item.title}</h4>
            <p className="text-[#6b7280] mt-2 ">{item.desc}</p>
          </div>
        ))}
      </div>
      </div>
      </div>
    </div>
  );
}

export default WorkProcess;
