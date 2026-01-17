function ServiceCard({icon,content,title,color, bgColor, darkMode, contactLink}) {
    return(
    <div className={`w-80 md:w-85 flex flex-col hover:border hover:border-[#272b53] h-85 p-6 hover:scale-105 transition duration-300 ${darkMode? "bg-[#0d1028] text-gray-600 "  : "bg-black/10 text-gray-800"} backdrop-blur-lg  rounded-3xl`} onMouseEnter={"hover:border hover:border-[#272b53]"}>
        <div>
            <span className=" gap-6 text-xl "><div className={`${bgColor} ${color} flex justify-center p-3`}>{icon}</div>
                <div className={`flex justify-center ${darkMode? "text-[#9194a1]" :"text-[#1e246b]"}`}>{title}</div>
            </span>
        </div>
        <div className="mt-2">
            <p>{content}</p>
        </div>
        <button className={`w-full rounded-4xl cursor-pointer text-amber-50 ${darkMode? "bg-[#372863] " : "bg-[#272b53]"} mt-3  h-8`}><a href={contactLink}>Hire me</a></button>
     </div>
    )
}
export default ServiceCard;
