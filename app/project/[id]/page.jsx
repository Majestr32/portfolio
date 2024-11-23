import { Footer } from "/components/Footer/Footer";
import { Frame } from "/components/Frame/Frame";
import { Header } from "/components/Header/Header";
import Image from "next/image";
import projects from "@/public/projects.json";

const ProjectPage = async ({ params }) => {
  const { id } = await params;
  const project = projects.find((e) => e.id == id);
  const statusTextClass = `text-xs font-extrabold font-poppins ${
    project.status === "IN DEVELOPMENT" ? "text-greyish" : "text-main-accent"
  }`;
  return (
    <>
      <Header className="header-instance" />
      <div className="web-design">
        <div className="flex lg:flex-row flex-col md:gap-8 gap-4 mt-[120px]">
          <Image
            width={524}
            height={301}
            alt="Project image"
            className="sm:w-[524px] h-[301px] w-full object-cover rounded-[16px]"
            src={project.image}
          />
          <div className="flex flex-col justify-start grow">
            <h4 className="text-2xl text-white font-extrabold font-poppins">
              {project.project_name}
            </h4>

            <p className={statusTextClass}>{project.status}</p>

            <p className="text-lg text-[#C5C5C5] font-poppins mb-2">
              {project.description}
            </p>
            {project.links.map((e) => (
              <Frame key={e.name} text={e.name} url={e.url} />
            ))}
          </div>
        </div>

        {project.contents.map((e) => (
          <div key={e.id} className="mt-6">
            <div>
              {e.title && (
                <p className="text-3xl text-[#C5C5C5] font-bold font-poppins">
                  {e.title}
                </p>
              )}

              {e.text && (
                <p className="text-lg text-[#C5C5C5] font-poppins mb-2 ">
                  {e.text}
                </p>
              )}
            </div>
            {e.image && (
              <div className="image-wrapper mt-6">
                <img className="image" alt="Image" src={e.image} />
              </div>
            )}
          </div>
        ))}
        <div className="h-[80px]"></div>
      </div>
      <Footer
        className="footer-instance"
        emailIcon="https://c.animaapp.com/Hi7KV1Cc/img/email-icon-1.svg"
        telegram="https://c.animaapp.com/Hi7KV1Cc/img/icons8-telegram-1-1.svg"
      />
    </>
  );
};

export default ProjectPage;
