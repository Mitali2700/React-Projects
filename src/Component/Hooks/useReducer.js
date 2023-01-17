import React from "react";
import "./style.css";

const reducer = (state, action) => {
    if(action.type === "INCREMENT"){
            state= state+1;
    }
      if(action.type === "INCREMENT"){
            state= state+1;
    }
    return state;
};

const UseReducer = () => {
  const initialData = 10;
//   const [myNum, setMyNum] = React.useState(initialData);

    const[state, dispatch]=React.useReducer(reducer, initialData);
    // use Reducer will take 2 arguments

  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div class="button2" onClick={()=> dispatch({type:"INCREMENT)"})}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCREASE
        </div>
        <div
          class="button2"
          onClick={()=> dispatch({type:"DECREMENT)"})}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECREASE
        </div>
      </div>
    </>
  );
};

export default UseReducer;

// Small Projects - useState
// Large Projects - useReducer