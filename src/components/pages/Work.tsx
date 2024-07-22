import React from "react";

function Work() {
  return (
    <React.Fragment>
      <section>
        <div className="container px-6 py-16 md:p-6 mx-auto h-full grid grid-cols-1 md:grid-cols-2">
          <div className="h-full flex flex-col justify-center gap-3">
            <h1 className="text-2xl md:text-6xl font-semibold text-white uppercase">
              Expériences
            </h1>
            <p className="text-gray-400 text-justify text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
              alias aspernatur aliquam atque accusantium laudantium quae,
              inventore placeat reiciendis perferendis quam quidem quibusdam a
              officiis fuga quia possimus cupiditate suscipit.
            </p>
          </div>
          <div className="h-full relative top-0 flex flex-col justify-center p-0 md:pl-8 md:pr-16  gap-3">
            <div className="text-white px-4 py-6 backdrop-blur-lg shadow-xl rounded-md  bg-purple-700/5">
              <h1 className="flex justify-between items-center">
                <span>Formateur</span>
                <span className="text-sm text-[#40ADE5]">2022 - Now</span>
              </h1>
              <p className="montserrat-thin text-sm">joyce & hope Formation</p>
              <p className="montserrat-thin text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                corporis.
              </p>
            </div>
            <div className="text-white px-4 py-6 backdrop-blur-lg shadow-xl rounded-md  bg-purple-700/5">
              <h1 className="flex justify-between items-center">
                <span>Développeur PHP</span>
                <span className="text-sm text-[#40ADE5]">2021</span>
              </h1>
              <p className="montserrat-thin text-sm">SmartOne Madagascar</p>
              <p className="montserrat-thin text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                corporis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Work;
