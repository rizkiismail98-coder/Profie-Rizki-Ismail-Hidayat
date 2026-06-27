export default function Skills() {
  return (
    <section className="py-32 bg-black text-white">
      
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <p className="text-yellow-500 tracking-[6px] text-sm">
          SKILLS
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Technical Expertise
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

          {/* FRONTEND */}
          <div className="
            bg-white/5 backdrop-blur-xl 
            border border-yellow-500/20 
            rounded-2xl p-6
            transition-all duration-300
            hover:-translate-y-2
            hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]
            hover:border-yellow-400/40
          ">
            <h3 className="text-yellow-400 font-semibold mb-4">
              ⚡ Frontend
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Tailwind</li>
              <li>React</li>
              <li>Next.js</li>
            </ul>
          </div>

          {/* ANALYTICS */}
          <div className="
            bg-white/5 backdrop-blur-xl 
            border border-yellow-500/20 
            rounded-2xl p-6
            transition-all duration-300
            hover:-translate-y-2
            hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]
            hover:border-yellow-400/40
          ">
            <h3 className="text-yellow-400 font-semibold mb-4">
              📊 Analytics
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>Power BI</li>
              <li>Tableau</li>
              <li>Looker Studio</li>
              <li>Excel</li>
            </ul>
          </div>

          {/* ARCHIVES */}
          <div className="
            bg-white/5 backdrop-blur-xl 
            border border-yellow-500/20 
            rounded-2xl p-6
            transition-all duration-300
            hover:-translate-y-2
            hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]
            hover:border-yellow-400/40
          ">
            <h3 className="text-yellow-400 font-semibold mb-4">
              🗂 Archives
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>Metadata</li>
              <li>OJS</li>
              <li>EDMS</li>
              <li>Repository</li>
            </ul>
          </div>

          {/* ERP */}
          <div className="
            bg-white/5 backdrop-blur-xl 
            border border-yellow-500/20 
            rounded-2xl p-6
            transition-all duration-300
            hover:-translate-y-2
            hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]
            hover:border-yellow-400/40
          ">
            <h3 className="text-yellow-400 font-semibold mb-4">
              ⚙ ERP
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>Odoo</li>
              <li>Accurate</li>
              <li>Q-ERP</li>
              <li>Workflow Systems</li>
            </ul>
          </div>

        </div>
      </div>

    </section>
  );
}