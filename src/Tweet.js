import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tweet = props => (
  <div className="tweet">
    <div className="icon-container">
      <FontAwesomeIcon icon={props.icon} style={{ color: props.color }} />
    </div>
    <div className="body-container">
      <div className="status-display">
        <span className="display-name">{props.displayName}</span>
        <span className="account-name">@{props.accountName}</span>
      </div>
      <div>{props.content}</div>
    </div>
  </div>
);

export default Tweet;
