import React from 'react';

import './MineGoals.css'
const MineGoals =props =>{
    if(props.items.length === 0)
    {
        return(
            <h3>No Goals in Life</h3>
        )
    }
    return(
        props.items.map(item=>{
            return(
                <div>
                    <li key={item.id}>{item.text}</li> 
                </div>   
                
            )
        })
    )
}

export default MineGoals;