import {
  LiaAtSolid,
  LiaPhoneSolid,
  LiaMapMarkerSolid,
  LiaLinkedin,
} from "react-icons/lia";
import AnimatedSection from "../context/AnimatedSection";
import {Link} from "react-router-dom"
function About() {
  return (
    <AnimatedSection>
      <div className="container px-6 py-16 md:p-6 mx-auto h-full grid grid-cols-1 md:grid-cols-2">
        <div className="h-full flex flex-col justify-center gap-3">
          <h1 className="text-2xl md:text-6xl font-semibold text-white uppercase">
            A propos
          </h1>
          <p className="text-gray-400 text-sm md:text-base text-justify">
            Avec plusieurs années d'expérience en développement et une forte expertise en gestion de projet, je suis dédié à transformer des idées en applications performantes.
            Mon parcours en tant que formateur et développeur m&apos;permis d&apos;acquérir une vision global des téchnologies et des besoins clients.
          </p>
        </div>
        <div className="h-full relative top-0 flex flex-col justify-center p-0 md:pl-8 md:pr-16 ">
          <div className="grid grid-cols-2 gap-3">
            <Link to="mailto:fred.avotra@gmail" className="flex flex-col items-center justify-center gap-1 rounded-md text-white bg-purple-700/5 shadow-xl border-black/5 border-[1px] shadow-black/15 py-16 backdrop-blur-lg">
              <LiaAtSolid size={42} color="#40ADE5" />
              <p className="text-sm text-center text-wrap md:text-base">
                fred.avotra@gmail.com
              </p>
            </Link>
            <Link to="tel:+261325608838" className="flex flex-col items-center justify-center gap-1 rounded-md text-white bg-purple-700/5 shadow-xl border-black/5 border-[1px] shadow-black/15 py-16 backdrop-blur-lg">
              <LiaPhoneSolid size={42} color="#40ADE5" />
              <p className="text-sm text-center text-wrap md:text-base">
                +261 32 56 088 38
              </p>
            </Link>
            <div className="flex flex-col items-center justify-center gap-1 rounded-md text-white bg-purple-700/5 shadow-xl border-black/5 border-[1px] shadow-black/15 py-16 backdrop-blur-lg">
              <LiaMapMarkerSolid size={42} color="#40ADE5" />
              <p>Antananarivo, Madagascar</p>
            </div>
            <Link to={"https://mg.linkedin.com/in/avotra-frederic"} target="_blank" className="flex flex-col items-center justify-center gap-1 rounded-md text-white bg-purple-700/5 shadow-xl border-black/5 border-[1px] shadow-black/15 py-16 backdrop-blur-lg">
              <LiaLinkedin size={42} color="#40ADE5" />
              <p className="text-sm text-center text-wrap md:text-base">
                Avotra-frederic
              </p>
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default About;
