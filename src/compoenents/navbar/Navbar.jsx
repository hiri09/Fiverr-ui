import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Navbar.scss";
const Navbar = () => {
    const [active,setActive]=useState(false);
    const [open,setOpen]=useState(false);
    const {pathname}=useLocation();
    const isactive=()=>{
        window.scrollY > 0 ? setActive(true) : setActive(false);
    }
    useEffect(()=>{
        window.addEventListener('scroll',isactive);

        return ()=>{
            window.removeEventListener('scroll',isactive);
        }
    },[])

    const currentuser={
        id:1,
        username:"abhi",
        isseller:true
    }
  return (
    <div className={active || pathname!=="/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
            <Link to="/" className='link'><span className='text'>fiverr</span></Link>
            <span className='dot'>.</span>
        </div>
        <div className="links">
            <span>Fiverr Business</span>
            <span>Explore</span>
            <span>English</span>
            <span>Sign in</span>
            {!currentuser?.isseller && <span>Become a seller</span>}
            {!currentuser && <button>Join</button>}
            {
                currentuser && (
                    <div className="user" onClick={()=>{setOpen(!open)}}>
                        <img src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="img" />
                        {/* ? is used for the checking that that proprty exist or not */}
                        <span>{currentuser?.username}</span>
                        {open && <div className="options">
                            {
                                currentuser?.isseller && (
                                    <>
                                       <Link className='link' to="/mygigs"><span>Gigs</span></Link>
                                       <Link className='link'  to="add"><span>Add New Gigs</span></Link>
                                    </>
                                )
                            }
                            <Link  className='link' to="orders"><span>orders</span></Link>
                            <Link  className='link' to="messages"><span>messages</span></Link>
                            <Link  className='link' to="/"><span>Log out</span></Link>
                        </div>}
                    </div>
                )
            }
            
        </div>
      </div>
      { (active || pathname!=="/") && (
        <>
           <hr />
            <div className="menu">
                <Link className="link menuLink" to="/">
                Graphics & Design
                </Link>
                <Link className="link menuLink" to="/">
                Video & Animation
                </Link>
                <Link className="link menuLink" to="/">
                Writing & Translation
                </Link>
                <Link className="link menuLink" to="/">
                AI Services
                </Link>
                <Link className="link menuLink" to="/">
                Digital Marketing
                </Link>
                <Link className="link menuLink" to="/">
                Music & Audio
                </Link>
                <Link className="link menuLink" to="/">
                Programming & Tech
                </Link>
                <Link className="link menuLink" to="/">
                Business
                </Link>
                <Link className="link menuLink" to="/">
                Lifestyle
                </Link>
            </div>
            <hr />
        </>
      )}
    </div>
  )
}

export default Navbar
