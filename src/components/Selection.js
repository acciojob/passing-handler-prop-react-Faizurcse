import React, { useState } from "react";
function Selection({ col, t }) {
  const [cc1, setCc1] = useState({color1:'',colourConfigs:''});
  const [cc2, setCc2] = useState({color1:'',colourConfigs:''});
  const [cc3, setCc3] = useState({color1:'',colourConfigs:''});

 

  function kk1(e) {
    
    setCc1((cols)=>{
       
        return {...cols,['colourConfigs']:t,['color1']:col}
    });
  }

  function kk2() {
    setCc2((cols)=>{
        return {...cols,['colourConfigs']:t,['color1']:col}
    });
  }

  function kk3() {
    setCc3((cols)=>{
        return {...cols,['colourConfigs']:t,['color1']:col}
    });
  }
  return (
    <>
      <div
        className="fix-box"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "700px",
        }}
      >
        <div
          data-test-id={cc1.colourConfigs}
          className="fix-box"
          style={{
            width: "200px",
            height: "200px",
            border: "1px solid black",
            textAlign: "center",
            backgroundColor: cc1.color1,
          }}
          onClick={(e) => kk1(e)}
        >
          Slection
        </div>
        <div
          data-test-id={cc2.colourConfigs}
          className="fix-box"
          style={{
            width: "200px",
            height: "200px",
            border: "1px solid black",
            textAlign: "center",
            marginLeft: "5px",
            backgroundColor: cc2.color1,
          }}
          onClick={() => kk2()}
        >
          Slection
        </div>
        <div
          data-test-id={cc3.colourConfigs}
          className="fix-box"
          style={{
            width: "200px",
            height: "200px",
            border: "1px solid black",
            textAlign: "center",
            marginLeft: "5px",
            backgroundColor: cc3.color1,
          }}
          onClick={() => kk3()}
        >
          Slection
        </div>
        {/* {colourConfig.map((e)=><div data-testid={cc3} key={e.key} className ="fix-box" style={{width:'200px',height:'200px',border:'1px solid black',textAlign:'center',marginLeft:'5px',backgroundColor:cc3}} onClick={()=>{kk3(e.key)}}>Slection</div>)} */}
      </div>
    </>
  );
}

export default Selection;
