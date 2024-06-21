import React from 'react'
import grid from  "../../assets/images/grid-img.svg"
const Grid = () => {
  return (<>
    <div style={{textAlign:"center",fontSize:"35px" ,padding:"5rem 2rem"}}>Here is a brief list of the current<br></br> industries
    our clients belong in</div>
    <img style={{width:'50%',display:'flex',margin:'0 auto'}} src={grid}></img>
    <div style={{height:"5rem"}}></div>
    </>
  )
}

export default Grid