import "./style.css";
import Link from "next/link";

export const ElementProject = ({ type, name, id, url }) => {
  const typeClass = type.replace(" ", "-");
  return (
    <Link href={`/project/${id}`}>
      <div className="element-project">
        <div className="h-[235px] w-[340px] overflow-hidden">
          <img
            className="project-thumbnail"
            alt="Project thumbnail"
            src={url}
          />
        </div>

        <div className={`project-title`}>
          <h5 className={typeClass}>{type}</h5>

          <p className="culinara">{name}</p>
        </div>
      </div>
    </Link>
  );
};
