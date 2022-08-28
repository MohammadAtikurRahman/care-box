
import React  from 'react'

import './App.css';
function Button(){
    
     function myButton() { 
	document.getElementById("mainFrameOne").style.display="none"; 
	document.getElementById("mainFrameTwo").style.display="block"; 
  }



   return(

    



       <div className='up'>

          
       
            <button  className="bbtn ssuccess "  >
                        
            <i class="fa fa-spinner fa-spin pst"  ></i>
                        
             Streaming link one</button>

              <button  className="bbtn ssuccess "  >
                        
            <i class="fa fa-spinner fa-spin pst"  ></i>
                        
             Streaming link two</button>
       </div>

   )
}


export default Button;