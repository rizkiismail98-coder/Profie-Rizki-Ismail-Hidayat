"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center">

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">


        {/* Kiri */}

        <div>

          <p className="text-yellow-500 tracking-[5px] mb-4">
            HELLO THERE
          </p>



          <h1 className="text-6xl font-black leading-tight">

            Rizki

            <span className="text-yellow-500">
              {" "}Ismail
            </span>

            {" "}Hidayat

          </h1>




          <h2 className="text-2xl mt-5 text-zinc-300">

            Frontend Developer • Digital Archivist • Data Enthusiast

          </h2>




          <p className="mt-6 text-zinc-400 max-w-lg leading-8">

            Library and Information Science graduate from Universitas Padjadjaran
            with experience at SCM, BRIN, Linguo.id, and digital media organizations.
            Passionate about building modern web experiences while leveraging expertise
            in digital archiving, metadata management, and data analytics.

          </p>





          <div className="flex gap-4 mt-10">


            <a

              href="/cv.pdf"

              download

              className="bg-yellow-500 text-black px-6 py-4 rounded-full font-semibold hover:bg-yellow-400 transition"

            >

              Download CV

            </a>





            <a


              href="http://www.linkedin.com/in/rizki-ismail-hidayat-b3646821b"


              target="_blank"

              className="border border-yellow-500 px-6 py-4 rounded-full hover:bg-yellow-500 hover:text-black transition"


            >

              LinkedIn

            </a>



          </div>






          {/* Stats */}


          <div className="grid grid-cols-3 gap-8 mt-14">



            <div>

              <h3 className="text-4xl font-bold text-yellow-500">

                1000+

              </h3>

              <p className="text-zinc-400 mt-2">

                Archives Managed

              </p>

            </div>





            <div>

              <h3 className="text-4xl font-bold text-yellow-500">

                6+

              </h3>

              <p className="text-zinc-400 mt-2">

                Experiences

              </p>

            </div>





            <div>

              <h3 className="text-4xl font-bold text-yellow-500">

                5+

              </h3>

              <p className="text-zinc-400 mt-2">

                Organizations

              </p>

            </div>



          </div>




        </div>




        {/* Kanan */}



        <div className="relative flex justify-center">



          <div
            className="absolute w-96 h-96 rounded-full bg-yellow-500/30 blur-[120px]"
          />




          <motion.div


            animate={{ y: [0, -15, 0] }}


            transition={{

              duration: 4,

              repeat: Infinity

            }}

          >




            <Image

              src="/rizki.JPG"

              width={420}

              height={600}

              alt="Rizki"

              className="rounded-2xl relative z-10 shadow-2xl border border-yellow-500/20"

            />



          </motion.div>




        </div>



      </div>

    </section>
  );
}
