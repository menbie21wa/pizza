import React, { Fragment, useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { RiMenuLine } from "react-icons/ri";
import { HiOutlineX } from "react-icons/hi";
import logo from "../Assets/company-logo/pizzaLogo.png";

const Header = () => {
  // use state
  const [navBackground, setNavBackground] = useState(false);
  const [nav, setNav] = useState(false);

  // get user
  const user = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  const navRef = useRef();
  const location = useLocation();
  // const navigate = useNavigate();
  navRef.current = navBackground;

  // use effect
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 96;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // styles
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#FF890F" : navBackground ? "#2b2b2b" : "#2b2b2b",
    };
  };
  const linkColor =
    "px-5 py-2 flex items-center leading-snug font-display hover:opacity-75 text-lg hover:transform hover:scale-100 hover:md:scale-125 hover:duration-300";

  const styles = () => {
    switch (location.pathname) {
      case "/":
        return navBackground ? "white" : "white";
      case "/about":
        return navBackground ? "white" : "white";
      default:
        return navBackground ? "#white" : "white";
    }
  };

  // logo
  const logos = () => {
    switch (location.pathname) {
      case "/":
        return (
          <img
            className="xl:w-48 md:w-40 w-32 h-24"
            src={navBackground ? logo : logo}
            alt="Logo"
          />
        );
      default:
        return (
          <img
            className="xl:w-48 md:w-40 w-32 h-20"
            src={navBackground ? logo : logo}
            alt="Logo"
          />
        );
    }
  };

  const handleNav = () => {
    setNav((prev) => !prev);
  };
  // return
  return (
    <>
      <div
        style={{
          background: styles(),
          boxShadow: navBackground
            ? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            : "0 0 #0000",
        }}
        className="xl:bg-[#ffff] right-0 left-0 z-10 border-none"
        p="md"
      >
        <div
          className="pl-3"
          style={{ display: "flex", alignItems: "center", height: "100%" }}
        >
          <div className="container flex justify-between items-center mx-auto px-3 text-white">
            <div className="flex">
              <div className="flex justify-between items-center fixed md:relative left-0 top-0 w-full">
                <div className="flex ml-4">
                  <NavLink to="/">{logos}</NavLink>
                </div>
                <div onClick={handleNav} className="block md:hidden mr-4 ">
                  {!nav && <RiMenuLine size={20} />}
                </div>
              </div>
            </div>
            <ul className="hidden md:flex">
              <li className="p-1 uppercase text-[#FF890F]">
                <NavLink style={navLinkStyles} className={linkColor} to="/">
                  Home
                </NavLink>
              </li>
              <li className="p-1 uppercase">
                <NavLink
                  style={navLinkStyles}
                  className={linkColor}
                  to="/orders"
                >
                  Orders
                </NavLink>
              </li>
              <li className="p-1 uppercase">
                <NavLink style={navLinkStyles} className={linkColor} to="/who">
                  who we are
                </NavLink>
              </li>
            </ul>
            <div>
              <button
                href="#"
                class="px-5 inline py-3 text-xl font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-[#FF890F]"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
