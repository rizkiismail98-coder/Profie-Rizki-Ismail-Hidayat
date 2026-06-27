export default function About() {
  return (
    <section className="bg-black py-32">

      <div className="max-w-7xl mx-auto px-8">

        <p className="text-yellow-500 tracking-[5px] mb-4">
          ABOUT ME
        </p>


        <h2 className="text-5xl font-black text-white">

          Information Management Specialist

          <br />

          <span className="text-yellow-500">

            & Frontend Developer

          </span>

        </h2>




        <p className="mt-8 text-zinc-400 max-w-4xl leading-8">

          I am Rizki Ismail Hidayat, a Library and Information Science graduate
          from Universitas Padjadjaran with hands-on experience in digital
          archiving, repository management, metadata organization, and media
          documentation.

          <br />
          <br />

          I have contributed to Surya Citra Media, BRIN, Linguo.id,
          and several digital media organizations while continuously
          developing my skills in frontend and web development.

        </p>





        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">



          <div className="bg-zinc-900 rounded-2xl p-6 border border-yellow-500/20">

            <h3 className="text-yellow-500 font-bold">

              Universitas Padjadjaran

            </h3>

            <p className="text-zinc-400 mt-3">

              Bachelor of Library and Information Science

              <br />

              GPA 3.69

            </p>

          </div>






          <div className="bg-zinc-900 rounded-2xl p-6 border border-yellow-500/20">

            <h3 className="text-yellow-500 font-bold">

              Surya Citra Media

            </h3>

            <p className="text-zinc-400 mt-3">

              1000+ Media Archives

              <br />

              Broadcast Documentation

            </p>

          </div>







          <div className="bg-zinc-900 rounded-2xl p-6 border border-yellow-500/20">

            <h3 className="text-yellow-500 font-bold">

              BRIN

            </h3>

            <p className="text-zinc-400 mt-3">

              1000+ Scientific Articles

              <br />

              Repository Validation

            </p>

          </div>







          <div className="bg-zinc-900 rounded-2xl p-6 border border-yellow-500/20">

            <h3 className="text-yellow-500 font-bold">

              Linguo.id

            </h3>

            <p className="text-zinc-400 mt-3">

              KOL Specialist

              <br />

              Documentation Tracking

            </p>

          </div>



        </div>

      </div>

    </section>
  );
}