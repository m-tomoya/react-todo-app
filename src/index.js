import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    <>
      <h1>REACT TUTORIAL</h1>
      <p>REACT TODO</p>
    </>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
