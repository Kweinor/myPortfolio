import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import {Mail, MapPin, Phone} from "lucide-react"



function Contact({darkMode}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [status, setStatus] = useState("");

  const onSubmit = async (data) => {
    setStatus("");

    try {
      await emailjs.send(
        "service_hu4jy8k",
        "template_7gjfymk",
        data,
        "tvnJRzbLzYfgAI9Xg"
      );

      setStatus("Message sent successfully 🚀");
      reset();
    } catch {
      setStatus("Failed to send message ❌");
    }
  };

  return (
    <section  id="contact" className={`w-full   mx-auto px-4 ${darkMode? "bg-[#050014] text-gray-400" : "bg-amber-50 text-gray-900"}  py-10`}>
      <h2 className={`text-3xl font-bold text-center ${darkMode? "text-[#503f82]": "text-[#272b53]"} mb-6`}>
        Contact Me
      </h2>
      <div className="flex  items-center flex-col md:flex-row justify-center gap-30">

    
<div className="w-70 md:w-130">
  <h1 className={`text-xl ${darkMode? "text-[#503f82]": "text-[#303992]"} font-medium`}>Get In Touch</h1>
  <p>Have something to dicuss? send me a message, let's talk</p>
<div className="flex flex-col -ml-5 md:ml-0 gap-10 mt-3">
  <div className={`w-80 lg:w-120 ${darkMode? "shadow-sm shadow-white/20 " :""} shadow-lg flex items-center  h-20 p-4 rounded-2xl`}>
    <div>
  <Mail className={`inline-block mr-4 ${darkMode? "text-[#503f82]": "text-[#303992]"}`}/>
</div>
<div>
      <p className={`${darkMode ? " text-[#372861] font-bold": "text-[#272b53] font-medium" } `}>Email</p>
      <p>quaynortim062@gmail.com</p>
      </div>
  </div>
   <div className={`w-80 lg:w-120 ${darkMode? "shadow-sm shadow-white/20" :""} shadow-lg flex items-center h-20 p-4 rounded-2xl`}>
    <div>
  <Phone className={`inline-block mr-4 ${darkMode? "text-[#503f82]": "text-[#303992]"}`}/>
</div>
<div>
      <p className={`${darkMode ? " text-[#372861] font-bold": "text-[#272b53] font-medium" } `}>Phone</p>
      <p>0545488267</p>
      </div>
  </div>
  <div className={`w-80 lg:w-120 ${darkMode? "shadow-sm shadow-white/20" :""} shadow-lg flex items-center h-20 p-4 rounded-2xl`}>
<div>
  <MapPin className={`inline-block mr-4 ${darkMode? "text-[#503f82]": "text-[#303992]"}`}/>
</div>
<div>
      <p className={`${darkMode ? " text-[#372861] font-bold": "text-[#050014] font-medium" } `}>Location</p>
      <p>Accra, Ghana</p>
      </div>
  </div>
</div>
</div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`space-y-4 ${darkMode? "bg-[#050014]/20 shadow-sm shadow-white/20 ": "bg-amber-50  shadow-lg"} w-80 lg:w-120  p-6 rounded-2xl`}
      >
        {/* Name */}
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className={`w-full ${darkMode? "border-gray-600":""} p-3 rounded-lg border focus:ring-2 focus:ring-purple-500 outline-none`}
            {...register("user_name", { required: "Name is required" })}
          />
          {errors.user_name && (
            <p className="text-red-500 text-sm">
              {errors.user_name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Your Email"
            className={`w-full ${darkMode? "border-gray-600":""} p-3 rounded-lg border focus:ring-2 focus:ring-purple-500 outline-none`}
            {...register("user_email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.user_email && (
            <p className="text-red-500 text-sm">
              {errors.user_email.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <textarea
            rows="5"
            placeholder="Your Message"
            className={`w-full ${darkMode? "border-gray-600":""} p-3 rounded-lg border focus:ring-2 focus:ring-purple-500 outline-none`}
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
            })}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#272b53] hover:bg-[#272b53] cursor-pointer text-white py-3 rounded-lg transition"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <p className="text-center text-sm text-green-500 mt-2">
            {status}
          </p>
        )}
      </form>
        </div>
    </section>
  );
}

export default Contact;
