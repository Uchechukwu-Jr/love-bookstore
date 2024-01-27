/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = ({ openMobileMenu, setOpenMobileMenu }) => {
  const location = useLocation();
  const path = location.pathname;

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );

  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const options = [
    {
      icon: "sunny",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
    {
      icon: "desktop-outline",
      text: "system",
    },
  ];
  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }

  onWindowMatch();

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });

  const handleCloseMenu = () => {
    openMobileMenu ? setOpenMobileMenu(false) : null;
  };

  return (
    <div className="w-full z-10 fixed top-0 bg-slate-50 text-black dark:bg-slate-950 dark:text-white border-b-slate-600 border-b-2">
      <div className="flex justify-between mx-auto w-[90%] px-2 py-3">
        <div className="flex items-center">
          <button
            onClick={() => setOpenMobileMenu(!openMobileMenu)}
            className="z-20 w-8 h-8 leading-10 mr-4 text-3xl md:hidden rounded-full m-1"
          >
            {openMobileMenu ? (
              <ion-icon name="close"></ion-icon>
            ) : (
              <ion-icon name="menu"></ion-icon>
            )}
          </button>
          <h1 className="text-nowrap font-extrabold sm:text-2xl text-base">
            <Link to="/" onClick={handleCloseMenu}>
              LOVE BOOKS
            </Link>
          </h1>
        </div>
        <div className="duration-100 dark:bg-slate-800 bg-gray-200 rounded">
          {options?.map((opt) => (
            <button
              key={opt.text}
              title={opt.text}
              onClick={() => setTheme(opt.text)}
              className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${
                theme === opt.text && "text-sky-600"
              }`}
            >
              <ion-icon name={opt.icon}></ion-icon>
            </button>
          ))}
        </div>
      </div>
      <button
        style={{ borderBottomLeftRadius: "20px" }}
        className={`absolute right-0 py-2 px-3 text-4xl bg-slate-50 dark:bg-slate-950 ${
          path == "/search" ? "hidden" : null
        }`}
      >
        <Link to="search">
          <ion-icon name="search"></ion-icon>
        </Link>
      </button>
    </div>
  );
};

export default Header;
