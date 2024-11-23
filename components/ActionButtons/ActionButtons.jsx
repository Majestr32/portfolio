import Link from "next/link";
import "./style.css";

export const ActionButtons = () => {
  return (
    <div className="flex justify-center lg:justify-end">
      <Link href="#contact">
        <button
          type="button"
          className="text-main-bg text-xl bg-white hover:bg-slate-200 font-semibold font-poppins rounded-full text-sm md:px-6 md:py-3.5 px-3 py-2.5 text-center me-2 mb-2"
        >
          Contact me
        </button>
      </Link>

      <Link href="https://cv.djinni.co/f3/b39008ac18572471360e703bb81f5d/cv_eng.pdf">
        <button
          type="button"
          className="text-white text-xl hover:bg-gray-900 border border-white font-semibold font-poppins rounded-full text-sm md:px-6 md:py-3.5 px-3 py-2.5 text-center me-2 mb-2"
        >
          Download CV
        </button>
      </Link>
    </div>
  );
};
