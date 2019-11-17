// import react
import React from "react";
// import style.css from Jumbotron folder
import "./style.css";

// Jumbotron functional component with children prop passed in
function Jumbotron({ children }) {
  return <div className="jumbotron mt-4">{children}</div>;
}

//export Jumbotron component
export default Jumbotron;
