/* eslint-disable react/prop-types */
import { NavLink, useNavigate } from "react-router-dom";

export const Menu = ({ setMenu }) => {
  const navigate = useNavigate();

  const handleClick = (event, path) => {
    event.preventDefault();
    setMenu(false);
    navigate(path);
  };

  return (
    <nav
      aria-label="Menu"
      className="fixed flex flex-col dark:bg-slate-800 bg-[#c0e2ff] text-lg z-[999] font-bold right-1 top-[60px] rounded"
    >
      <NavLink
        to="/"
        onClick={(event) => handleClick(event, "/")}
        className={({ isActive }) =>
          isActive
            ? `px-4 py-1 dark:text-black cursor-pointer bg-[aliceblue] border-b-2 border-slate-100`
            : `px-4 py-1 dark:hover:text-black cursor-pointer hover:bg-[aliceblue] border-b-2 border-slate-100`
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="currentColor"
          className="bi bi-house inline mr-2"
          viewBox="0 0 16 16"
        >
          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
        </svg>
        Home
      </NavLink>
      <NavLink
        to="page/1"
        onClick={(event) => handleClick(event, "page/1")}
        className={({ isActive }) =>
          isActive
            ? `px-4 py-1 dark:text-black cursor-pointer bg-[aliceblue] border-b-2 border-slate-100`
            : `px-4 py-1 dark:hover:text-black cursor-pointer hover:bg-[aliceblue] border-b-2 border-slate-100`
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="currentColor"
          className="bi bi-book inline mr-2"
          viewBox="0 0 16 16"
        >
          <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
        </svg>
        Books
      </NavLink>
      <NavLink
        to="genres"
        onClick={(event) => handleClick(event, "genres")}
        className={({ isActive }) =>
          isActive
            ? `px-4 py-1 dark:text-black cursor-pointer bg-[aliceblue] border-b-2 border-slate-100`
            : `px-4 py-1 dark:hover:text-black cursor-pointer hover:bg-[aliceblue] border-b-2 border-slate-100`
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="currentColor"
          className="bi bi-tags inline mr-2"
          viewBox="0 0 16 16"
        >
          <path d="M3 2v4.586l7 7L14.586 9l-7-7zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586z" />
          <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1z" />
        </svg>
        Genres
      </NavLink>
    </nav>
  );
};
