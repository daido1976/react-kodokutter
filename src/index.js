import React from "react";
import ReactDOM from "react-dom";
import Tweet from "./Tweet";
import "./index.css";
import { faCarrot, faCube } from "@fortawesome/free-solid-svg-icons";

const App = () => (
  <div>
    <Tweet
      icon={faCube}
      color="skyblue"
      displayName="Daido Shota"
      accountName="daido1976"
      content="Hello!"
    />
    <Tweet
      icon={faCarrot}
      color="orange"
      displayName="Yamada Taro"
      accountName="yamada123"
      content="World!"
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
