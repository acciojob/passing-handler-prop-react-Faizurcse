
import React from 'react';

const ColourSelector = ({ config, selectNextBackground }) => {
   const { background, label } = config;

   const handleClick = () => {
     selectNextBackground({ background });
   };

   return (
    <button style={{width:'125px',height:'50px',border:'1px solid black',backgroundColor: background, marginLeft: '5px'}} onClick={handleClick}>{label}</button>
  );
}

export default ColourSelector;

