
import { FaMoon, FaSun } from "react-icons/fa";


function NavBar({darkMode, setDarkMode, contact}) {

  return (
<div className="fixed top-3 z-50 items-center justify-between hidden lg:flex w-full">
<div className={`flex pt-3 max-w-7xl backdrop-blur-xl ${darkMode? "bg-[#1f2937] text-gray-600" : "bg-black/10"}  px-10 rounded-4xl text-blue-950 py-3 mx-auto w-full justify-between items-center`}>
                  <h1 className={`font-bold allura-font text-3xl ${darkMode? "text-[#9194a1]" : "text-[#1f2937]"} `}>tkquaynor.</h1>
      <div className='flex  gap-6'>
        <a href='#home' className='scroll-smooth cursor-pointer hover:bg-black/30 hover:text-white py-2 px-4 rounded-3xl transition'>Home</a>
        <a href='#services' className='scroll-smooth cursor-pointer hover:bg-black/30 hover:text-white py-2 px-4 rounded-3xl transition'>Service</a>
        <a href='#projects' className='scroll-smooth cursor-pointer hover:bg-black/30 hover:text-white py-2 px-4 rounded-3xl transition'>Projects</a>
        <a href='#about' className='scroll-smooth cursor-pointer hover:bg-black/30 hover:text-white py-2 px-4 rounded-3xl transition'>About</a>
        <a href='#contact' className='scroll-smooth cursor-pointer hover:bg-black/30 hover:text-white py-2 px-4 rounded-3xl transition'>Contact</a>
      </div>
      <div className="flex justify-center items-center gap-2">
        <button className='bg-black/30 py-2 px-5 cursor-pointer rounded-4xl  text-white'><a href={contact}>Connect</a> </button>
         <button
        className="ml-4 p-2 rounded-full bg-gray-500 text-white flex items-center justify-center sm:block "
        onClick={() => setDarkMode((prev) => !prev)}
        aria-label="Toggle dark mode"
      >
        {darkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
      </button>
      </div>
    </div>
    </div>
  )
}
export default NavBar