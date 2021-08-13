import React, { useState } from 'react';

import './Goal.css'
const Goal = props =>{
    const [enteredText, setText] = useState('');
    const addGoalHandler = event =>{
        event.preventDefault();
        const goals = {
            id:Math.random().toString(),
            text:enteredText
        }
        setText('');
        props.change(goals);
    }

    const addText = event =>{
        setText(event.target.value);
    }
    return(
        <div>
            <h2>Course Goals</h2>
            <form className="add-value" onSubmit={addGoalHandler}>
                <input type="text" value={enteredText} onChange={addText}/>
                <button type="submit">Add</button>
            </form>

            {props.items.map(item=>{
                return <li key={item.id}>{item.text}</li>
            })}
        </div>
        
    )
}

export default Goal;