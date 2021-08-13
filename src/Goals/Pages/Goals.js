import React, { useState } from 'react';
import Goal from '../Components/Goal';

import './Goals.css';
const Goals = () =>{
    const [myGoals, setGoals]= useState([
        {id:'1', text:"Complete React Course!"},
        {id:'2', text:"Complete Node Course!"},
        {id:'3', text:"Complete MongoDb Course!"}
    ]);

    const changeHandler = (newGoal)=>{
        setGoals(previous =>{
            return previous.concat(newGoal);
        });
    }

    return(
        <ul className="list-items">
            <Goal items={myGoals} change={changeHandler}/>
        </ul>
    )  
}

export default Goals;