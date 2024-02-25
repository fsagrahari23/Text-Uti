import React ,{useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    
    const newText=text.toUpperCase();
    
    setText(newText);
    props.setalert("Converted to uppercase","uppercase");
  }
  const handleOnChange = (event)=>{

    setText(event.target.value);
  }
  const handleClear=(e)=> {
    setText("");
    props.setalert("Cleared !","success");
  }
  const handleCopy=() =>{
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.setalert("Text Copied to clipboard","success");
  };
  const handleExtraSpaces=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.setalert("Removed extra spaces","success");
  }
  
  const [text,setText] = useState("");
  return (
    <>
    
  <div className="container mb-3">
  <h1 className={`text-${props.mode=== 'light' ?'dark':'light'}`}>{props.heading}-</h1>
    <textarea className={`form-control text-${props.mode=== 'light' ?'dark':'light'}`} style={{background:`${props.mode=== 'dark'?'#212529':'white'}`}} id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
    <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert To Uppercase </button>
    <button className="btn btn-success mx-1" onClick={handleClear}>Clear</button>
    <button className="btn btn-success mx-1" onClick={handleCopy}>Copy</button>
    <button className="btn btn-success mx-1" onClick={handleExtraSpaces}>Remove Space</button>
    
    
    
  </div>
  <div className="container my-3">
    <h1 className={`text-${props.mode=== 'light' ?'dark':'light'}`}>Your Text Summary</h1>
    <p className={`text-${props.mode=== 'light' ?'dark':'light'}`}>{text.split(" ").length-1} words and {text.length} characters long.</p>
    <p className={`text-${props.mode=== 'light' ?'dark':'light'}`}>{(text.split(" ").length-1) * 0.008}min in which you read your text</p>
    <h2 className={`text-${props.mode=== 'light' ?'dark':'light'}`}>Preview</h2>
    <p className={`text-${props.mode=== 'light' ?'dark':'light'}`}>{text}</p>
  </div>
  </>
  )
}
