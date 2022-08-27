import React,{sanitize} from 'react'
import ReactPlayer from 'react-player'
import "./App.css"

function Items({name, link,id}) {
    return (
        
        <div className="card">
          

             <button>Streamin one video</button>


            { <ReactPlayer 
            
            controls
                
            onReady={() => console.log('onReady callback')}
            onStart={() => console.log('onStart callback')}
            onPause={() => console.log('onPause callback')}
            onEnded={() => console.log('onEnded callback')}
            onError={() => console.log('onError callback')}
            
            url={link} />   }
         
    











           
        </div>
        
    )
}

export default Items