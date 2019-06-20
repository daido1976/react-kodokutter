import React from "react";
import ReactDOM from "react-dom";
import Timeline from "./Timeline";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCarrot, faCube } from "@fortawesome/free-solid-svg-icons";

library.add(faCarrot, faCube);

const App = () => {
  const tweets = [
    {
      id: 0,
      icon: "cube",
      color: "skyblue",
      displayName: "Daido Shota",
      accountName: "daido1976",
      content: "Hello!"
    },
    {
      id: 1,
      icon: "carrot",
      color: "orange",
      displayName: "Yamada Taro",
      accountName: "yamada123",
      content: "World!"
    }
  ];

  return (
    <div>
      <Timeline tweets={tweets} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
