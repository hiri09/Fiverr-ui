import React from "react";
import "./ProjectCard.scss";

function ProjectCard({ card }) {
  return (
    <div className="projectCard">
      <img src={card.img} alt="" />
      <div className="info">
        <img src={card.pp} alt="" />
        <div className="texts">
          <h2>{card.cat}</h2>
          <span>{card.username}</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
/*import React from 'react'
import './ProjectCard.scss';
import { Link } from "react-router-dom";
const ProjectCard = ({item}) => {
  return (
    <Link to="/">
      <div className="projectCard">
        <img src={item.img} alt="" />
        <div className="info">
            <img src={item.pp} alt="" />
            <div className="texts">
                <h2>{item.cat}</h2>
                <span>{item.username}</span>
            </div>
        </div>
        <h1>{item.username}</h1>
      </div>
    </Link>
  )
}

export default ProjectCard
 */