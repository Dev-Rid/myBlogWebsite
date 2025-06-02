import React from "react"
// import Home from "../pages/homepage"
import { createBrowserRouter } from "react-router-dom"
import Contact from "../pages/Contact"
import Dashboard from "../pages/Dashboard"
import Signup from "../pages/Signup"
import Login from "../pages/Login"
import Homepage from "../pages/Home"
import Home from "../pages"
import NotFound from "../pages/NotFound"
import PostDetails from "../pages/PostDetails"
import CreatePostPage from "../pages/CreateBlog"
import Logo from "../pages/Logo"

const route = createBrowserRouter([
    {
        path: "/",
        element: <Homepage/>,
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
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Signup/>
            },
            {
                path: "/postdetails",
                element: <PostDetails/>
            },
            {
                path: "/create",
                element: <CreatePostPage/>
            },
            {
                path: "/logo",
                element: <Logo/>
            }
        ],
 
    },
    {
        path: "*",
        element: <NotFound/>       
    }
    
])

export default route