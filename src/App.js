import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import HistoryIcon from '@mui/icons-material/History';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@mui/material'
function App() {

  const [result, SetResult] = useState("");
  const [history, SetHistory] = useState([]);


const [open, setOpen] = useState(false)




  const clickhandler = (event) => {
    SetResult(result.concat(event.target.value))
  }

  // history.push({
  //   result: result,
  // });
  console.log(history)
  

  const clear=()=>{
    if(result === ''){
        return
    }
    const value=result.slice(0,-1)
    SetResult(value)
}




  const calculate = () => {
    // console.log("=======>", result+" = "+eval(result).toString())

    var bt = document.getElementById('btn');
    console.log(bt)
    if (result != '') {
      bt.disabled = true;
  }
  else {
      bt.disabled = false;
  }

    const historyData= [...history, result+" = "+eval(result).toString()];
    SetHistory(historyData);
    SetResult(eval(result).toString())
    // SetResult("");
    
  }

  const cleandata = () => {
    SetResult("");
  }


  

  
  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);


  
  return (
    <>
    
    <div className="title">
    Smart Calculator In React
   
 



    </div>
 



    
    <div className="container">
      <br></br>
    <div className="cont">
      <div className="calc-body">
        
        <div className="calc-screen">
        <PopupState  popupId="demo-popup-popover">
      {(popupState) => (
        <div >
          <div className="popup">
          <Button variant="contained" {...bindTrigger(popupState)}>
          <HistoryIcon/>
          </Button>
          </div>
          <Popover
            {...bindPopover(popupState)}
            anchorReference="anchorPosition"
            anchorPosition={{ top: 130, left: 880,  }}
            anchorOrigin={{
              
            }}
            transformOrigin={{
              // vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography sx={{ p: 2 }}> {history && history.map((history, i) => (
          <div key={i}>{history}</div>
        ))}</Typography>
          </Popover>
        </div>
      )}
    </PopupState>
          <div className="calc-operation">
            
         <h3  style={{hight:"50px", textAlign:"right", margin:"-1px -11px", padding:"20px 20px 10px 10px", fontSize:"55px" }}>{result}</h3>
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
          <button className="button2"
            
            onClick={clear}

          ><img  width={20} height={20}  src="https://cdn-icons-png.flaticon.com/512/159/159805.png" /></button>
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
            id="btn"
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
