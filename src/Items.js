import React from 'react'
import "./App.css"

function Items({name, picture}) {
    return (
        
        <div className="card">
            { <img className="container" src={picture} alt=""  /> }

            <h1>{name}</h1>
          
            
        </div>
        
    )
}

export default Items