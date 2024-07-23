import React from "react";
import {
  LiaHomeSolid,
  LiaUserAltSolid,
  LiaGraduationCapSolid,
  LiaUserMdSolid,
  LiaCodeSolid,
  LiaSuitcaseSolid,
} from "react-icons/lia";
import { Link } from "react-router-dom";
function FloatingNavbar() {
  return (
    <React.Fragment>
      <div className=" bottom-0  w-full justify-between items-center flex md:flex-col md:w-10 h-fit md:rounded-full fixed md:inset-y-56 z-50 md:right-6 bg-white/10 py-0">
        <Link
          to={""}
          className="w-full h-10 flex items-center justify-center center rounded-full text-[#45A9E6] hover:text-[#AF1BBC] hover:font-bold hover:bg-white/70 transition-all gap-2 duration-1000"
        >
          <LiaHomeSolid />
        </Link>
        <Link
          to={"about"}
          className="w-full h-10 flex items-center justify-center center rounded-full text-[#45A9E6] hover:text-[#AF1BBC] hover:font-bold hover:bg-white/70 transition-all gap-2 duration-1000"
        >
          <LiaUserAltSolid />
        </Link>
        <Link
          to={"education"}
          className="w-full h-10 flex items-center justify-center center rounded-full text-[#45A9E6] hover:text-[#AF1BBC] hover:font-bold hover:bg-white/70 transition-all gap-2 duration-1000"
        >
          <LiaGraduationCapSolid />
        </Link>
        <Link
          to={"jobs"}
          className="w-full h-10 flex items-center justify-center center rounded-full text-[#45A9E6] hover:text-[#AF1BBC] hover:font-bold hover:bg-white/70 transition-all gap-2 duration-1000"
        >
          <LiaUserMdSolid />
        </Link>
        <Link
          to={"skills"}
          className="w-full h-10 flex items-center justify-center center rounded-full text-[#45A9E6] hover:text-[#AF1BBC] hover:font-bold hover:bg-white/70 transition-all gap-2 duration-1000"
        >
          <LiaCodeSolid />
        </Link>
        <Link
          to={"project"}
          className="w-full h-10 flex items-center justify-center center rounded-full text-[#45A9E6] hover:text-[#AF1BBC] hover:font-bold hover:bg-white/70 transition-all gap-2 duration-1000"
        >
          <LiaSuitcaseSolid />
        </Link>
      </div>
    </React.Fragment>
  );
}

export default FloatingNavbar;
