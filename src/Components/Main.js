import React, { useState } from 'react'

const  Main = ({count, evenOrOddCount, setCount })=> {
    return (
        <div className ="main">
            <div className = "counter">
               <div className="counterButton" onClick = {()=> setCount(count-1)}>-</div>
               <div>{count}</div>
               <div className="counterButton" onClick = {()=> setCount(count+1)}>+</div>
           </div> 
           {evenOrOddCount == 'Even' && <div>Some text!!!!!!!!!!!!!!!!</div>}
        </div>
    )
}

export default Main;
