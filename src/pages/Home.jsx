import {
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
  FiInstagram,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import { Link } from "react-router-dom";
export default function Home(){
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-20 lg:px-50 bg-[#fafafa] pt-24">
      {/* IMAGE (ATAS DI MOBILE) */}
      <div className="order-1 md:order-2 flex justify-center mb-8 md:mb-0 md:w-1/2 relative">
        {/* BLOB */}
        <div className="absolute w-72 h-72  bg-gray-300 rounded-full blur-3xl opacity-30"></div>

        {/* IMAGE */}
        <img
          src="/images/kecoalucu.jpg"
          alt="profile"
          className="relative w-58 h-58 md:w-80 md:h-80 object-cover rounded-2xl shadow-xl border border-gray-200"
        />
      </div>

      {/* TEXT */}
      <div className="order-2 md:order-1 max-w-xl text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-black">
          Hi I'm Nahzul <br />
          <span className="text-black">Balaghoh</span>
        </h1>

        <p className="text-gray-500 mt-4 max-w-md leading-relaxed text-center md:text-left mx-auto md:mx-0">
          Web Developer yang fokus pada pembuatan website modern menggunakan
          React dan Teknologi Modern.
        </p>

        {/* BUTTON */}
        <div className="flex gap-4 mt-6 justify-center md:justify-start">
          <button className="bg-black cursor-pointer text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            Download CV
          </button>

          <button className="border cursor-pointer border-black text-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition">
            Portfolio
          </button>
        </div>

        <div className="flex gap-4 mt-6 justify-center md:justify-start">
          <div className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full hover:bg-black hover:text-white transition cursor-pointer">
            <FiInstagram className="text-lg" />
          </div>

          <div className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full hover:bg-black hover:text-white transition cursor-pointer">
            <FiGithub className="text-lg" />
          </div>

          <div className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full hover:bg-black hover:text-white transition cursor-pointer">
            <FiLinkedin className="text-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
