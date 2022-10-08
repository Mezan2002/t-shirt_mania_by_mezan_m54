import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Orders from "./components/Orders/Orders";
import Main from "./layout/Main/Main";
import Shop from "./components/Shop/Shop";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/shop", element: <Shop></Shop> },
        { path: "/orders", element: <Orders></Orders> },
        { path: "/about", element: <About></About> },
        { path: "/contact", element: <Contact></Contact> },
      ],
    },
    {
      path: "*",
      element: (
        <h2 style={{ textAlign: "center" }}>404 page not founded ! 😢 </h2>
      ),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
