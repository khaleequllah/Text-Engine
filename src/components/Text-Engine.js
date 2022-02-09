import React, { useState } from "react";

export default function Form(props) {
  //Method for Click Upper Case Button
  const handleUpClick = () => {
    //console.log("UpperCase Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleLoClick = () => {
    //console.log("UpperCase Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };
  const handleClrClick = () => {
    //console.log("UpperCase Clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };

  //method for Onchange
  const handleOnChange = (event) => {
    //console.log("On change");
    setText(event.target.value);
  };

  //remove extra space
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  };

  //Copy to clipboard
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied to clipboard", "success");
  };
  const [text, setText] = useState("");
  //setText("Enter Value Here");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-success mx-2 my-2" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-success mx-2 my-2" onClick={handleClrClick}>
          Clear Text
        </button>
        <button
          className="btn btn-success mx-2 my-2"
          onClick={handleExtraSpaces}
        >
          ExtraSpaces
        </button>
        <button className="btn btn-success mx-2 my-2" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div
        className="container my-2"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text === "" ? 0 : text.split(" ").length} words and {text.length}{" "}
          characters
        </p>
        <p>{text === "" ? 0 : 0.008 * text.split(" ").length} Time to Read</p>
        <h2>Preview</h2>
        <p>{text === "" ? "Enter your text in text box to preview" : text}</p>
      </div>
    </>
  );
}