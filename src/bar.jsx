import {Menu} from 'lucide-react';
import { FaSun, FaMoon } from "react-icons/fa";
import MobileMenu from './menu';
import { useState } from 'react';

function MenuBar({darkMode, setDarkMode}) {
    const [open, setOpen] = useState(false);
  
    return(
       <div className={`fixed top-0 left-0 right-0 z-50 ${darkMode?  "bg-[#050014]/70": "bg-[#f8f5ee]/70"}  backdrop-blur-lg py-4 flex md:hidden justify-between items-center px-5`}>
      
      {open && <MobileMenu setOpen={setOpen}/>}
          <div>
                  <h1 className={`font-bold arvo-font text-xl ${darkMode? "text-[#503f82]" : "text-[#4f46e5]"} `}>tk<span className={`${darkMode? "text-[#9194a1]" : "text-[#1f2937]"}`}>quaynor</span>.</h1>
          </div>
          <div className='flex justify-between items-center gap-3'>
           <button
        className="ml-4 p-1.5 rounded-full bg-gray-500 text-white flex items-center justify-center sm:block "
        onClick={() => setDarkMode((prev) => !prev)}
        aria-label="Toggle dark mode"
      >
        {darkMode ? <FaSun size={13} /> : <FaMoon size={13} />}
      </button>
      <button onClick={() => setOpen(true)}>
        <Menu size={26} />
      </button>
      </div>
        </div>
    )
}
export default MenuBar