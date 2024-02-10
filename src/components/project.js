import React from 'react'
import '../assets/css/project.css'
export default function Project(props) {
  return (
    <div className="project">
    <img src={props.img} alt="project" />
    <h4>Project #{props.projectNo}</h4>
    <h1>{props.name}</h1>

    <p>{props.detail}</p>

    <button>VIEW ALL</button>

</div>
  )
}
