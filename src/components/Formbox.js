import { useState } from "react"


export default function Formbox(props) {

    const [text, setText] = useState("");

    const handalOnChnage = (event) => {
        setText(event.target.value)
    }

    const handalUpCase = () => {
        const newText = text.toUpperCase()
        setText(newText);
        props.showAlerts("Text Converted To UpperCase!", "success");

        if (text.length === 0) {
            props.showAlerts("First Enter Your text !", "warning")
        }
    }

    const handalLowCase = () => {
        const newText = text.toLowerCase()
        setText(newText);
        props.showAlerts("Text Converted To LowerCase!", "success");

        if (text.length === 0) {
            props.showAlerts("First Enter Your text !", "warning")
        }
    }

    const handalClear = () => {
        setText("");
        props.showAlerts("Text Box Clean!", "success");

    }

    const handalCoppy = () => {
        let coppytext = document.getElementById("myBox");
        coppytext.select();
        navigator.clipboard.writeText(coppytext.value);
        props.showAlerts("Text Copied!", "success");

        if (text.length === 0) {
            props.showAlerts("First Enter Your text !", "warning")
        }
    }

    const handalExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "));
        props.showAlerts("Extra Spaces Are Removed!", "success");

        if (text.length === 0) {
            props.showAlerts("First Enter Your text !", "warning")
        }
    }

    return (
        <div className="" style={{ color: `${props.mode === "light" ? "black" : "white"}`, marginTop: "4rem" }} >
            <h1 className="mb-4">{props.heading}</h1>
            <div className="mb-4">
                <textarea className={`form-control bg-${props.mode} text-${props.mode === "light" ? "dark" : "light"}`} value={text} onChange={handalOnChnage} id="myBox" rows="10"></textarea>
            </div>

            <div className="container ">
                <div className={`btn btn-${props.mode === "light" ? "primary" : props.mode} mx-1 my-1 `} onClick={handalUpCase}>ToUpperCase</div>
                <div className={`btn btn-${props.mode === "light" ? "primary" : props.mode} mx-1 my-1 `} onClick={handalLowCase}>ToLowerCase</div>
                <div className={`btn btn-${props.mode === "light" ? "primary" : props.mode} mx-1 my-1 `} onClick={handalClear}>Clear Text</div>
                <div className={`btn btn-${props.mode === "light" ? "primary" : props.mode} mx-1 my-1 `} onClick={handalCoppy}>Copy  Text</div>
                <div className={`btn btn-${props.mode === "light" ? "primary" : props.mode} mx-1 my-1 `} onClick={handalExtraSpaces}>Remove Extra Spaces</div>

            </div>

            <div className="container my-4">
                <h2>Text Summery Is Here.</h2>
                <p>{text.split(" ").length - 1} words and {text.length} Characters </p>
            </div>


            <div className="container  p-3" style={{ color: `${props.mode === "light" ? "black" : "white"}`, border: "1px solid gray", borderRadius: "10px" }}>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to Preview."}</p>
            </div>





        </div>
    )
}
