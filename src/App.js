import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from "react";
import Alert from './components/Alert';

//REACT ROUTER DOM

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
  
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Tells whether dark mode is enabled or not
  const [alert, setAlert] = useState(null); //alert is an object

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typee: type
    })
    // How to remove/dismissing the alert after 2seconds automatically
    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode has been enabled.", "success");
      document.title = "TextUtils - Dark Mode"; //changes the title of the site
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled.", "success");
      document.title = 'TextUtils - Light Mode';
      //Setting interval For grabbing the attention of the user
      // setInterval(() => {
      //   document.title= 'TextUtils is an amazing mode';

      // }, 2000);
      // setInterval(() => {
      //   document.title= ' Install TextUtils now';

      // }, 1500);
    }
  }
  return (
    // JSX Fragment to comprise the whole code in single tag
    // using props to give different titles to website using the same navbar
    // Integers can be given as an attribute like: {3}
    <>
      {/* <Navbar title = "TextUtils" aboutText="Abous us" /> */}
      {/* <Navbar/> */}
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-9">
          {/* React router dom */}
          {/* /users --> component 1
          /users/home --> component 2  hence, thats why using exact keywor for matching */}
          {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/"> */}
              <TextForm showAlertt={showAlert} heading="Enter the text to analyze below" mode={mode} />
            {/* </Route>
          </Switch> */}
          {/* <About /> */}
        </div>
      {/* </Router> */}
      {/* <TextForm showAlertt={showAlert}heading="Enter the text to analyze below" mode={mode}/>  */}

    </>
  );
}

export default App;
