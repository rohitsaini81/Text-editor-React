import './App.css';
import Navbar from './components/Navbar';
import Formbox from './components/Formbox';
import React, { useState } from 'react'
import Alerts from './components/Alerts';
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("Enable Dark Mode");
  const [alert, setAlerts] = useState(null);

  let showAlerts = (message, type) => {
    setAlerts({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlerts(null)
    }, 1500);
  }

  let togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      setModeText("Disable Dark Mode")
      document.body.style.backgroundColor = "black";
      showAlerts("Dark Mode Enabled", "success");

    } else {
      setMode("light");
      setModeText("Enable Dark Mode")
      document.body.style.backgroundColor = "white";
      showAlerts("Light Mode Enabled", "success")
    }
  }

  let custubMode = (event) => {
    let currentColor = event.target.id;
    setMode(currentColor);
    document.body.style.backgroundColor = currentColor;
    showAlerts("Custum Mode Enabled!", currentColor);

    if (event.target.id === "warning") {
      document.body.style.backgroundColor = "#241c0b";
    } else {
      document.body.style.backgroundColor = "#0f310f";
    }

  }





  return (
    <>

      <BrowserRouter>

        <Navbar title="TextEditor" aboutEditor="About Us" mode={mode} togglemode={togglemode} custubMode={custubMode} modeText={modeText} />
        <Alerts alert={alert} />

        <div className="container my-4">

          <Routes>
            {/* <Formbox heading="Enter Your Text below " mode={mode} showAlerts={showAlerts} custubMode={custubMode} /> */}
            {/* <About mode={mode} showAlerts={showAlerts} custubMode={custubMode} togglemode={togglemode} /> */}

            <Route path='/' element={<Formbox heading="Enter Your Text below " mode={mode} showAlerts={showAlerts} custubMode={custubMode} />} />
            <Route path='/texteditor' element={<Formbox heading="Enter Your Text below " mode={mode} showAlerts={showAlerts} custubMode={custubMode} />} />
            <Route path='/home' element={<Formbox heading="Enter Your Text below " mode={mode} showAlerts={showAlerts} custubMode={custubMode} />} />
          </Routes>

        </div>


      </BrowserRouter>

    </>
  );
}

export default App;  
