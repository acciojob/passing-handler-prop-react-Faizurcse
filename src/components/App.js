
import React, { useState } from 'react'
import Selection from './Selection';
import ColourSelector from './ColourSelector';

const colourConfig = [{
    
    key: 'blue',
    label: 'Blue',
    classname: 'btn-blue',
    background: 'rgb(34, 193, 195)'
  }, {
    
    key: 'orange',
    label: 'Orange',
    classname: 'btn-orange',
    background: 'rgb(221, 112, 18)'
  }, {
   
    key: 'green',
    label: 'Green',
    classname: 'btn-green',
    background: 'rgb(44, 209, 88)'
  }
]

const title = 'Select the gradient and then the Box to change the color';

 const App = () => {
  const [col,setCol] = useState()
  function color(color){
    setCol(color)
    console.log(color)
  }
  

 return (
    <div>
      <ColourSelector colourConfig={colourConfig}  color={color}/>
      <Selection col={col}/>
    </div>
  )
}


export default App;

App.js
