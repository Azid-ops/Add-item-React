import React, { useState } from 'react';

import MineGoals from '../Components/MineGoals';
import AddGoal from '../Components/AddGoal';
import './Goals.css'

const Goals =() =>{
    const [goals , setGoals]= useState([
    ]);

    const addText= (goal) =>{
        setGoals(goals.concat(goal));
        console.log(goals);
    }

    return(
        <ul className="list-items">
            <AddGoal  addText={addText}/>
            <MineGoals items={goals}/>
        </ul>  
    )
}

export default Goals;