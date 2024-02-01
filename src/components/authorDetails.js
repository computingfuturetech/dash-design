import React from 'react'

export default function AuthorDetails(props) {
  return (
    <div className="author-details">
            <div className="personal-info">
              <img src={props.img} alt="image" />
              <div className="info">
                <h1>{props.name}</h1>
                <p>{props.email}</p>
              </div>
            </div>
            <div className="function">
                <h1>{props.designation}</h1>
                <p>{props.at}</p>
            </div>
            <div className="status">
                <h1>{props.status}</h1>
            </div>
            <div className="employed">
                <h1>{props.employed}</h1>
            </div>
            <div className="edit">
                <a href="/">Edit</a>
            </div>
          </div>
  )
}
