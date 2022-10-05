import './App.css'
import { useState } from "react";
import { useEffect, useRef } from 'react';

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const inputRef = useRef();

  useEffect(()=>{
    inputRef.current.focus()
  },[])


  return (
    <div 
      className="App"
      onCanPlay={e=>inputRef.current.focus()}
    >
      <input
        ref={inputRef} 
        type="text"
        value={input}
        onChange={e=>setInput(e.target.value)}
        onKeyDown={e=>{
          if (e.key === "Enter"){
            let newOutput = "";
            newOutput = output + "\n" + "$EthanArchitetto/" + input + "\n";
            switch (input) {
              case "help":
                newOutput += "Find out more: more \nLearn about me: bio ";
                break
              case "more":
                newOutput += "https:/portfolio.ex"
                break
              default:
                newOutput += "Unknown Command";
            }

            setOutput(newOutput)
            setInput("")
          }
        }}
      />
      <div className="terminal">
        {output}
      </div>
    </div>
  )
}

export default App