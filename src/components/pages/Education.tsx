import React from "react";
import AnimatedSection from "../context/AnimatedSection";
function Education() {
  return (
    <React.Fragment>
      <AnimatedSection>
        <div className="container px-6 py-16 md:p-6 mx-auto h-full grid grid-cols-1 md:grid-cols-2">
          <div className="h-full flex flex-col justify-center gap-3">
            <h1 className="text-2xl md:text-6xl font-semibold text-white uppercase">
              Diplômes
            </h1>
            <p className="text-gray-400 text-sm md:text-base">
              Mon parcours académique solide en informatique de gestion m&apos; fourni les bases nécessaires pour exceller dans le développement de logiciel complexes et innovants.
            </p>
          </div>
          <div className="h-full relative top-0 flex flex-col justify-center p-0 md:pl-8 md:pr-7 ">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col px-8 justify-center gap-1 rounded-md text-white bg-purple-700/5 shadow-xl border-black/5 border-[1px] shadow-black/15 py-16 backdrop-blur-lg">
                <h1 className="text-lg flex justify-between items-center">
                  <span>Master I</span>
                  <span className="text-sm text-[#40ADE5]">2024</span>
                </h1>
                <p className="montserrat-thin">informatique de gestion</p>
                <p>ESPIC Madagascar</p>
              </div>
              <div className="flex flex-col px-8 justify-center gap-1 rounded-md text-white bg-purple-700/5 shadow-xl border-black/5 border-[1px] shadow-black/15 py-16 backdrop-blur-lg">
                <h1 className="text-lg flex justify-between items-center">
                  <span>Licence</span>
                  <span className="text-sm text-[#40ADE5]">2022</span>
                </h1>
                <p className="montserrat-thin">informatique de gestion</p>
                <p>ESPIC Madagascar</p>
              </div>
              <div className="flex flex-col px-8 justify-center gap-1 rounded-md text-white bg-purple-700/5 shadow-xl border-black/5 border-[1px] shadow-black/15 py-16 backdrop-blur-lg">
                <h1 className="text-lg flex justify-between items-center">
                  <span>DTS</span>
                  <span className="text-sm text-[#40ADE5]">2020</span>
                </h1>
                <p className="montserrat-thin">informatique de gestion</p>
                <p>ESPIC Madagascar</p>
              </div>
              <div className="flex flex-col px-8 justify-center gap-1 rounded-md text-white bg-purple-700/5 shadow-xl border-black/5 border-[1px] shadow-black/15 py-16 backdrop-blur-lg">
                <h1 className="text-lg flex justify-between items-center">
                  <span>Baccalauréat</span>
                  <span className="text-sm text-[#40ADE5]">2018</span>
                </h1>
                <p className="montserrat-thin">Scientifique</p>
                <p>Accem Analakely</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </React.Fragment>
  );
}

export default Education;
