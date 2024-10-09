import { useEffect, useRef } from "react";

function Sci() {
    const inputRef = useRef()
    const handleButton = () => {
        console.log(inputRef.current.value);
    }
    const handleInputText = (event) => {
        console.log(event.target.value)
    }
    
    return ( 
        <div className="Sci">
            <input type="button" value="baton" onClick={handleButton}></input>
            <input ref={inputRef} type="text" onInputCapture={handleInputText}></input>
        </div>
    );
}

export default Sci;
