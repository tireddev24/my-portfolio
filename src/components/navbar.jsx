/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar({ isMenuClicked, toggleMenu, time, date }) {
  const linkClass = ` px-1 home relative py-2 duration-500 cursor-pointer before:absolute before:content-[''] before:z-10 before:w-0 before:h-[100%] before:left-[50%] before:top-0 
                                                before:border-b-2 before:border-solid before:duration-300 before:ease-in-out hover:before:left-0 hover:before:top-0
                                                 hover:before:w-[100%] hover:before:h-100  hover:before:border-darkpink dark:hover:before:border-cyan-600 hover:before:rounded-sm  `;
  const customHoverClass = ` before:absolute before:content-[''] before:z-10 before:w-0 before:h-[100%] before:left-[50%] before:top-0 
                                                before:border-b-2 before:border-solid before:duration-300 before:ease-in-out hover:before:left-0 hover:before:top-0
                                                 hover:before:w-[100%] hover:before:h-100  hover:before:border-white dark:hover:before:border-cyan-600 hover:before:rounded-sm `;

  let width = window.innerWidth;
  if (width > 1000) {
    width = true;
  } else {
    width = false;
  }
  const [burgerClass, setBurgerClass] = useState("opacity-100");
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isMenuClicked) {
      setBurgerClass("r opacity-0  ");
      setShow(true);
    } else {
      setBurgerClass("  opacity-100 ");
      setShow(false);
    }
  }, [isMenuClicked]);

  const links = [
    { link: "/", id: "header", title: "home" },
    { link: "/about", id: "about", title: "about" },
    { link: "/projects", id: "projects", title: "projects" },
    { link: "/contact", id: "contact", title: "contact" },
  ];

  const closeBurger = () => {
    setShow(false);
    setBurgerClass("  opacity-100  ");
  };

  return (
    <>
      <nav className="  fixed z-50 w-full  ">
        <div
          className=" backdrop-blur-md relative shadow-sm  shadow-[#8a045b]  h-12 phoneLg:h-[4rem] wide_desktop:h-[6rem] flex  items-center justify-between min-w-96  p-3 tablet:p-3  duration-500 z-10 
            dark:shadow-darkText "
        >
          {/* burger */}
          <div
            onClick={toggleMenu}
            className={`  block wide:hidden scale-75 phoneLg:scale-100 cursor-pointer mt-2 phoneLg:ml-2 -mr-4 ease-linear duration-500`}
          >
            <div className=" *:duration-500 ">
              <div
                className={`${burgerClass} relative w-[35px] h-[0.5em] rounded-[0.5em] mb-1 bg-darkpink dark:bg-darkText`}
              ></div>
              <div
                className={`${burgerClass} relative w-[35px] h-[0.5em] rounded-[0.5em] mb-1 bg-darkpink dark:bg-darkText`}
              ></div>
              <div
                className={`${burgerClass} relative w-[35px] h-[0.5em] rounded-[0.5em] mb-1 bg-darkpink dark:bg-darkText`}
              ></div>
            </div>
          </div>

          {/* // inside burger  */}
          <div
            className={`${
              show ? "opacity-100" : "opacity-0"
            }  scale-90 phoneLg:scale-100 bg-darkpink dark:bg-[#063248] text-white absolute  rounded-lg  z-10 -top-3 phoneLg:top-0 -left-5 phoneLg:-left-1 duration-700`}
            onClick={toggleMenu}
          >
            <div className="move-left fixed scale-90 left-[1px] top-[15px]">
              <div className="flex items-center ml-[25px] p-[2px] border-white dark:border-cyan-300 border-2 border-transparent   rounded-md cursor-pointer ease-linear duration-300  show">
                <div className="h-[40px] cursor-pointer pr-2   border-solid *:bg-white border-white scale-100 dark:*:bg-cyan-300">
                  <div className="relative w-[35px] h-[0.5em] mb-1 rounded-[0.5em]   rotate-[135deg] translate-x-[0.2em] translate-y-[1em]  "></div>
                  <div className="relative w-[35px] h-[0.5em] mb-1 rounded-[0.5em]  scale-0"></div>
                  <div className="relative w-[35px] h-[0.5em] mb-1 rounded-[0.5em]  rotate-45  translate-x-[0.2em] translate-y-[-0.44em]"></div>
                </div>
              </div>
            </div>
            <ul className=" flex flex-col items-center uppercase  p-2 px-2 font-semibold *:m-[15px] *:rounded-md w-[300px] *:border-y-2 *:border-transparent *:border-solid ">
              {links.map((prop, key) => (
                <li
                  key={key}
                  className={`relative py-1 cursor-pointer  duration-500`}
                >
                  <Link
                    to={prop.id}
                    spy={true}
                    smooth={true}
                    offset={-85}
                    duration={500}
                    className={customHoverClass}
                    onClick={closeBurger}
                  >
                    {prop.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* start */}
          <div className="navbar-title flex items-center gap- px-7 font-bold text-[30px] mr-auto laptop:mr-0">
            <p className="navbar-ttle-text text-darkpink  dark:text-darkText text-2xl tablet:text-4xl ">
              TiredDev
            </p>
          </div>

          {/* navigation */}
          <div className=" hidden wide:flex items-center justify-between text-xl uppercase font-semibold tracking-wide rounded-lg ">
            <ul className="list-none flex justify-between desktop:*:mx-10  *:mx-5  *:border-transparent *:rouned-lg ">
              {links.map((prop, key) => (
                <li
                  key={key}
                  className="bg:transparent  target:text-yellow-400 ease-out duration-200"
                >
                  <Link
                    to={prop.id}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={400}
                    className={`${linkClass} `}
                  >
                    {prop.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* end */}
          <div className="navbar-mod opacity-0  wiggle mr-[50px] "></div>

          <div className=" navbar-time absolute text-red-500">
            <div className="flip-time">
              <div className="flip-time-inner">
                <div className="flip-time-front">{time}</div>
                <div className="flip-time-back">{date}</div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
