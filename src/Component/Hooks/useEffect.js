import React,{useEffect,useState} from "react";
import "./style.css";

const UseEffect = () => {
  const initialData = 0;
  const [myNum, setMyNum] = useState(initialData);

  useEffect(() => {
    document.title = `Orders(${myNum})`;
    console.log('Hi');
    // Whatsapp circular message notification counter
  })
  
//   useEffect(() => {
//     console.log('Hi');
//   },[])
// Bcz of array dependency(empty brackets) it will count only once 

  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div class="button2" onClick={() => setMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCREASE
        </div>
      </div>
    </>
  );
};

export default UseEffect;

// UseEffect - changes within sec