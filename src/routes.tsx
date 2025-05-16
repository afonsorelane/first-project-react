import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Contact, Home, Project } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Project />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
