/* eslint-disable react/prop-types */

import About from "./about";
import Projects from "./projects";

export default function Body({ projectsData, personalData }) {
  return (
    <div className=" relative mainbody scale-95 phoneLg:scale-100 -mt-28 phoneLg:mt-10  min-h-[90svh]">
      <About personalData={personalData} />
      <Projects projectsData={projectsData} />
    </div>
  );
}
