
import React from 'react';

const ColourSelector = ({colourConfig,color}) => {
  return (
    <>
      <div style={{marginTop:'50px'}}>
        <div style={{display:'flex',justifyContent:'center'}}>
          {colourConfig.map((colour) => <button  className={colour.classname} key={colour.key} style={{width:'125px',height:'50px',border:'1px solid black',backgroundColor: colour.background}} onClick={()=>color(colour.background)} >{colour.label}</button> )}
        </div>
      </div>
    </>
  );
};

export default ColourSelector;
