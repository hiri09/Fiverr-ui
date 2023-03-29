import React from 'react'
import './Feature.scss';
const Feature = () => {
  return (
    <div className='featured'>
      <div className="container">
        <div className="left">
            <h1>Find the perfect <i>freelance</i> services for you business</h1>
            <div className="search">
                <div className="searchInput">
                    <img src="./img/search.png" alt="" />
                    <input type="text" placeholder='Try building mobil app'/>
                </div>
                <button>Search</button>
            </div>
            <div className="popular">
                <span>Popular:</span>
                <button>Web Design</button>
                <button>Wordpress</button>
                <button>Logo Design</button>
                <button>Ai Services</button>
            </div>
        </div>
        <div className="right">
            <img src="./img/man.png" alt="man" />
        </div>
      </div>
    </div>
  )
}

export default Feature
