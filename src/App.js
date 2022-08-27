
import React, { useEffect, useState } from 'react';
import Items from './Items';
import Button from './Button';
import './App.css';

function App() { 
 const [list, setList] = useState([]);
 
  useEffect(() => {
      fetch('http://localhost:3333/list')
      .then(data => data.json())
      .then(items => {  
          setList(items)
      })
    }, []);
 
        console.log(list)
          return (
            <div className="App">
              
            {list.map(list => {
          return(
              <Items 
              key={list.id}
              name={list.name}
              link={list.link}
            
              />
              );
          })}



    </div>
  );
}

export default App;
