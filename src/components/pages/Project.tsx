import {
  DiReact,
  DiPostgresql,
  DiPhp,
  DiJavascript,
  DiLaravel,
} from "react-icons/di";
import { SiTypescript, SiLivewire, SiVite } from "react-icons/si";
import AnimatedSection from "../context/AnimatedSection";
import { Link } from "react-router-dom";
import { RxVercelLogo } from "react-icons/rx";
function Project() {
  return (
    <AnimatedSection>
      <div className="container px-6 py-16 md:p-6 mx-auto h-full grid grid-cols-1 md:grid-cols-2">
        <div className="h-full flex flex-col justify-center gap-3">
          <h1 className="text-2xl md:text-6xl font-semibold text-white uppercase">
            projets
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            J&apos;ai travaillé sur divers projets qui démontrent mes capacités
            à concevoir et développer des solutions sur mésure répondant aux
            besoins spécifiques des clients.
          </p>
        </div>
        <div className="h-full relative top-0 flex flex-col justify-center p-0 md:pl-8 md:pr-7 ">
          <div className="grid grid-cols-2 gap-3">
            <Link
              to={"https://espic.jssi-madagascar.mg"}
              target="_blank"
              className="flex flex-col px-8 justify-center gap-1 rounded-md text-white bg-purple-700/5 shadow-xl border-black/5 border-[1px] shadow-black/15 py-16 backdrop-blur-lg"
            >
              <h1 className="text-lg flex justify-between items-center">
                <span>ESPIC Madagascar</span>
              </h1>
              <p className="montserrat-thin text-sm">
                Plateforme web de cours enligne pour les étudiants de ESPIC
                Madagascar
              </p>
              <div className="flex items-center gap-2">
                <DiPhp size={25} />
                <DiLaravel size={25} />
                <SiLivewire size={20} />
                <DiJavascript size={25} />
                <DiPostgresql size={25} />
              </div>
              <span className="text-sm text-[#40ADE5]">Nov 2022</span>
            </Link>
            <Link
              to={"https://full-coding.vercel.app"}
              target="_blank"
              className="flex flex-col px-8 justify-center gap-1 rounded-md text-white bg-purple-700/5 shadow-xl border-black/5 border-[1px] shadow-black/15 py-16 backdrop-blur-lg"
            >
              <h1 className="text-lg flex justify-between items-center">
                <span>FullCoding</span>
              </h1>
              <p className="montserrat-thin text-sm">
                Site web du startup FullCoding.
              </p>
              <div className="flex items-center gap-2">
                <DiReact size={25} />
                <SiTypescript size={20} />
                <RxVercelLogo size={20}/>
              </div>
              <span className="text-sm text-[#40ADE5] ">Juil 2024</span>
            </Link>
            <Link
              to={"https://ralaynellielaiavocatalacour.mg/"}
              target="_blank"
              className="flex flex-col px-8 justify-center gap-1 rounded-md text-white bg-purple-700/5 shadow-xl border-black/5 border-[1px] shadow-black/15 py-16 backdrop-blur-lg"
            >
              <h1 className="text-lg flex justify-between items-center">
                <span>RALAY Nellie Laï</span>
              </h1>
              <p className="montserrat-thin text-sm">
                Site web d'une avocate pour la présentation de ces services
                juridique.
              </p>
              <div className="flex items-center gap-2">
                <DiReact size={25} />
                <DiJavascript size={25} />
                <SiVite size={20} />
              </div>
              <span className="text-sm text-[#40ADE5]">juin 2024</span>
            </Link>
            <div className="flex flex-col px-8 justify-center gap-1 rounded-md text-white bg-purple-700/5 shadow-xl border-black/5 border-[1px] shadow-black/15 py-16 backdrop-blur-lg">
              <h1 className="text-lg flex justify-between items-center">
                <span>Plan Sol</span>
              </h1>
              <p className="montserrat-thin text-sm">
                Application web de gestion et suivi d'un parc informatique chez
                SmartOne
              </p>
              <div className="flex items-center gap-2">
                <DiPhp size={25} />
                <DiLaravel size={25} />
                <SiLivewire size={20} />
                <DiJavascript size={25} />
                <DiPostgresql size={25} />
              </div>
              <span className="text-sm text-[#40ADE5]">Sept 2021</span>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default Project;
