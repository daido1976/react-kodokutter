import React from "react";
import ReactDOM from "react-dom";
import Tweet from "./Tweet";
import "./index.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCarrot, faCube } from "@fortawesome/free-solid-svg-icons";

library.add(faCarrot, faCube)

const App = () => (
  <div>
    <Tweet
      icon="cube"
      color="skyblue"
      displayName="Daido Shota"
      accountName="daido1976"
      content="Hello!"
    />
    <Tweet
      icon="carrot"
      color="orange"
      displayName="Yamada Taro"
      accountName="yamada123"
      content="World!"
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
