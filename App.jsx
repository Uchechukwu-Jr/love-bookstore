import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import Blog, { loader as blogPageLoader } from "./components/Blog";
//import { Test, loader as testLoader } from "./pages/Test";
//import { Books } from "./pages/Books";
import MyComponent from "./components/She";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "blog",
        element: <Blog />,
        loader: blogPageLoader,
      },
      {
        path: "books",
        element: <MyComponent />,
        //loader: testLoader,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
