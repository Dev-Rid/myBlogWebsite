import React from "react"
import Home from "../pages/homepage"
import { createBrowserRouter } from "react-router-dom"
import Contact from "../pages/Contact"
import Dashboard from "../pages/Dashboard"
import Signup from "../pages/Signup"
import Login from "../pages/Login"
import Notfound from "../pages/Notfound"

const route = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/dashboard",
                element: <Dashboard/>
            },
            {
                path: "/notfound",
                element: <Notfound/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Signup/>
            }
        ]
    }
    
])

export default route