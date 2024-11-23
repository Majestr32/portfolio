import "./style.css";

export const AboutMe = ({ className }) => {
  return (
    <div className={`about-me ${className}`}>
      <p className="text-wrapper-13">
        I am a seasoned full-stack software engineer with over <br />8 years of
        professional experience, specializing in backend development. <br />
        My expertise lies in crafting robust and scalable SaaS-based <br />
        architectures on the Amazon AWS platform.
      </p>
    </div>
  );
};
