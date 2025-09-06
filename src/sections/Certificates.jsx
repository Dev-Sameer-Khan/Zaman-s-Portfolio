import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaCertificate, FaTrophy } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const certificates = [
  {
    title: "Stock Market Basics",
    organization: "Zerodha",
    date: "January 2025",
    description:
      "You have successfully completed the mandatory requirements prescribed by Zerodha Varsity & passed the certification program in",
      credential: "https://drive.google.com/file/d/1YOlj57LJ0FvSf7zjjBhUMIQkNNh_ARpu/view", 
    icon: <FaCertificate />,
  },
  {
    title: "Risk Managment & Trading Pshycology",
    organization: "Zerodha",
    date: "August 2025",
    description:
      "Successfully completed the Risk Management certification program at Zerodha Varsity, demonstrating a strong understanding of risk assessment, mitigation strategies, and best practices in financial markets.",
      credential: "https://drive.google.com/file/d/1ge7yI7HMspFMKArWa6xhp8fwu4aHYQon/view", 
    icon: <FaCertificate />,
  },
  {
    title: "Currency, Commodity, and Govt Securities",
    organization: "Zerodha",
    date: "August 2025",
    description:
      "Successfully completed the Currency, Commodity, and Govt Securitiescertification program at Zerodha Varsity, demonstrating a strong understanding of risk assessment, mitigation strategies, trading psychology, and best practices in financial markets.",
      credential: "https://drive.google.com/file/d/1foWado1Cwl_oQoEWKDRuQC7zeGo_9I9B/view", 
    icon: <FaCertificate />,
  },
  {
    title: "ADCA (Advance Diploma in Computer Applications)",
    organization: "STP Computer Education",
    date: "June 2025",
    description:
      "Completed the Advanced Diploma in Computer Applications (ADCA) at STP Computer Education, covering a comprehensive curriculum in computer fundamentals, office automation, programming, and practical applications.",
      credential: "https://drive.google.com/file/d/1jOVW37XV3VRXfOuDTnPskMWqeUdunbeM/view", 
    icon: <FaCertificate />,
  },
  {
    title: "Advance Excel Course",
    organization: "STP Computer Education",
    date: "November 2024",
    description:
      "Completed an advanced Excel course at GSTP Computer Education, gaining expertise in data analysis, spreadsheet automation, and advanced Excel functions for business and trading applications.",
      credential: "https://drive.google.com/file/d/1qpamSS7TCTA8box37Sr9UDJGf45d5Jw5/view", 
    icon: <FaCertificate />,
  },
  {
    title: "Graphic Design",
    organization: "Star Media Print",
    date: "Feburary 2024",
    description:
      "Completed a comprehensive Graphic Design course at Star Media Print, developing creative design skills and practical experience in visual communication and digital media.",
    credential: "https://drive.google.com/file/d/1b-WzCPiqtj5Rk4wivc_yIm_txZs0nMR5/view",
    icon: <FaCertificate />,
  },
  {
    title: "Paint Your Dream",
    organization: "SBI Life Insurance Co. Ltd.",
    date: "August 2024",
    description:
      "Awarded a Certificate of Achievement by SBI Life Insurance Co. Ltd. for outstanding participation in the 'Paint Your Dream' initiative, demonstrating creativity and commitment to personal and professional growth.",
    credential: "https://drive.google.com/file/d/1Ph_l2BlwY-IG-tdQoML0oKCqr_fM-qFr/view",
    icon: <FaTrophy />,
  },
];

const Certificates = () => {

  useGSAP(() => {
    const title = SplitText.create(".six", { type: "chars" });


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
          trigger: ".six",
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );

  }, []);

  return (
    <div className="bg-[#0C0C0D] text-zinc-200 font-[bold] px-10 max-[640px]:px-4 py-30 max-[640px]:py-0">
      <h2 className="text-5xl six will-change-transform text-center max-[640px]:text-4xl font-[bold] pl-10 max-[640px]:pl-0 mb-10 shiny-text">
        🏅 Certificates & Achievements 🎯
      </h2>
      <VerticalTimeline>
        {certificates.map((certificate, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#111", color: "#e4e4e7" }}
            contentArrowStyle={{ borderRight: "7px solid  #111" }}
            date={certificate.date}
            iconStyle={{ background: "#111", color: "#fff" }}
            icon={certificate.icon}
          >
            <h3 className="vertical-timeline-element-title text-xl font-[semibold]">
              {certificate.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-zinc-400 font-[medium]">
              {certificate.organization}
            </h4>
            <p className="font-[regular] text-gray-100">
              {certificate.description}
              {certificate.credential && (
                <a
                  href={certificate.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-50 hover:underline ml-2 font-semibold"
                >
                  View Credential
                </a>
              )}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Certificates;
