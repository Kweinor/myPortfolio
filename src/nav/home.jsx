import MenuBar from '../bar.jsx';
import NavBar from '../navBar.jsx'

function Home({darkMode, setDarkMode}) {





  return (
    <div id="home" className={`${darkMode ? " bg-[#050014] text-gray-600 ": "bg-[#f8f5ee] text-[#3b2f23]"} h-full pt-20 pb-3 md:w-full  sm:w-full`}>
      <div className='mt-3 '>
    <NavBar darkMode={darkMode} setDarkMode={setDarkMode} contact={"#contact"}/>
    <MenuBar darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
      <div className='flex flex-col items-center lg:flex-row justify-center lg:justify-between mx-4 py-10 lg:mx-16'>
      <div className='w-80 md:w-96 -mt-15 md:mt-30 lg:w-180 flex flex-col'> 
   
      <span className='text-lg md:text-2xl text-center lg:text-left '>Hi, I'm Timothy Quaynor</span>
      <h1 className={`text-3xl md:text-4xl lg:text-7xl text-center lg:text-left ${darkMode? "text-[#9194a1]": "text-[#1f2937]"}  font-bold mt-3 font-type-3 `}>Full-stack Developer <span className={`text-2xl lg:text-6xl ${darkMode? "text-[#473a6c]": "text-[#4f46e5]"}`}>& Graphic Designer</span></h1>
      <p className='mt-3 text-center lg:text-left'>  I am a Fullstack Developer passionate about building modern, scalable, and user-friendly web applications. I enjoy working across both frontend and backend, turning complex problems into elegant solutions. </p>
      <div className='flex justify-center lg:-ml-82 gap-6 mt-6'>
        <button className={`${darkMode ? "bg-[#503f82] text-[#9194a1] transition hover:border hover:border-[#503f82] hover:text-[#503f82] hover:bg-transparent" : "bg-[#1e2a5a] hover:border hover:text-[#1e2a5a] hover:border-[#1e2a5a] hover:bg-transparent text-amber-50" } px-3 md:px-7 py-2 backdrop-blur-lg rounded-4xl`}><a   target="_blank"   rel="noopener noreferrer" href='/Timothy Quaynor CV.pdf'>Download CV</a></button>
        <button className={`${darkMode ? "hover:bg-[#503f82] hover:text-white transition text-gray-600" : "border-[#503f82] text-[#503f82] hover:bg-[#1e2a5a] hover:text-white transition" } px-3 md:px-7 cursor-pointer py-2 backdrop-blur-lg border rounded-4xl `}> <a href={"#contact"}>Hire Me</a> </button>
      </div>
      </div>
    <figure className='mt-8 md:mt-18'>
      <img  className='w-70 md:w-102 max-w-full h-auto' src="port.png" alt="" />
    </figure>
     </div>
    <div className={`${darkMode? "bg-[#1f2937] text-gray-500" : "bg-black/10 text-blue-950 "} mt-8 md:mt-15 text-3xl  backdrop-blur-lg py-5  flex justify-center overflow-hidden `}>
      <p className='flex gap-7 animate-scroll whitespace-nowrap font-type-2'>
      Turning ideas into beautiful, functional and visually      stunning product ||    Design    ⭐️    Code    ⭐️    Creativity
      </p>
    </div>
   
    </div>
  )
}
export default Home;