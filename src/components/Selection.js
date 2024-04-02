
import React, { useState } from 'react'
function Selection({col}){
const [cc1,setCc1] = useState()
const [cc2,setCc2] = useState()
const [cc3,setCc3] = useState()

function kk1(){
    setCc1(col)
}

function kk2(){
    setCc2(col)
}

function kk3(){
    setCc3(col)
}
    return(
        <>
        <div className="fix-box" style={{display:'flex',justifyContent:'center',alignItems:'center',width:"100%",height:'700px'}}>
            <div className ="fix-box" style={{width:'200px',height:'200px',border:'1px solid black',textAlign:'center',backgroundColor:cc1}} onClick={()=>kk1()}>Slection</div>
            <div className ="fix-box" style={{width:'200px',height:'200px',border:'1px solid black',textAlign:'center',marginLeft:'5px',backgroundColor:cc2}} onClick={()=>kk2()}>Slection</div>
            <div className ="fix-box" style={{width:'200px',height:'200px',border:'1px solid black',textAlign:'center',marginLeft:'5px',backgroundColor:cc3}} onClick={()=>kk3()}>Slection</div>
        </div>
        </>
    )
}

export default Selection