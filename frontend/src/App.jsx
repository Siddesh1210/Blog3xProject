import React from "react";
import Navbar from "./components/Navbar.jsx";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Profile from "./components/Profile.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import CreateBlog from "./components/CreateBlog.jsx";
import './App.css'
const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/auth/signup",
        element: <Signup />,
      },
      {
        path: "/auth/login",
        element:<Login />
      },
      {
        path: "/users/profile",
        element: <Profile />,
      },
      {
        path: "/blogs/createblog",
        element: <CreateBlog />,
      },
    ],
  },
]);

export default App;
