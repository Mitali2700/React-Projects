import React from 'react';
import "./style.css";

const Todo = () => {
  return (
    <>
        <div className='main_div'>
            <div className='child-div'>
                <figure>
                    <img src="./images/todo.svg" alt="todologo" />
                    <figcaption>Add Your List Here✌</figcaption>
                </figure>
                <div className='addItems'>
                <input 
                    type ="text"
                    placeholder='✍️ Add Items' 
                    className="form-control"
                />
                </div>
            </div>
        </div>
    </>
  )
}

export default Todo