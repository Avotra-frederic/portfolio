import React from "react";
import img from "./../../assets/moi.png";
import AnimatedSection from "../context/AnimatedSection";

function Home() {
  return (
    <React.Fragment>
      <AnimatedSection>
        <div className="container mx-auto h-full grid grid-cols-1 md:grid-cols-2">
          <div className="h-full pt-0  flex flex-col justify-center gap-3 order-2 md:order-1 z-10">
            <h1 className="text-2xl text-center md:text-start md:text-6xl font-semibold text-white uppercase">
              Développeur <br /> <span className="text-white">Full-Stack</span>
            </h1>
            <p className="text-gray-400 text-center text-sm md:text-base md:text-start">
              Je suis Avotra Frederic RAKOTOMAMONJY, un développeur Full-Stack passionné basé à Madagascar, spécialisé dans la création des solutions web,mobiles et application de bureau innovantes.
            </p>
          </div>
          <div className="h-full relative top-0 order-1 md:order-2">
            <img
              src={img}
              alt="Mon profil"
              loading="lazy"
              className="object-fill absolute inset-y-12 z-0 md:inset-y-28"
            />
          </div>
        </div>
      </AnimatedSection>
    </React.Fragment>
  );
}

export default Home;
