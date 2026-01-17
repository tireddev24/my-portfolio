/* eslint-disable react/prop-types */

import Header from "./components/header";
import Body from "./components/body";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { useEffect, useState } from "react";
import { usePersonalStore, useProjectsStore } from "./store/datastore";
import ErrorPage from "./components/errorhandle/error";

export default function App() {
  const { personalData, fetchPersonal } = usePersonalStore();
  const { projectsData, fetchProjects } = useProjectsStore();

  const [count, setCount] = useState(0);
  const [load, setLoad] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [error, setError] = useState(null);
  const [mode, setMode] = useState(
    JSON.parse(localStorage.getItem("mode")) || false
  );

  function toggleDarkMode() {
    setMode((prevMode) => !prevMode);
  }

  function menuClicked() {
    setIsMenuClicked((prevMode) => !prevMode);
  }

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(mode));
  }, [mode]);

  useEffect(() => {
    window.addEventListener("resize", watchWidth);

    function watchWidth() {
      setWindowWidth(window.innerWidth);
    }
  }, [windowWidth]);

  useEffect(() => {
    setLoad(true);
    const get = async () => {
      try {
        await fetchPersonal();
        await fetchProjects();

        setError(false);
      } catch (e) {
        console.log(e);
        setError(true);
      } finally {
        setLoad(false);
      }
    };
    get();
  }, []);

  if (load) {
    return (
      <div className="min-h-screen bg-red-100 dark:bg-slate-900 flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-t-transparent"></div>
      </div>
    );
  }

  if (error) return <ErrorPage />;

  return (
    <div className="overflow-hidden    bg-red-100  dark:bg-slate-900 dark:text-white   ">
      {/* <RouterProvider router={router}/> */}
      <Navbar
        toggle={toggleDarkMode}
        darkmode={mode}
        toggleMenu={menuClicked}
        isMenuClicked={isMenuClicked}
        count={count}
      />
      <Header darkmode={mode} setCount={setCount} data={personalData} />
      <Body projectsData={projectsData} personalData={personalData} />

      <Footer data={personalData} />
    </div>
  );
}
