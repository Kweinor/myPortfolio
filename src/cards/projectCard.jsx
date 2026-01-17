import { LuGithub } from "react-icons/lu";

function ProjectCard({image, title, description, link, status, index, darkMode}) {
  const getStatusColor = (stat) => {
    switch(stat) {
      case "Completed":
        return "bg-green-500";
      case "In Progress":
        return "bg-blue-500";
      case "Ongoing":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };
   
  return (
    <div className={`${darkMode? "bg-[#0d1028]": "bg-black/5"} rounded-lg shadow-lg overflow-hidden hover:scale-105 transition duration-300 w-80 relative`}>
      {status && (
        <div className={`absolute top-2 right-2 ${getStatusColor(status)} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
          {status}
        </div>
      )}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className={`text-xl ${darkMode? "text-[#9194a1]" :"text-[#1e246b]"} font-semibold mb-2`}>{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        {index < 3 && (
          <a
            href={link}
            className="inline-flex items-center gap-2 text-blue-900 hover:text-blue-700 font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LuGithub size={20} />
            View on GitHub
          </a>
        )}
      </div>
    </div>
  );
}
export default ProjectCard;