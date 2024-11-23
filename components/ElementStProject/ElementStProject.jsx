import "./style.css";

export const ElementStProject = ({ className }) => {
  return (
    <div className={`element-st-project ${className}`}>
      <img
        className="img"
        alt="Project thumbnail"
        src="https://c.animaapp.com/7dLB47dk/img/project-thumbnail-1-1@2x.png"
      />

      <div className="project-title-2">
        <div className="text-wrapper-4">HTML TUTORIAL</div>

        <div className="text-wrapper-5">CLICK HERE TO VISIT</div>
      </div>

      <img
        className="view-icon-2"
        alt="View icon"
        src="https://c.animaapp.com/7dLB47dk/img/view-icon-3.svg"
      />
    </div>
  );
};
