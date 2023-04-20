//LEARNING OF PROPS AND STATES 

import React, {useState}from "react";// have imported useState from react
//usestate helps in making a state variable eg-text in our case


export default function TextForm(props) {
    //creating a function inside a buttonn1 which will fire when someone clicks it

    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlertt("Converted to Uppercase!" , "success");
    }
    const handleLoClick = () => {
        console.log("LowerCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlertt("Converted to Lowercase!" , "success");
    }
    const handleClearClick = () => {
        console.log("Cleared text" + text);
        let newText = (" ");
        setText(newText)
    }
    const handleOnChange = (event) => {
        console.log("On change"); //have used console just for understanding
        setText(event.target.value); //used this to ensure that we can write anything on the text box after the default to text
    }
    const handleCopy = () => {
       var text = document.getElementById("myBox");
       text.select();
       navigator.clipboard.writeText(text.value);

    }

    const [text, setText] = useState('Enter Text Here');
    // text is a variable that belongs to a state and whose vale has been set to "enter text here" and we can update its value using setText function
    //text="chhdb"; // Wrong way to change the state
     //setText("chhdb"); // Correct way to change the state

  return (
    <>
    <div className="container " style={{backgroundColor: props.mode==='light'?'white':'grey'}}> 
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='light'?'white':'grey'}}></textarea>
      </div>
     <button className = "btn btn-primary" onClick={handleUpClick} onChange={handleOnChange}>Convert to UpperCase</button>
     <button className = "btn btn-primary ms-3" onClick={handleLoClick} onChange={handleOnChange}>Convert to LowerCase</button>
     <button className = "btn btn-primary ms-3" onClick={handleClearClick} onChange={handleOnChange}>Clear Text</button>
     <button className = "btn btn-primary ms-3" onClick={handleCopy} onChange={handleOnChange}>Copy Text</button>
    </div>
   <div className="container my-2" style={{backgroundColor: props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}}>
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something to preview here"}</p>
    </div>
    </>
  );
  //On change event is required to type anything in the text area as the default state was the value inside the text state variable
// text.split() will split the text with a space and will give an array of words
}
