import React from 'react'

function Policy({title, para}) {
  return (
    <div className="term-container">
        <div>
            {title && <h2>{title}</h2>}
        </div>

        <div className="points">
            <p>{para}</p>
        </div>
    </div>
  )
}

export default Policy