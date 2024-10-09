import { useEffect, useRef, useState } from "react";
import "./Sci.css"

function Sci2() {
    const inputRef = useRef()

    const myStyle = {color : "Red"}
    const [name , setName] = useState("aaa");
    const [num , setNum] = useState(0);
    
    
    useEffect(()=>{
        console.log("use effect called")
    }, [num]);
    
    const handleButton = () => {
        setName(inputRef.current.value)
        //console.log(inputRef.current.value);
    }
    const handleInputText = (event) => {
        setNum(Math.random());
        //console.log(event.target.value)
    }
    return ( 
        <div className="Sci2" style={myStyle}>
        <input type="button" value="baton" onClick={handleButton}></input>
        <input ref={inputRef} type="text" onChange={handleInputText}></input>
        <p>{name}</p>
        <p>{num}</p>
        </div>
    );
}

export default Sci2;
