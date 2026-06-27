export default function Experience() {
  return (
    <section className="py-32 bg-black text-white" id="experience">

      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <p className="text-yellow-500 tracking-[6px] text-sm">
          EXPERIENCE
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Work & Professional Journey
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6 mt-16">

          {/* SCTV / INDOSIAR */}
          <div className="
            bg-white/5 backdrop-blur-xl
            border border-yellow-500/20
            rounded-2xl p-6
            transition-all duration-300
            hover:-translate-y-2
            hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]
            hover:border-yellow-400/40
          ">
            <h3 className="text-yellow-400 font-semibold text-lg mb-2">
              Library Program Service & Broadcast Operator
            </h3>

            <p className="text-gray-400 text-sm mb-4">
              PT Surya Citra Media (SCTV & Indosiar) | 2021 – 2025
            </p>

            <p className="text-gray-300 text-sm leading-relaxed">
              Managed broadcast materials, metadata input (GEN21 system), cue sheets, and archive workflows.
              Ensured quality control for broadcast content and handled 1000+ archived media assets.
              Supported ingestion using MAM, Quantel, Metus, and XDS systems.
            </p>
          </div>

          {/* BRIN */}
          <div className="
            bg-white/5 backdrop-blur-xl
            border border-yellow-500/20
            rounded-2xl p-6
            transition-all duration-300
            hover:-translate-y-2
            hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]
            hover:border-yellow-400/40
          ">
            <h3 className="text-yellow-400 font-semibold text-lg mb-2">
              Research Repository Intern
            </h3>

            <p className="text-gray-400 text-sm mb-4">
              BRIN (Badan Riset dan Inovasi Nasional) | 2025 – 2026
            </p>

            <p className="text-gray-300 text-sm leading-relaxed">
              Acquired and validated 1000+ scientific articles in repository systems.
              Assisted metadata migration to OJS platform and ensured data accuracy for publications.
            </p>
          </div>

          {/* CONTENT */}
          <div className="
            bg-white/5 backdrop-blur-xl
            border border-yellow-500/20
            rounded-2xl p-6
            transition-all duration-300
            hover:-translate-y-2
            hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]
            hover:border-yellow-400/40
          ">
            <h3 className="text-yellow-400 font-semibold text-lg mb-2">
              Content Writer & Digital Marketing
            </h3>

            <p className="text-gray-400 text-sm mb-4">
              Multiple Companies (2021 – 2024)
            </p>

            <p className="text-gray-300 text-sm leading-relaxed">
              Content writing, copywriting, KOL/influencer research, trend analysis,
              and editorial workflow management across digital platforms.
            </p>
          </div>

          {/* ORGANIZATION */}
          <div className="
            bg-white/5 backdrop-blur-xl
            border border-yellow-500/20
            rounded-2xl p-6
            transition-all duration-300
            hover:-translate-y-2
            hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]
            hover:border-yellow-400/40
          ">
            <h3 className="text-yellow-400 font-semibold text-lg mb-2">
              Organizational Experience
            </h3>

            <p className="text-gray-400 text-sm mb-4">
              Universitas Padjadjaran | 2022 – 2023
            </p>

            <p className="text-gray-300 text-sm leading-relaxed">
              Roles in Organizational Development, Alumni Relations, Editorial Management,
              and Logistics Division Head. Managed coordination and documentation flow.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}