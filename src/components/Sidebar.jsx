import { NavLink } from "react-router-dom";
import {
  DashboardSvg,
  DocumentationSvg,
  HelpSvg,
  InboxSvg,
  KanbanSvg,
  ProductsSvg,
  SignInSvg,
  SignUpSvg,
  UpgradetoProSvg,
} from "../assets/svgs";
import PrivacyPolicySvg from "../assets/icons/shield-sedo-line-icon.svg";

export const Sidebar = () => {
  return (
    <aside className=" bg-slate-200 min-h-[100vh] border-r-2 border-r-slate-600">
      <ul className="space-y-2 mt-10 font-medium z-[999] pt-7">
        <li>
          <NavLink
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <DashboardSvg />
            <span className="ms-3">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="categories"
            className={({ isActive }) =>
              isActive
                ? "flex items-center p-2 text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:bg-gray-700 group"
                : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            }
          >
            <KanbanSvg />
            <span className="flex-1 ms-3 whitespace-nowrap">Categories</span>
            <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
              Pro
            </span>
          </NavLink>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <InboxSvg />
            <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
            <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
              3
            </span>
          </a>
        </li>

        <li>
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <ProductsSvg />
            <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <SignInSvg />
            <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <SignUpSvg />
            <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
          </a>
        </li>
      </ul>
      <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
          >
            <UpgradetoProSvg />
            <span className="ms-3">Upgrade to Pro</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
          >
            <DocumentationSvg />
            <span className="ms-3">Documentation</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
          >
            <img
              className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              src={PrivacyPolicySvg}
              alt=""
            />
            <span className="ms-3">Privacy Policy</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
          >
            <HelpSvg />
            <span className="ms-3">Help</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};
