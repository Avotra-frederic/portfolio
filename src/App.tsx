import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Base from "./components/layouts/Base";
import About from "./components/pages/About";
import Education from "./components/pages/Education";
import Work from "./components/pages/Work";
import Skills from "./components/pages/Skills";
import Project from "./components/pages/Project";
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Routes>
        <Route path="" element={<Base/>}>
          <Route path="" Component={Home}/>
          <Route path="about" Component={About}/>
          <Route path="education" Component={Education}/>
          <Route path="jobs" Component={Work}/>
          <Route path="skills" Component={Skills}/>
          <Route path="project" Component={Project}/>
        </Route>
      </Routes>
      
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
