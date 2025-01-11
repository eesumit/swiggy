import React from 'react';
import ReactDOM from 'react-DOM/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer'
import About from './components/About'
import Error from './components/Error'
import Contact from './components/Contact';
import Help from './components/Help';
import Login from './components/Login';
import RestaurentMenue from './components/RestaurentMenue';
import Profile from './components/Profile1';
import Profile2 from './components/Profile2';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Refer from './components/Refer';
const AppLayout = () => {
     
    return(
        <>
            <Header />
            <Outlet/>
            <Footer/>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        errorElement : <Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                
                path : "/about",
                element : <About/>,
                children:[
                    {
                        path:"profile",
                        element:<Profile name="sumit singh sp"/>
                    },
                    {
                        path: "classProfile",
                        element:<Profile2 name="sumit singh sp"/>

                    },
                ]
            },
            {
                path: "referral",
                element:<Refer/>

            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/help",
                element:<Help/>
            },
            {
                path:"/language",
                element:<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus fuga beatae quo voluptate porro rem!</h1>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {   // the id element is dynamic here, anything we write after the  /restaurant/(anything) -> w'll lended on that page. i mean in place of id.
                path:"/restaurants/:restId",
                element:<RestaurentMenue/>
            }
        ]
        
    } 

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);