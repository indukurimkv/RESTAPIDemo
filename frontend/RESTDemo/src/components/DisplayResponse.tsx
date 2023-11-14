import { useEffect, useState } from "react"
import axios from "axios"

export function DisplayResponse(){
    let [test, setTest] = useState("test")
    
    useEffect(()=>{
        axios.get("localhost:5000/ping").then((response: any)=>{
            setTest(response)
        })
    })
    return (
        <div className="text-light">
            <h1>{test}</h1>
        </div>
    )
}