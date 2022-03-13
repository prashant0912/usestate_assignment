import { useState } from "react"
export function Groceryinput({handle}){
    const[text,setText] = useState("");
    return (
        <div>
            <input type="text" onChange = {(e)=>{
                setText(e.target.value)
            }} id = "inp"/>
            <button onClick={()=>{
                handle(text);
            }} >Add</button>
        </div>
    )
}