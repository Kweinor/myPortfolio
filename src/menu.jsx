
import { Menu, X } from "lucide-react";

function MobileMenu({setOpen}) {
  //const [open, setOpen] = useState(true);

  return (
    <div className="sm:hidden">
      {/* Menu Icon */}
     

      {/* Overlay */}
      
        <div className="fixed inset-0 backdrop-blur-lg z-50">
          
          {/* Slide Menu */}
          <div className="fixed top-0 left-0 h-80 w-full bg-white  p-6 shadow-lg">
            
            {/* Close Button */}
            <button
              className="mb-8"
              onClick={() => setOpen(false)}
            >
              <X size={28} />
            </button>

            {/* Menu Links */}
            <nav className="flex flex-col gap-6 text-lg font-medium">
              <a href="#home" className="scroll-smooth" onClick={() => setOpen(false)}>Home</a>
              <a href="#services" className="scroll-smooth" onClick={() => setOpen(false)}>Services</a>
              <a href="#projects" className="scroll-smooth" onClick={() => setOpen(false)}>Projects</a>
              <a href="#about" className="scroll-smooth" onClick={() => setOpen(false)}>About</a>
              <a href="#contact" className="scroll-smooth" onClick={() => setOpen(false)}>Contact</a>
            </nav>
          </div>
        </div>
    
    </div>
  );
}

export default MobileMenu;
