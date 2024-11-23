import Link from "next/link";
import "./style.css";

export const Footer = () => {
  return (
    <section id="contact">
      <div className="mx-[24px] md:mx-[60px] mt-12">
        <h6 className="text-2xl font-bold font-poppins">Contact</h6>

        <div className="mt-[15px]"></div>

        <p className="text-lg font-light font-poppins text-[#C5C5C5]">
          With over 4 years of software engineering expertise and 3+ years in
          mobile app development, I specialize in building seamless and engaging
          user experiences with Flutter. My expertise extends to integrating
          scalable backend solutions using Node.js and Firebase, ensuring
          reliable and efficient app performance while delivering maintainable,
          cross-platform, and native solutions.
        </p>

        <div className="mt-[15px]"></div>

        <div className="flex flex-row gap-2">
          <img
            className="email-icon"
            alt="Email icon"
            src="https://c.animaapp.com/ADpuaVWx/img/email-icon-1.svg"
          />

          <p className="text-wrapper">duartsamon34@gmail.com</p>
        </div>

        <div className="flex flex-row gap-2">
          <img
            className="telegram"
            alt="Telegram"
            src="https://c.animaapp.com/ADpuaVWx/img/icons8-telegram-1-1.svg"
          />

          <p className="contact-subtitle-2">@vladyem</p>
        </div>

        <Link
          href="https://www.linkedin.com/in/vladyslav-yemets-aa6738237/"
          target="_blank"
        >
          <div className="flex flex-row gap-2">
            <img
              className="linkedin"
              alt="Linkedin"
              src="https://c.animaapp.com/ADpuaVWx/img/icons8-linkedin--1--1-1.svg"
            />

            <p className="text-wrapper underline decoration-[0.5px]">
              LinkedIn
            </p>
          </div>
        </Link>

        <div className="h-[60px]"></div>
      </div>
    </section>
  );
};
