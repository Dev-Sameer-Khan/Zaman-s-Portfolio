import React from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);


const AboutMe = () => {

  useGSAP(() => {
    const title = SplitText.create(".three", { type: "chars" });
    const desc = SplitText.create(".four", { type: "chars" });


    gsap.fromTo(
      title.chars,
      {
        y: 100,
        opacity: 0,
        blur: "100px"
      },
      {
        opacity: 1,
        y: 0,
        blur: "0px",
        stagger: 0.005,
        ease: "none",
        scrollTrigger: {
          trigger: ".three",
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );

    gsap.fromTo(
      desc.chars,
      {
        y: 100,
        opacity: 0,
        blur: "100px"
      },
      {
        opacity: 1,
        y: 0,
        blur: "0px",
        stagger: 0.001,
        ease: "none",
        scrollTrigger: {
          trigger: ".four",
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );

    gsap.fromTo(
      ".img-anim",
      {
        y: 100,
        opacity: 0,
        blur: "100px"
      },
      {
        opacity: 1,
        y: 0,
        blur: "0px",
        stagger: 0.001,
        ease: "none",
        scrollTrigger: {
          trigger: ".img-anim",
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );

  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#0C0C0D] text-zinc-200 flex items-center justify-center px-20 max-[640px]:px-6 overflow-hidden">
      <div className="flex flex-col lg:flex-row max-[1025px]:gap-16 max-w-7xl mx-auto relative z-10 w-full">
        <div className="space-y-8 relative flex-1 lg:w-1/2">
          <h2 className="three will-change-transform text-5xl shiny-text xl:text-6xl font-bold leading-tight overflow-hidden bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] bg-clip-text text-transparent">
            {`Hey, I'm `.split(" ").map((word, i) => (
              <span key={i} className="word inline-block mr-3">
                {word}
              </span>
            ))}
            <span className="word inline-block">Syed</span> {" "}
            <span className="word inline-block">Zaman</span>
            <motion.span
              className="word inline-block ml-3"
              animate={{ rotate: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
            >
              👋
            </motion.span>
          </h2>

          <div className="space-y-4 four will-change-transform">
            <p className="text-xl text-zinc-300 leading-relaxed">
              I don’t just analyze numbers,{" "}
              <span className="font-semibold border-b-2 border-zinc-600 hover:border-zinc-400 transition-colors shiny-text">
                I unlock business potential!
              </span>{" "}
              Specializing in{" "}
              <span className="bg-gradient-to-r from-zinc-600 to-zinc-800 text-transparent bg-clip-text shiny-text">
                digital business strategy, trading analytics,
              </span>{" "}
              and data-driven decision making, I help organizations thrive in the digital marketplace by delivering{" "}
              <span className="border-b-2 border-zinc-700 hover:border-zinc-500 transition-colors shiny-text">
                actionable insights and growth opportunities.
              </span>
            </p>

            <p className="text-xl text-zinc-300 leading-relaxed">
              From{" "}
              <span className="border-b-2 border-zinc-700 hover:border-zinc-500 transition-colors shiny-text">
                market research
              </span>{" "}
              and{" "}
              <span className="border-b-2 border-zinc-700 hover:border-zinc-500 transition-colors shiny-text">
                competitor analysis
              </span>{" "}
              to{" "}
              <span className="bg-gradient-to-r from-zinc-600 to-zinc-800 text-transparent bg-clip-text shiny-text">
                trading strategy optimization
              </span>
              , I ensure every business move is{" "}
              <span className="border-b-2 border-zinc-700 hover:border-zinc-500 transition-colors shiny-text">
                informed and impactful.
              </span>{" "}
              Whether it&apos;s{" "}
              <span className="border-b-2 border-zinc-700 hover:border-zinc-500 transition-colors shiny-text">
                leveraging data analytics, automating reports,
              </span>{" "}
              or{" "}
              <span className="border-b-2 border-zinc-700 hover:border-zinc-500 transition-colors shiny-text">
                identifying new digital opportunities
              </span>
              , I empower businesses to{" "}
              <span className="bg-gradient-to-r from-zinc-600 to-zinc-800 text-transparent bg-clip-text shiny-text">
                grow smarter and trade better.
              </span>{" "}
              📈🚀
            </p>
          </div>
        </div>

        <div className="relative flex items-center justify-end max-[1025px]:justify-center flex-1 lg:w-1/2">
          <div className="w-full max-w-[400px] h-[500px] relative group img-anim will-change-transform">
            <div className="absolute rotates inset-0 bg-gradient-to-br from-[#222] to-[#111] rounded-3xl transform rotate-2 scale-105 group-hover:rotate-0 transition-all duration-500" />
            <div className="absolute inset-0 bg-[#0C0C0D] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://res.cloudinary.com/dbgzq41x2/image/upload/v1756121025/zaman_gagsei.jpg"
                alt="Sameer Khan"
                className="w-full img-scale grayscale h-full object-cover object-center transform scale-125 group-hover:scale-[130%] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0D]/90 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#ffffff08] backdrop-blur-lg rounded-xl border border-zinc-800 hover:bg-[#1a1a1a] transition-colors">
              <h3 className="text-xl font-bold bg-gradient-to-r from-zinc-300 to-zinc-500 bg-clip-text text-transparent">
                Also changing that
              </h3>
              <p className="text-zinc-400 mt-1">
                Building innovative digital solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
