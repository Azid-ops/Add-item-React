import React, { useState } from 'react';

import './AddGoal.css';
const AddGoal =props =>{
    const [text,newText]=useState(0);
    const [enteredText,setText] = useState('')
    const myHandler = event =>{
        event.preventDefault();
        const List = {
            id:Math.random().toString(),
            text:enteredText,
        }
        newText(text+1);
        props.addText(List)
    }


    const textChangeHandler = event =>{
        setText(event.target.value);
    }

    return(
        <div>
            <h2>Course Goals</h2>
            <form className="add">
                <input type="text" value={enteredText} onChange={textChangeHandler}/>
                <button type="submit" onClick={myHandler}>Add Goal</button>
            </form>
            <h4>Total Goals: {text}</h4>
        </div>
    )
}

export default AddGoal;