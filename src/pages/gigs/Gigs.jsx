import React, { useState } from 'react'
import GigCard from '../../compoenents/gigCard/GigCard';
import "./Gigs.scss";
import {gigs} from "../../data";
const Gigs = () => {
  const[open,setOpen]=useState(false);
  //const[sort,setSort]=useState("sales");
  return (
    <div className='gigs'>
      <div className="container">
        <span className="breadcrumps">FIVERR  GRAPHICS & DESIGN </span>
        <h1>AI Artists</h1>
        <p>Explore the boundaries of art and technology with Fiverr's AI artists</p>

        <div className="menu">
          <div className="left">
            <span>Budegd</span>
            <input type="text" placeholder='min'/>
            <input type="text" placeholder='max'/>
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">SortBy</span>
            <span className="sortType">Best Selling</span>
            <img src="./img/down.png" alt="" onClick={()=>setOpen(!open)}/>
            {
              open && (
                  <div className="rightMenu">
                    <span>Newest</span>
                    <span>Best Selling</span>
                  </div>
              )
            }
          </div>
        </div>
        <div className="cards">
          {
            gigs.map(gig=>(
              <GigCard key={gig.id} item={gig}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Gigs
