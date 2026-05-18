import { FiInstagram, FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";
import { useState } from "react";

const socials = [
  { icon: <FiInstagram className="text-lg" />, label: "@nahzul",        href: "#" },
  { icon: <FiGithub className="text-lg" />,    label: "github/nahzul",  href: "#" },
  { icon: <FiLinkedin className="text-lg" />,  label: "linkedin/nahzul",href: "#" },
  { icon: <FiMail className="text-lg" />,      label: "nahzul@email.com",href: "mailto:nahzul@email.com" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    console.log(form);
    setSent(true);
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between gap-12 px-6 md:px-20 lg:px-50 bg-[#fafafa] pt-24 pb-16">

      {/* KIRI — info kontak */}
      <div className="max-w-sm text-center md:text-left flex flex-col gap-6">
        <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
          Contact
        </span>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">
          Let's Work <br /> Together 🤝
        </h1>
        <p className="text-gray-500 leading-relaxed">
          Ayo bikin project baresama 😊
        </p>

        <div className="flex flex-col gap-3">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-600 hover:text-black transition group justify-center md:justify-start"
            >
              <div className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-full group-hover:bg-black group-hover:text-white group-hover:border-black transition">
                {s.icon}
              </div>
              <span className="text-sm">{s.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* KANAN — form */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-sm p-8 flex flex-col gap-5">
        {sent ? (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-xl font-bold text-black">Pesan Terkirim!</h2>
            <p className="text-gray-500 mt-2 text-sm">Aku akan segera membalasmu.</p>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Nama</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Nama kamu"
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-black transition"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="email@kamu.com"
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-black transition"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Pesan</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tuliskan pesanmu di sini..."
                rows={5}
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-black transition resize-none"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="flex items-center justify-center gap-2 bg-black text-white py-3 rounded-full hover:bg-gray-800 transition text-sm cursor-pointer"
            >
              <FiSend /> Kirim Pesan
            </button>
          </>
        )}
      </div>
    </section>
  );
}