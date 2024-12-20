import React, { useState } from "react";
import logo from "../assets/logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { ImCross } from "react-icons/im";

import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="w-full absolute z-50 flex bg-transparent items-center justify-between text-sm py-4 px-2 sm:px-[2%] text-white  ">
        <div
          className="flex items-center"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          <img
            onClick={() => navigate("/")}
            className="w-14 h-auto cursor-pointer"
            src={logo}
            loading="lazy"
            alt="hero image"
          />

          <span
            className="font-extrabold text-xl logo cursor-pointer text-white"
            onClick={() => navigate("/")}
          >
            {" "}
            FORENSIC <br />
            AGORA-2025
          </span>
        </div>
        <ul className="hidden md:flex items-start gap-5 font-semibold text-white ">
          <NavLink to="/">
            <li className="py-1">Home</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/about">
            <li className="py-1">About</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/sponsors">
            <li className="py-1">Sponsors</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/ourteam">
            <li className="py-1">Our Team</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/contact">
            <li className="py-1">Contact</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
        </ul>

        <div className="flex flex-col md:hidden px-4 bg-transparent text-white">
          <HiMenuAlt3
            onClick={() => setShowMenu(true)}
            className="text-3xl md:hidden cursor-pointer ml-1  "
          />
        </div>
        <div className="hidden md:block"></div>
      </div>
      {/* ===========Mobile Menu=========== */}

      <div className="md:hidden">
        <div
          className={`${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } md:hidden right-0 top-0 bottom-0 z-50 overflow-hidden bg-white transition-all`}
        >
          <div className=" w-full px-4 py-6">
            <ImCross
              className="cursor-pointer text-2xl ml-auto"
              onClick={() => setShowMenu(false)}
            />
          </div>
          <ul className="flex flex-col gap-2 items-center mt-5 px-5 text-left font-semibold">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              <p className="px-4 py-2 rounded inline-block ">Home</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about">
              <p className="px-4 py-2 rounded inline-block ">About</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/sponsors">
              <p className="px-4 py-2 rounded inline-block ">Sponsors</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/ourteam">
              <p className="px-4 py-2 rounded inline-block ">Our Team</p>
            </NavLink>

            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              <p className="px-4 py-2 rounded inline-block ">Contact</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
