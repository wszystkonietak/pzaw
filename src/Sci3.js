import { useState } from "react";
import Row from "./Row"


function Sci3() {
    const [flag, setFlag] = useState(false);
    const setDziala = (event) => {
        setFlag(!flag)
        console.log(flag);
    }
    const onButtonClick = () => {
        console.log("saddbg")
        return flag;
    } 
    const data = ["a", "b", "c", "d", "e"];
    const data2 = [
        {
            id: "23494ccf-e523-4243-bdb2-d5688f334f49",
            key2: "a"
        },
        {
            id: "5e252f25-72db-493f-a633-da0cb90b7bc6",
            key2: "b"
        },
        {
            id: "c5a18a15-14ae-4cff-95ba-8a0db2bfd4fa",
            key2: "c"
        },
    ];
    return (
        <div className="Sci3">
            {flag && <div>dziala</div>}
            
            
            <button onClick={setDziala}>button</button>
            <table>
                <thead>
                    <tr>
                        <td>Header1</td>
                        <td>Header2</td>
                        <td>Header3</td>
                        <td>Header4</td>
                        <td>Header5</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tekst1</td>
                        <td>Tekst2</td>
                        <td>Tekst3</td>
                        <td>Tekst4</td>
                        <td>Tekst5</td>
                    </tr>
                    <tr>
                        {
                            data.map((element, index, arr) => {
                                return (<td>{element}</td>)
                            })
                        }
                    </tr>
                    <tr>
                        {
                            data2.map((element, index, arr) => {
                                return (<tr key={element.id}> {element.key2}</tr>)
                            })
                        }
                    </tr>
                    <tr>
                        {
                            data2.map((element, index, arr) => {
                                return (<tr><Row key={element.id} index = {index + 1}element={element.id} onButtonClick = {onButtonClick}></Row></tr>)
                            })
                        }
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Sci3;
