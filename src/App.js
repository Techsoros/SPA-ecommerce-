import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Error404 from "./components/Error404/Error404";
import About from "./components/About/About";
import Order from "./components/Order/Order";
import Inventory from "./components/Inventory/Inventory";
import Shop from "./components/Shop/Shop";
import MainLayout from "./layouts/MainLayout";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

// Starting 53 work
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "about",
          element: <About></About>,
        },
        {
          path: "",
          element: <h1 className="text-center">Default Page</h1>,
        },
        {
          path: "shop",
          loader: () => fetch("products.json"),
          element: <Shop></Shop>,
        },
        {
          path: "order",
          loader: () => fetch("products.json"),
          element: <Order></Order>,
        },
        {
          path: "inventory",
          element: <Inventory></Inventory>,
        },
        {
          path: "*",
          element: <Error404></Error404>,
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
