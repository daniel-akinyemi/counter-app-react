import React, {useState} from "react";

const Counter = () => {
    const [number, setNumber] = useState(0)

    const increaseHandler =()=>{
        setNumber(number +1)
    }
    const decreaseHandler =()=>{
        setNumber(number - 1)
    }
    const resetHandler =()=>{
        setNumber(0)
    }
  return (
    <div>
      <div className="resultBoxWrapper">
        <div className="resultBox">{number}</div>
      </div>
      <div className="buttons">
        <button onClick={increaseHandler}>Increase</button>
        <button onClick={decreaseHandler}>Decrease</button>
        <button onClick={resetHandler}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
