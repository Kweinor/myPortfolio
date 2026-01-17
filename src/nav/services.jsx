import ServiceCard from "../cards/serviceCard"
import { FaCode, FaPaintBrush, FaPalette } from 'react-icons/fa';   

function Service({darkMode}) {
    const services = [
        
        {
            title: "UI/UX Design",
            icon: <FaPalette size={28}/>,
            content: " I design clean, intuitive, and user-friendly interfaces that enhance user experience. I focus on layout structure, usability, wireframes, design systems, and interactive prototypes that make digital products easy."
        },
        {
            title: "Website Development",
            icon: <FaCode size={28}/>,
            content: "“I build end-to-end applications by combining clean frontend interfaces with secure, scalable backend systems. Using tools like React, Node.js, Express, and MongoDB, I deliver fast and reliable digital experiences.”"
        },
        {
            title: "Graphic Design",
            icon: <FaPaintBrush size={28}/>,
            content: " I create modern and visually appealing graphic designs for branding and marketing — logos, posters, banners, flyers, and social media graphics that help brands stand out and communicate clearly."
        }
    ];  

    return(
        <div id="services" className={`${darkMode ? "bg-[#050014] text-gray-600": "bg-[#f1efe7]"} flex flex-col justify-center  gap-20 p-20 `}>
            <h1 className={`text-2xl md:text-4xl align-middle text-center  ${darkMode? "text-[#503f82]": "text-[#272b53]"} font-bold font-type`}>Services</h1>
            <span className="flex justify-center -mt-20 text-center">“I provide professional design and development services to help you build modern, fast, and user-focused digital products.”</span>
          <div className=" -mt-9">
  <div className="flex flex-col md:flex-row gap-20 items-center justify-center py-20">
    {services.map((service, index) => (
            <div
      key={index}
      className={`transition-transform duration-300  ${
        index === 1 ? "scale-110 z-10" : "scale-100"
      }`}
    >
      <ServiceCard 
        key={index}
        title={service.title}
        icon={service.icon}
        content={service.content}
        darkMode={darkMode}
        color={`${darkMode? "text-[#372863]" :"text-[#4f46e5]"}`}
        contactLink={"#contact"}
      />
    </div>
    ))}
  </div>
</div>
        </div>
    )
}
export default Service;