import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {

  const [result, SetResult] = useState("");

  const clickhandler = (event) => {
    SetResult(result.concat(event.target.value))

  }
  const calculate = () => {
    SetResult(eval(result).toString())
  }
  const cleandata = () => {
    SetResult("");
  }
  return (
    <>
    <h1>Smart Calculator In React</h1>
    <div className="container">
      <br></br>
    <div className="cont">
      <div className="calc-body">
        <div className="calc-screen">
          <div className="calc-operation">
         <h3  style={{textAlign:"right", margin:"-5px -5px", fontSize:"45px" }}> {result}</h3>
         </div>
           </div>
        <div className="calc-button-row">
          <button className="button1"
            type="button"
            value="Clear"

            onClick={cleandata}

          >C</button>
          <button className="button1"
            type="button"
            value="-"

            onClick={clickhandler}

          >-</button>
          <button className="button1"
            type="button"
            value="%"

            onClick={clickhandler}

          >%</button>
           <button className="button l"
            type="button"
            value="/"

            onClick={clickhandler}

          >/</button>
        </div>
        <div className="calc-button-row">
          <button className="button"
            type="button"
            value="7"
            onClick={clickhandler}

          >7</button>

          <button className="button"
            type="button"
            value="8"

            onClick={clickhandler}

          >8</button>
          <button className="button"
            type="button"
            value="9"
            onClick={clickhandler}

          >9</button>
          <button className="button l"
            type="button"
            value="*"

            onClick={clickhandler}

          >x</button>
        </div>
        <div className="calc-button-row">
          <button className="button"
            type="button"
            value="4"
            onClick={clickhandler}

          >4</button>
          <button className="button"
            type="button"
            value="5"
            onClick={clickhandler}

          >5</button>
          <button className="button"
            type="button"
            value="6"
            onClick={clickhandler}

          >6</button>
          <div className="button2"> ? </div>
        </div>
        <div className="calc-button-row">
          <button className="button"
            type="button"
            value="1"
            onClick={clickhandler}

          >1</button>
          <button className="button"
            type="button"
            value="2"
            onClick={clickhandler}

          >2</button>
          <button className="button"
            type="button"
            value="3"
            onClick={clickhandler}

          >3</button>


          <button className="button l"
            type="button"
            value="+"

            onClick={clickhandler}

          >+</button>
        </div>
        <div className="calc-button-row1">
          <button className="button0"
            type="button"
            value="0"
            onClick={clickhandler}

          >0</button>
          <button className="button"
            type="button"
            value="."

            onClick={clickhandler}

          >.</button>


          <button className="button l"
            type="button"
            value="="

            onClick={calculate}

          >=</button>
        </div>
        
      </div>
      </div>
    </div>
    </>
  );
}

export default App;
