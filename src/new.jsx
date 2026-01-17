import { FaMoon, FaSun } from "react-icons/fa";
function NavBar({ darkMode, setDarkMode }) {
  return (
   <header className={`${darkMode ? "bg-[#1f2937]" : "bg-black/10"} w-screen backdrop-blur-xl`}>
  <div className="hidden lg:flex max-w-7xl mx-auto px-6 py-3 justify-between items-center rounded-3xl">
    ...
    <button className="bg-black/30 py-2 px-5 rounded-3xl text-white">
      Connect
    </button>
    <button
      className="ml-2 p-2 rounded-full bg-gray-500 text-white flex items-center justify-center"
      onClick={() => setDarkMode(prev => !prev)}
      aria-label="Toggle dark mode"
    >
      {darkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
    </button>
  </div>
</header>

  );
}
export default NavBar;