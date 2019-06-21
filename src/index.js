import React from "react";
import ReactDOM from "react-dom";
import Timeline from "./Timeline";
import TweetInput from "./TweetInput";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCarrot, faCube } from "@fortawesome/free-solid-svg-icons";

library.add(faCarrot, faCube);

const App = () => {
  const [tweets, setTweets] = React.useState([
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
  ]);

  const addTweet = React.useCallback(
    tweet => setTweets(prev => [tweet, ...prev]),
    [setTweets]
  );

  return (
    <div>
      <TweetInput addTweet={addTweet} />
      <Timeline tweets={tweets} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
