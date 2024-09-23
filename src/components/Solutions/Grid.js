import React from 'react'
import grid from  "../../assets/images/grid-img.svg"
import grid2 from  "../../assets/images/Group 347.svg"

const Grid = () => {
  return (<>
    <div className="grid-head" >Here’s a look at the industries we serve.<br></br> </div>
    <img  className="grid-w-img" src={grid}></img>
    <img  className="grid-m-img"src={grid2}></img>

    {/* <div style={{height:"5rem"}}></div> */}
    </>
  )
}

export default Grid