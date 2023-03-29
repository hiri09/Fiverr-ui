import React from 'react';
import './App.scss';
import Navbar from './compoenents/navbar/Navbar';
import Footer from './compoenents/footer/Footer';
import Home from './pages/home/Home';
import Gigs from './pages/gigs/Gigs';
import Gig from './pages/gig/Gig';
import Add from './pages/add/Add';
import Orders from './pages/orders/Orders';
import Message from './pages/message/Message';
import Messages from './pages/messages/Messages';
import Mygigs from './pages/myGigs/Mygigs';
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
function App() {
  const Layout=()=>{
    return (
      <div className="app">
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/gigs",
          element:<Gigs/>
        },
        {
          path:"/gig/:id",
          element:<Gig/>
        },
        {
          path:"/orders",
          element:<Orders/>
        },
        {
          path:"/mygigs",
          element:<Mygigs/>
        },
        {
          path:"/add",
          element:<Add/>
        },
        {
          path:"/message/:id",
          element:<Message/>
        },
        {
          path:"/messages",
          element:<Messages/>
        },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
