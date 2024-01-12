import React, { useState } from "react";
import './App.css'

function App() {
  const [result, setresult] = useState("");
  function handleClick(e){
    setresult(result.concat(e.target.name));

  }
  function clear(){
    setresult("")
  }
  function dis(e){
    try{
      setresult(eval(result).toString())
    }catch{
      setresult("error")
    }
  }
  function del(){
    setresult(result.slice(0,-1))
  }

  return (
    <div className="grid-container">
      <div className="input-feild">
        <input disabled value={result} className="oper" />
      </div>
      <button className="span-2 btn" onClick={clear} id="clear">Clear</button>
      <button className="btn spec" onClick={del}>C</button>
      <button className="btn spec" onClick={(e)=>{handleClick(e)}} name="/">&divide;</button>
      <button onClick={(e)=>{handleClick(e)}} className="btn" name="9">7</button>
      <button onClick={(e)=>{handleClick(e)}} className="btn" name="8">8 </button>
      <button onClick={(e)=>{handleClick(e)}} className="btn" name="9">9</button>
      <button onClick={(e)=>{handleClick(e)}} className="btn spec" name="*">x</button>
      <button onClick={(e)=>{handleClick(e)}} className="btn" name="4">4</button>
      <button onClick={(e)=>{handleClick(e)}} className="btn" name="5">5</button>
      <button onClick={(e)=>{handleClick(e)}} className="btn" name="6">6</button>
      <button onClick={(e)=>{handleClick(e)}} className="btn spec" name="-">-</button>
      <button onClick={(e)=>{handleClick(e)}} className="btn" name="1">1</button>
      <button onClick={(e)=>{handleClick(e)}} className="btn" name="2">2</button>
      <button onClick={(e)=>{handleClick(e)}} className="btn" name="3">3</button>
      <button onClick={(e)=>{handleClick(e)}} className="btn spec" name="+">+</button>
      <button onClick={(e)=>{handleClick(e)}} className="btn" name=".">.</button>
      <button onClick={(e)=>{handleClick(e)}} className="btn" name="0">0</button>
      <button onClick={(e)=>{dis(e)}} className="span-2 btn" id="equalto" name="=" >=</button>

    </div>
  );
}

export default App;
