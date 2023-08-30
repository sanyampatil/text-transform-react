// import React from 'react'
import React,{useState} from "react"

export default function Textform(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)

    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)

    }
     const handleClsClick=()=>{
        let newText="";
        setText(newText)

    }
    
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const [text,setText]=useState("")
    
    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3 ">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="7"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClsClick}>Clear notes</button>



            <div className="container my-3">

            <h4>{text.split(" ").length} words and {text.length}characters</h4>
            </div>

            <h2>preview</h2>
            <p>{text}</p>


        </>
    )
}
