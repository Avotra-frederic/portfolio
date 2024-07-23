import  { useEffect, useState } from "react";
import skills from "../../data/skills.json";
import ProgressBar from "../helpers/ProgressBar";
import AnimatedSection from "../context/AnimatedSection";

function Skills() {
  const [mySkills, setMySkills] = useState<any>();

  useEffect(() => {
    setMySkills(skills);

    return () => {
      setMySkills(null);
    };
  }, []);

  return (
    <AnimatedSection>
      <div className="container px-6 py-16 md:p-6 mx-auto h-full grid grid-cols-1 md:grid-cols-2">
        <div className="h-full flex flex-col justify-center gap-3">
          <h1 className="text-2xl md:text-6xl font-semibold text-white uppercase">
            Compétences
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            Grâce à mes maîtrises des téchnologies modernes et des outils de développement, je suis capable de mener des projets de A à Z avec efficacité.
          </p>
        </div>
        <div className="h-full relative top-0 flex flex-col justify-center p-0 md:pl-8 md:pr-16 ">
          <div className="grid grid-cols-2 gap-3">
            {mySkills &&
              mySkills.map((items: any, index: any) => (
                <div
                  key={index + 1}
                  className="flex flex-col px-8 justify-center gap-1 rounded-md text-white bg-purple-700/5 shadow-xl border-black/5 border-[1px] shadow-black/15 py-8 backdrop-blur-lg"
                >
                  <h1 className="text-lg flex justify-between items-center">
                    <span>{items.language}</span>
                    <span className="text-sm text-[#40ADE5]">
                      {items.degree}%
                    </span>
                  </h1>
                  <ProgressBar size={items.degree} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default Skills;
