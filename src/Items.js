import React from 'react'
import ReactPlayer from 'react-player'
import "./App.css"

function Items({name, link,id}) {
    return (
        
        <div className="card">
            {/* { <img className="container" src={link} alt=""  /> } */}

            
            { <ReactPlayer url={link} />   }
             

            {/* <h1>{name}</h1>
            <h1>{id}</h1>
           */}
            
        </div>
        
    )
}

export default Items