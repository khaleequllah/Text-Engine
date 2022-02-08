import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  //For Dark mode
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState("null");

  //set Alert
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  //toggling Dark and light Mode Button
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Enabled", "success");
      document.title = "Text Engine - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
      document.title = "Text Engine - Light Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Text Engine"
          about="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <div className="container my-3">
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/About" element={<About heading="About Us" />} />

            <Route
              path="/"
              element={
                <Form
                  showAlert={showAlert}
                  heading="Input Text"
                  mode={mode}
                  toggleMode={toggleMode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
      <Alert alert={alert} />
    </>
  );
}

export default App;
