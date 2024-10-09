import { useEffect, useRef, useState } from "react";
import "./Sci.css"

function Sci2() {
    const inputRef = useRef()

    const myStyle = { color: "Red" }
    const [style, setStyle] = useState("dark");
    const [name, setName] = useState("aaa");
    const [num, setNum] = useState(0);

    useEffect(() => {
        console.log("use effect called")
    }, [num]);

    const selectChange = (event) => {
        setStyle(event.target.value)
        console.log(event.target.value)
    }

    const handleButton = () => {
        setName(inputRef.current.value)
        //console.log(inputRef.current.value);
    }
    const handleInputText = (event) => {
        setNum(Math.random());
        //console.log(event.target.value)
    }
    const setTheme = (event) => {
        setStyle(event.target.value)
        console.log(event.target.value);
    }

    return (
        <div className="Sci2" class={style}>
            <div onChange={setTheme}>
                <input type="radio" value="light" name="theme" /> light
                <input type="radio" value="dark" name="theme" /> dark
            </div>

            <input type="button" value="baton" onClick={handleButton}></input>
            <input ref={inputRef} type="text" onChange={handleInputText}></input>
            <select id="lang" onChange={selectChange}>
                <option value="light">light</option>
                <option value="dark">dark</option>
            </select>
            <p>{name}</p>
            <p>{num}</p>
        </div>
    );
}

export default Sci2;
