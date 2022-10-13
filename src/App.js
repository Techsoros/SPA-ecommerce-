import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Error404 from "./components/Error404/Error404";

import MainLayout from "./layouts/MainLayout";
// Starting 53 work
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/about",
        },
      ],
    },
  ]);
  return (
    <div className="my-body">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
