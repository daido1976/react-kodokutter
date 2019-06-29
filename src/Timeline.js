/* eslint-disable react/prop-types */
import React from "react";
import Tweet from "./Tweet";

const Timeline = props => {
  const tweetList = props.tweets.map(tweet => (
    <Tweet
      key={tweet.id}
      icon={tweet.icon}
      color={tweet.color}
      displayName={tweet.displayName}
      accountName={tweet.accountName}
      content={tweet.content}
    />
  ));
  return <div className="timeline">{tweetList}</div>;
};

export default Timeline;
