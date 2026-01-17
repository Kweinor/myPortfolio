import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";


function Footer({darkMode}){
   
            
    return(
        <div className={`${darkMode? "bg-[#090121] text-gray-300": "bg-amber-50 text-gray-800"}`}>
            <div className="bg-black/10">
         <div className="p-10 lg:p-20 justify-center items-center  gap-15  flex flex-col md:flex-row">
           <div className="w-80 md:w-120 ">
            <h3 className={`text-2xl ${darkMode? "text-[#473a6c]" :"text-blue-900"} font-bold text-left`}>Timothy Quaynor</h3>
            <p className="text-left">
                Fullstack Developer & Designer passionate about building clean functional and user-friendly digital product
            </p>
            <div className="flex gap-6 mt-4">
              <a href="https://github.com/Kweinor" target="_blank" rel="noopener noreferrer" className={`p-3 shadow-lg rounded-2xl ${darkMode? "bg-[#090121] shadow-lg shadow-amber-50/10 text-gray-300": " text-gray-800"}`}> <FaGithub size={24}/> </a> 
               <a href="mailto:quaynortim062@gmail.com" className={`p-3 shadow-lg rounded-2xl ${darkMode? "bg-[#090121] shadow-lg shadow-amber-50/10 text-gray-300": " text-gray-800"}`}> <MdOutlineMailOutline size={24}/></a>
               <a href="https://www.linkedin.com/in/timothy-quaynor" target="_blank" rel="noopener noreferrer" className={`p-3 shadow-lg rounded-2xl ${darkMode? "bg-[#090121] shadow-lg shadow-amber-50/10 text-gray-300": " text-gray-800"}`}><FaLinkedin size={24}/></a>
            </div>
           </div>
           <div className="flex flex-col md:flex-row gap-5">
           <div className="flex flex-col justify-between gap-1 w-50 -ml-30 md:ml-22">

            <p className={`${darkMode? "text-[#473a6c]" :"text-blue-900"} font-bold text-xl` }>Quick Links</p>
            <a href="#home" className="scroll-smooth" >Home</a>
              <a href="#services" className="scroll-smooth">Services</a>
              <a href="#projects" className="scroll-smooth">Projects</a>
              <a href="#about" className="scroll-smooth">About</a>
              <a href="#contact" className="scroll-smooth">Contact</a>
         
           </div>
           <div className="flex flex-col justify-between gap-1 -ml-30 md:ml-22">
            <p className={`${darkMode? "text-[#473a6c]" :"text-blue-900"} font-bold text-xl`}>Service</p>
            <p>UI/UX Design</p>
            <p>School Management</p>
            <p>Busines Site</p>
            <p>Flyers</p>
           </div>
           </div>
           <div className="flex flex-col  gap-4 -ml-20 md:ml-0 pt-4">
     <div className="flex  items-center gap-2">  <BsTelephoneFill size={15}/><p>+233 (0) 545 488 267</p></div> 
     <div className="flex  items-center gap-2">  <MdOutlineMailOutline size={18}/><p>quaynortim062@gmail.com</p></div> 
           </div>
            </div>
         
         <div className={` bottom-2 text-sm border-t w-full p-5 text-center`}>
   <span>&copy; 2026 Timothy Kweinor Quaynor. All rights reserved.</span> 
</div>
</div>
        </div>
    )
}
export default Footer;