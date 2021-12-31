import React, { useState } from 'react'

const Header = ({count, setCount, evenOrOddCount })=> {
    return (
        <div className = "header">
           <div>Count is {evenOrOddCount}</div>
           <div className = "counter">
               <div className="counterButton" onClick = {()=> setCount(count-1)}>-</div>
               <div>{count}</div>
               <div className="counterButton" onClick = {()=> setCount(count+1)}>+</div>
           </div> 
        </div>
    )
}

export default Header;
