import Link from "next/link";
import "./style.css";

export const Frame = ({ text, url }) => {
  return (
    <Link target="_blank" href={url}>
      <div className="flex flex-row">
        <img
          className="view-icon mr-6"
          alt="View icon"
          src="https://c.animaapp.com/Hi7KV1Cc/img/view-icon-3.svg"
        />

        <div className="text-base text-[#C5C5C5] font-semibold font-poppins underline decoration-[1px]">
          {text}
        </div>
      </div>
    </Link>
  );
};
