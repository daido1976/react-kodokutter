import React from "react";
import ReactDOM from "react-dom";
import Tweet from "./Tweet";

const App = () => (
  <div>
    <Tweet content="Hello!" />
    <Tweet content="World!" />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
