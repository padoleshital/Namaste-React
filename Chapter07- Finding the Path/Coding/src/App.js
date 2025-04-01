import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body  from './component/Body';
import Header from './component/Header';
import Contact from './component/Contact';
import Blog from './component/Blog';
import About from './component/About';
import Footer from './component/Footer';
import Error from './component/Error';
import {Outlet} from "react-router";
import RestaurantMenu from "./component/RestaurantMenu";
import { useParams } from "react-router";

const AppLayout = () =>{
    return (
        <React.Fragment>         
            <Header />           
            <Outlet />
            <Footer />
        </React.Fragment>
        )
};

const appRouter = createBrowserRouter([   

    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children: [
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"about",
                element:<About />
            },
            {
                path:"contact",
                element:<Contact />
            },
            {
                path:"blog",
                element:<Blog />
            },
            {
                path:"restaurant/:id",
                element:<RestaurantMenu />
            }
        ],
        
       
    }, 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <RouterProvider router={appRouter}/>
</React.StrictMode>

); // render function component