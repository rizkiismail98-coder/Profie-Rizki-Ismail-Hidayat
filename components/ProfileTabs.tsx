"use client";

import { useState } from "react";

export default function ProfileTabs() {
  const [active, setActive] = useState("about");
  const [fade, setFade] = useState(true);

  const changeTab = (value: string) => {
    setFade(false);

    setTimeout(() => {
      setActive(value);
      setFade(true);
    }, 150);
  };

  const TabButton = ({ label, value }: any) => (
    <button
      onClick={() => changeTab(value)}
      className={`px-5 py-2 rounded-full border transition duration-300 ${
        active === value
          ? "bg-yellow-500 text-black"
          : "border-yellow-500 text-yellow-400"
      }`}
    >
      {label}
    </button>
  );

  return (
    <section className="py-20 bg-black text-white min-h-screen">

      {/* BUTTONS */}
      <div className="flex justify-center gap-4 mb-10">
        <TabButton label="About Me" value="about" />
        <TabButton label="Skills" value="skills" />
        <TabButton label="Experience" value="experience" />
        <TabButton label="Contact" value="contact" />
      </div>

      {/* CONTENT */}
      <div
        className={`max-w-6xl mx-auto px-6 transition-opacity duration-300 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >

        {/* ================= ABOUT ================= */}
        {active === "about" && (
          <div className="transition-all duration-300">
            <p className="text-yellow-500 tracking-[5px] mb-4">
              ABOUT ME
            </p>

            <h2 className="text-5xl font-black text-white">
              Information Management Specialist <br />
              <span className="text-yellow-500">
                & Frontend Developer
              </span>
            </h2>

            <p className="mt-8 text-zinc-400 max-w-4xl leading-8">
              Library and Information Science graduate from Universitas Padjadjaran
              with experience in digital archiving, metadata management, repository systems,
              and broadcast documentation.
              <br /><br />
              I also learn frontend web skills while working in media, research, and digital content industries.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

              <div className="bg-zinc-900 rounded-2xl p-6 border border-yellow-500/20 hover:scale-[1.02] transition">
                <h3 className="text-yellow-500 font-bold">Universitas Padjadjaran</h3>
                <p className="text-zinc-400 mt-3">
                  Library & Information Science <br />
                  GPA 3.69
                </p>
              </div>

              <div className="bg-zinc-900 rounded-2xl p-6 border border-yellow-500/20 hover:scale-[1.02] transition">
                <h3 className="text-yellow-500 font-bold">Media & Broadcast</h3>
                <p className="text-zinc-400 mt-3">
                  SCTV & Indosiar Experience <br />
                  Archive + News Operations
                </p>
              </div>

              <div className="bg-zinc-900 rounded-2xl p-6 border border-yellow-500/20 hover:scale-[1.02] transition">
                <h3 className="text-yellow-500 font-bold">BRIN</h3>
                <p className="text-zinc-400 mt-3">
                  Scientific Repository <br />
                  Data Validation
                </p>
              </div>

              <div className="bg-zinc-900 rounded-2xl p-6 border border-yellow-500/20 hover:scale-[1.02] transition">
                <h3 className="text-yellow-500 font-bold">Digital Content</h3>
                <p className="text-zinc-400 mt-3">
                  SEO, Copywriting <br />
                  KOL & Marketing
                </p>
              </div>

            </div>
          </div>
        )}

        {/* ================= SKILLS ================= */}
        {active === "skills" && (
          <div className="transition-all duration-300">
            <p className="text-yellow-500 tracking-[6px] text-sm">
              SKILLS
            </p>

            <h2 className="text-5xl font-bold mt-4">
              Technical Expertise
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

              <div className="bg-white/5 backdrop-blur-xl border border-yellow-500/20 rounded-2xl p-6 hover:scale-[1.02] transition">
                <h3 className="text-yellow-400 font-semibold mb-4">⚡ Frontend</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Tailwind</li>
                  <li>React</li>
                  <li>Next.js</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-yellow-500/20 rounded-2xl p-6 hover:scale-[1.02] transition">
                <h3 className="text-yellow-400 font-semibold mb-4">📊 Analytics</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Power BI</li>
                  <li>Tableau</li>
                  <li>Looker Studio</li>
                  <li>Excel</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-yellow-500/20 rounded-2xl p-6 hover:scale-[1.02] transition">
                <h3 className="text-yellow-400 font-semibold mb-4">🗂 Archives</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Metadata</li>
                  <li>OJS</li>
                  <li>EDMS</li>
                  <li>Repository</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-yellow-500/20 rounded-2xl p-6 hover:scale-[1.02] transition">
                <h3 className="text-yellow-400 font-semibold mb-4">⚙ ERP</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Odoo</li>
                  <li>Accurate</li>
                  <li>Q-ERP</li>
                  <li>Workflow Systems</li>
                </ul>
              </div>

            </div>
          </div>
        )}

        {/* ================= EXPERIENCE ================= */}
        {active === "experience" && (
          <div className="transition-all duration-300">
            <p className="text-yellow-500 tracking-[6px] text-sm">
              EXPERIENCE
            </p>

            <h2 className="text-5xl font-bold mt-4">
              Work & Professional Journey
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mt-16">

              <div className="bg-white/5 backdrop-blur-xl border border-yellow-500/20 rounded-2xl p-6 hover:scale-[1.02] transition">
                <h3 className="text-yellow-400 font-semibold text-lg mb-2">
                  SCTV / Indosiar
                </h3>
                <p className="text-gray-300 text-sm">
                  Broadcast Operator & Library Management
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-yellow-500/20 rounded-2xl p-6 hover:scale-[1.02] transition">
                <h3 className="text-yellow-400 font-semibold text-lg mb-2">
                  BRIN
                </h3>
                <p className="text-gray-300 text-sm">
                  Research Repository Intern
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-yellow-500/20 rounded-2xl p-6 hover:scale-[1.02] transition">
                <h3 className="text-yellow-400 font-semibold text-lg mb-2">
                  Content Writer
                </h3>
                <p className="text-gray-300 text-sm">
                  SEO, Copywriting, KOL Specialist
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-yellow-500/20 rounded-2xl p-6 hover:scale-[1.02] transition">
                <h3 className="text-yellow-400 font-semibold text-lg mb-2">
                  Organization
                </h3>
                <p className="text-gray-300 text-sm">
                  Leadership & Documentation
                </p>
              </div>

            </div>
          </div>
        )}
        {/* ================= CONTACT ================= */}
{active === "contact" && (
  <div className="transition-all duration-300">

    <p className="text-yellow-500 tracking-[6px] text-sm">
      CONTACT
    </p>

    <h2 className="text-5xl font-bold mt-4">
      Get In Touch
    </h2>

    <div className="grid md:grid-cols-2 gap-6 mt-12">

      {/* EMAIL */}
      <a
        href="mailto:rizkiismail98@gmail.com"
        className="bg-white/5 backdrop-blur-xl border border-yellow-500/20 rounded-2xl p-6 hover:scale-[1.02] transition block"
      >
        <h3 className="text-yellow-400 font-semibold text-lg mb-2">
          Email
        </h3>
        <p className="text-gray-300">
          rizkiismail98@gmail.com
        </p>
      </a>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/6281532848520"
        target="_blank"
        className="bg-white/5 backdrop-blur-xl border border-yellow-500/20 rounded-2xl p-6 hover:scale-[1.02] transition block"
      >
        <h3 className="text-yellow-400 font-semibold text-lg mb-2">
          WhatsApp
        </h3>
        <p className="text-gray-300">
          0815-3284-8520
        </p>
      </a>

    </div>
  </div>
)}

      </div>
    </section>
  );
}