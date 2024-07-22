import React, { useEffect, useState } from "react";

function NavbarTop() {
  const [scrollEffect, setScrollEffect] = useState<boolean>(false);
  useEffect(
    () =>
      window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
          setScrollEffect(true);
        } else {
          setScrollEffect(false);
        }
      }),
    []
  );
  return (
    <React.Fragment>
      <nav className={`w-full h-20 fixed top-0 left-0 z-50 ${scrollEffect && " bg-purple-700/5 shadow-xl shadow-black/15 backdrop-blur-lg"}`}>
        <div className="container mx-auto px-7 h-full flex items-center text-white">
          <h1>Avotra Frederic</h1>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default NavbarTop;
