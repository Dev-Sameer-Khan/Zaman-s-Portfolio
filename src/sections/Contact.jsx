import { useRef} from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaDownload,
  FaWhatsapp,
  FaInstagram,
  FaPhone,
} from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Contact = () => {
  const sectionRef = useRef();

  const [state, handleSubmit] = useForm("mjkebzrq"); 

  const socialLinks = [
    {
      icon: <FaEnvelope />,
      url: "mailto:mohdzaman529@gmail.com",
      color: "#EA4335",
    },
    {
      icon: <FaWhatsapp />,
      url: "https://wa.me/919026868073",
      color: "#25D366",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/mr_zaman_009?igsh=MWJtdDl4eXdwMHVrZA==",
      color: "#E4405F",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/syed-mohd-zaman/",
      color: "#0077B5",
    },
    {
      icon: <FaPhone />,
      url: "tel:919026868073",
      color: "#000",
    },
    {
      icon: <FaTwitter />,
      url: "https://x.com/mohdzaman529",
      color: "#1DA1F2",
    },
  ];



  useGSAP(() => {
    const title = SplitText.create(".five", { type: "chars" });


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
          trigger: ".five",
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );

    gsap.fromTo(
      ".left",
      {
        x: -100,
        opacity: 0,
        blur: "100px"
      },
      {
        opacity: 1,
        x: 0,
        blur: "0px",
        stagger: 0.001,
        ease: "none",
        scrollTrigger: {
          trigger: ".left",
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );

    gsap.fromTo(
      ".right",
      {
        x: 100,
        opacity: 0,
        blur: "100px"
      },
      {
        opacity: 1,
        x: 0,
        blur: "0px",
        stagger: 0.001,
        ease: "none",
        scrollTrigger: {
          trigger: ".right",
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );

  }, []);

  if (state.succeeded) {
    return (
      <section
        ref={sectionRef}
        className="relative bg-[#0C0C0D] text-white min-h-screen w-full flex flex-col items-center justify-center px-10 max-[640px]:px-6 py-20 overflow-hidden"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Thank you!</h2>
          <p className="text-xl">Your message has been sent. I&apos;ll get back to you soon.</p>
        </div>
      </section>
    );
  }


  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0C0C0D] text-white min-h-screen w-full flex flex-col items-center justify-center px-10 max-[640px]:px-6 py-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-10 mix-blend-soft-light" />

      <div className="relative z-20 w-full max-w-7xl mx-auto">
        <div
          className="text-center mb-16 five will-change-transform"
        >
          <h2 className="text-5xl max-[640px]:text-4xl font-[bold] shiny-text">
            📈 Let&apos;s Elevate Your Digital Business & Trading! 💹✨
          </h2>
          <p className="text-xl mt-4 shiny-text">
            Unlock growth and insights—connect with a Digital Business &amp; Trading Analyst today.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 w-full z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-container left will-change-transform backdrop-blur-3xl rounded-3xl border border-white/10 p-8 shadow-2xl flex-1"
          >
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="floating-input-group">
                <input
                  type="text"
                  name="name"
                  className="w-full p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl focus:outline-none transition-all"
                  placeholder="Your Name ✍️"
                  required
                />
              </div>

              <div className="floating-input-group">
                <input
                  type="email"
                  name="email"
                  className="w-full p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl focus:outline-none transition-all"
                  placeholder="Email 📧"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div className="floating-input-group Mobile">
                <input
                  name="phone"
                  type="text"
                  pattern="^[0-9+ ]*$"
                  className="w-full p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl focus:outline-none transition-all"
                  placeholder="Your Phone Number  📞"
                />
              </div>

              <div className="floating-input-group">
                <textarea
                  name="message"
                  rows="4"
                  className="w-full p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl focus:outline-none transition-all"
                  placeholder="Message 💬"
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <motion.button
                type="submit"
                disabled={state.submitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] hover:from-[#2d2d2d] hover:to-[#1a1a1a] p-4 rounded-xl text-lg font-bold flex items-center justify-center gap-3 transition-all"
              >
                <span className="text-xl">🚀</span>
                {state.submitting ? "Sending..." : "Launch Message"}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8 flex-1 right will-change-transform"
          >
            <div className="glass-container backdrop-blur-3xl rounded-3xl border border-white/10 p-8 h-full shadow-2xl">
              <div className="space-y-10">
                <div className="group">
                  <h3 className="text-3xl font-bold flex items-center gap-3 mb-4">
                    <span className="bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] p-3 rounded-lg">
                      <FaEnvelope />
                    </span>
                    Direct Line
                  </h3>
                  <a
                    href="mailto:mohdzaman529@gmail.com"
                    className="text-xl hover:text-white/70 transition-colors flex items-center gap-2"
                  >
                    mohdzaman529@gmail.com
                    <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      ↗
                    </span>
                  </a>
                </div>

                <div>
                  <h3 className="text-3xl font-bold mb-6">
                    Digital Playground
                  </h3>
                  <div className="flex flex-wrap items-center gap-4">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="p-4 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all text-4xl flex items-center justify-center flex-1 min-w-[150px] max-[640px]:min-w-[100px]"
                        style={{ color: link.color }}
                      >
                        {link.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>

                <a
                  href="https://drive.google.com/file/d/18RX1HD9ANtj7UghhHgWbaHjOkXlw-q-_/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ y: -3 }}
                    className="w-full bg-white/5 hover:bg-white/20 p-4 rounded-xl flex items-center justify-center gap-3 text-lg font-bold transition-colors cursor-pointer"
                  >
                    <FaDownload className="text-xl" />
                    Get My Blueprint
                  </motion.button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
