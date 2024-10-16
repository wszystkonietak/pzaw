import { useEffect, useRef } from "react";

function Row(props) {
    
    const test = () => {
        console.log("aaa")
    }
    return(
    <tr>
        <td>{props.index}</td>
        <td>{props.element}</td>
        <button onClick={props.onButtonClick}>sdafds</button>
    </tr>
    
    )
}

export default Row;
