


import React, { useState } from 'react';

const Selection = ({ applyColor }) => {
  const [selectionStyle, setSelectionStyle] = useState({});

  const updateSelectionStyle = (newStyle) => {
    setSelectionStyle(newStyle);
  };

  return (
    <div className="fix-box" style={{...selectionStyle, display:'flex',justifyContent:'center',alignItems:'center',width:"200px",height:'200px',border:'1px solid black',textAlign:'center', marginLeft:'5px'}} onClick={() => applyColor(updateSelectionStyle)}>Selection</div>
  );
}

export default Selection;
