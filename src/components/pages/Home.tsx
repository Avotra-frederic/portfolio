import React from "react";
import img from "./../../assets/moi.png";
import AnimatedSection from "../context/AnimatedSection";
import { profile } from "../../data/profile";

function Home() {
  return (
    <React.Fragment>
      <AnimatedSection>
        <div className="container mx-auto h-full grid grid-cols-1 md:grid-cols-2">
          <div className="h-full pt-0  flex flex-col justify-center gap-3 order-2 md:order-1 z-10">
            <h1 className="text-2xl text-center md:text-start md:text-6xl font-semibold text-white uppercase">
              {profile.title}
            </h1>
            <p className="text-gray-400 text-center text-sm md:text-base md:text-start">
              {profile.heroDescription}
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
