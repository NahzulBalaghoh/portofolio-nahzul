import { FiInstagram, FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";
import kecoa from "../assets/kecoalucu.jpg";
const skills = [
  { category: "Frontend", items: ["React", "Tailwind CSS", "Next.js", "TypeScript"] },
  { category: "Tools",    items: ["Git", "Figma", "VS Code"] },
];

export default function About() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between gap-12 px-6 md:px-20 lg:px-50 bg-[#fafafa] pt-24 pb-16">

      {/* FOTO */}
      <div className="order-1 md:order-2 flex justify-center md:w-1/2">
        <div className="relative">
          <div className="absolute w-72 h-72 bg-gray-300 rounded-full blur-3xl opacity-30" />
          <img
            src={kecoa}
            alt="profile"
            className="relative w-58 h-58 md:w-80 md:h-80 object-cover rounded-2xl shadow-xl border border-gray-200"
          />
          <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-black -z-10" />
        </div>
      </div>

      {/* KONTEN */}
      <div className="order-2 md:order-1 max-w-xl text-center md:text-left flex flex-col gap-5">
        <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
          About Me
        </span>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">
          Halo, Aku <br />
          <span className="text-black">Nahzul Balaghoh</span> 👋
        </h1>

        <p className="text-gray-500 leading-relaxed text-center md:text-left">
          Hallo teman teman saya merupakan mahasiswa Politeknik Negeri Malang, Jurusan Teknologi Informasi, Prodi D-4 Teknik Informatika
        </p>

        {/* SKILLS */}
        <div className="flex flex-col gap-3">
          {skills.map((group) => (
            <div key={group.category} className="flex items-start gap-3 justify-center md:justify-start">
              <span className="text-sm font-semibold text-gray-400 w-20 pt-1 text-left">
                {group.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-full text-gray-700 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* SOCIALS + CV */}
        <div className="flex items-center gap-4 justify-center md:justify-start mt-2">
          {[
            { icon: <FiInstagram className="text-lg" />, href: "https://www.instagram.com/_sinhzl?igsh=MXJ0aGkxOGUyMTM2bA==" },
            { icon: <FiGithub className="text-lg" />, href: "https://github.com/NahzulBalaghoh" },
            { icon: <FiLinkedin className="text-lg" />, href: "https://linkedin.com/in/nahzul-balaghoh" },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full hover:bg-black hover:text-white transition cursor-pointer"
            >
              {s.icon}
            </a>
          ))}

          <a
            href="/cv.pdf"
            download
            className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition text-sm"
          >
            <FiDownload /> Download CV
          </a>
        </div>
      </div>
    </section>
  );
}