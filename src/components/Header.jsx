import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu } from "./Menu";

export const Header = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
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

  return (
    <header>
      {menu && <Menu setMenu={setMenu} />}
      <nav
        aria-label="Top navbar"
        className="w-full z-10 fixed top-0 bg-slate-50 text-black dark:bg-slate-950 dark:text-white border-b-slate-600 border-b-2"
      >
        <div className="flex justify-between mx-auto container-fluid px-2 py-2">
          <div
            onClick={() => navigate("/")}
            className="flex cursor-pointer justify-center leading-8 content-center  text-nowrap font-extrabold text-2xl"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="red"
                className="bi bi-balloon-heart-fill leading-9 m-1 pt-1 dark:text-red-600 cursor-pointer"
                viewBox="0 0 14 14"
              >
                <path
                  fillRule="evenodd"
                  d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2 2 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386"
                />
              </svg>
            </span>
            <h1 className="hidden dark:text-white sm:inline-block">
              Love Books
            </h1>
          </div>
          <div className="flex justify-center content-center">
            <div className="duration-100 dark:text-white  dark:bg-slate-800 bg-gray-200 rounded">
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
            <button
              onClick={() => navigate("search")}
              title="Search"
              aria-label="Search button"
              className="mx-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                fill="currentColor"
                className="bi bi-search leading-9 m-1 pt-1 dark:text-white cursor-pointer"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>
            <button
              title="Menu"
              aria-label="Menu Button"
              onClick={() => setMenu(!menu)}
            >
              {menu ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-x-lg leading-8 m-1 dark:text-white cursor-pointer"
                  viewBox="0 0 14 14"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-list leading-8 m-1 dark:text-white cursor-pointer"
                  viewBox="0 0 14 14"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
