import { ActionButtons } from "../components/ActionButtons/ActionButtons";
import { ElementProject } from "../components/ElementProject/ElementProject";
import { ExperienceSection } from "../components/ExperienceSection/ExperienceSection";
import { ExperienceTitle } from "../components/ExperienceTitle/ExperienceTitle";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { ProjectsTitle } from "../components/ProjectsTitle/ProjectsTitle";
import projects from "@/public/projects.json";
import "./style.css";

export default function Home() {
  return (
    <>
      <Header className="header-instance" />
      <div className="web-design">
        <div>
          <section
            id="home"
            className="flex flex-col lg:flex-row mt-[140px] mb-[24px] md:px-24 scroll-mt-36"
          >
            <img
              className="mask-group mx-auto"
              alt="Mask group"
              src="https://c.animaapp.com/ADpuaVWx/img/mask-group@2x.png"
            />
            <div className="mx-auto lg:text-left text-center">
              <h2 className="text-lg text-[--secondary-text] mt-2 lg:text-right text-center font-poppins font-semibold">
                Yemets Vladyslav
              </h2>
              <h1 className="about-me">
                Software Engineer &amp;
                <br />
                Mobile Development Specialist
              </h1>
              <h3 className="about-me-2">
                With over 4 years of software engineering expertise and 3+ years
                in mobile app development, I specialize in building seamless and
                engaging user experiences with Flutter. My expertise extends to
                integrating scalable backend solutions using Node.js and
                Firebase, ensuring reliable and efficient app performance while
                delivering maintainable, cross-platform, and native solutions.
              </h3>
              <div className="h-[20px]"></div>
              <ActionButtons />
            </div>
          </section>
          <div className="h-[60px]"></div>
          <section id="projects" className="w-full scroll-mt-24">
            <ProjectsTitle />
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 lg:justify-items-start justify-items-center gap-6">
              {projects.map((e) => (
                <ElementProject
                  url={e.image}
                  id={e.id}
                  key={e.id}
                  type={e.status}
                  name={e.project_name}
                />
              ))}
            </div>
          </section>

          <section
            id="experience"
            className="w-full mt-12 mb-[100px] scroll-mt-24"
          >
            <ExperienceTitle />
            <ExperienceSection />
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
