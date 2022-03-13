import { useState } from "react";
import { Groceryinput } from "./GroceryInput";
import {Add} from "./GroceryList"

export function Grocery(){
    const [item,setItem] = useState([]);
    const check = (data)=>{
        setItem([...item,data])
    }
    return (
        <div>
            <Groceryinput handle = {check}/>
            {item.map((e)=>(
                <Add grocery = {e}/>
                
            ))}
        </div>
        )
    
}