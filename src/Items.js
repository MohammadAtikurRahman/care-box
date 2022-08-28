import ReactPlayer from 'react-player'
import "./App.css"        
    function Items({name, link,id}) {
               
    return (
          
 
        <div>
             
            { 
            <ReactPlayer 
                    controls  
                    onReady={() => console.log('onReady callback')}
                    onStart={() => console.log('onStart callback')}
                    onPause={() => console.log('onPause callback')}
                    onEnded={() => console.log('onEnded callback')}
                    onError={() => console.log('onError callback')}
                    url={link} 
            />  
            }
        </div> 
      
    )

   
}

export default Items