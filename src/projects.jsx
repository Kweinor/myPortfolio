import ProjectCard from "./cards/projectCard"
function Project({darkMode}){
  const project = [
    {
        title:"Dashboard",
        description: "A responsive and interactive dashboard built with modern frontend tools, focused on clean UI design, data visualization, and smooth user experience.",
        image: "dasboard.png",
        link: "",
        status: "In Progress"
    },
    {
        title: "Hotel Website",
        description: "A full-stack hotel web application that enables room listings and bookings, built with React, Tailwind CSS, Node.js, Express.js, and MongoDB.",
        image: "hotel.png",
        link: "https://github.com/Kweinor/Hotel-Website-backend-/tree/clean-main",
        status: "In Progress"
    },
    {
        title:  "School Management System",
        description: "A user-friendly frontend application for managing students, classes, attendance, and results, designed with React and Tailwind CSS.",
        image: "School.png",
        link: "https://github.com/Kweinor/Frontend-SchoolManagementSystem.git",
        status: "In Progress"
    },
    {
        title: "Church Flyer Design",
        description: "A creative project focused on visually appealing designs that communicate ideas clearly.",
        image: "flyer1.JPG",
        link: "#"
    },
    {
        title: "Event Flyer Design",
        description: "A creative project focused on visually appealing designs that communicate ideas clearly.",
        image: "flyer2.JPG",
   
    },
    {
        title: "Business Flyer Design",
        description: "A creative project focused on visually appealing designs that communicate ideas clearly.",
        image: "flyer3.JPG",
    }
  ]
    return(
        <div id="projects" className={` ${darkMode ? " bg-[#050014] text-gray-600 ": "bg-[#f1efe7]"} text-gray-800`}>
        <div className=" py-20">
      <h2 className={`text-2xl md:text-4xl font-bold ${darkMode? "text-[#503f82]": "text-[#272b53]"} text-center pb-4`}>My Projects</h2>
      <div className="flex flex-col gap-6 justify-center items-center">
        <div className="w-full md:w-96">
         <h4 className="flex justify-center">Showcasing My Work</h4>
         <p className="flex  justify-center align-middle text-center w-full md:w-100">Explore a selection of my recent projects that highlight my skills and expertise in web development and design.</p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 ">
     
        {project.map((proj, index)=>{
            return(
                <ProjectCard 
                key={index}
                index={index}
                title={proj.title}
                description={proj.description}
                image={proj.image}
                link={proj.link}
                status={proj.status}
                darkMode={darkMode}
                />
            )
        })}
        </div>
      </div>
      </div>
      </div>
    )
}
export default Project;