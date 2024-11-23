import "./style.css";

export const Title = ({ className }) => {
  return (
    <div className={`title ${className}`}>
      <img
        className="img-3"
        alt="Title"
        src="https://c.animaapp.com/7dLB47dk/img/title-1@2x.png"
      />
    </div>
  );
};