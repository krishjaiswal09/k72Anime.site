import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-3">
      {/* PROJETS */}
      <Link
        to="/projets"
        className="border-[3px] border-white text-white hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full uppercase text-[6vw] leading-none px-10 py-3 flex items-center justify-center transition-colors duration-300"
      >
        <span className="relative top-[3px]">Projets</span>
      </Link>

      {/* AGENCE */}
      <Link
        to="/agence"
        className="border-[3px] border-white text-white hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full uppercase text-[6vw] leading-none px-10 py-3 flex items-center justify-center transition-colors duration-300"
      >
        <span className="relative top-[3px]">Agence</span>
      </Link>
    </div>
  );
};

export default HomeBottomText;
