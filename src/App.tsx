import React, {useEffect} from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/pages/Home";
import Base from "./components/layouts/Base";
import About from "./components/pages/About";
import Education from "./components/pages/Education";
import Work from "./components/pages/Work";
import Skills from "./components/pages/Skills";
import Project from "./components/pages/Project";
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  useEffect(() => {
    document.addEventListener("contextmenu", (event) => {
      event.preventDefault();
    });

    document.addEventListener("keydown", (event) => {
      if (
        event.keyCode === 123 ||
        (event.ctrlKey && event.shiftKey && event.keyCode === 73)
      ) {
        event.preventDefault();
      }
    });
  }, []);
  return (
    <React.Fragment>
      <AnimatePresence initial={false} mode="wait">
          <Routes location={location} key={location.pathname} >
            <Route path="" element={<Base />}>
              <Route path="" Component={Home} />
              <Route path="about" Component={About} />
              <Route path="education" Component={Education} />
              <Route path="jobs" Component={Work} />
              <Route path="skills" Component={Skills} />
              <Route path="project" Component={Project} />
            </Route>
          </Routes>
        </AnimatePresence>
    </React.Fragment>
  );
}

export default App;
