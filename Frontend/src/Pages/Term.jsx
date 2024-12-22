import React from 'react'
import "./Term.css"

function Term({title, points}) {

  return (
    <div className="term-container">
        <div>
            <h2>{title}</h2>
        </div>

        <div className="points">
            {
                points.map((item, index) => <p key={index}>{index+1}. {item}</p>)
            }
        </div>
    </div>
  )
}

export default Term