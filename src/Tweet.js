import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart as farFaHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasFaHeart } from "@fortawesome/free-solid-svg-icons";

library.add(farFaHeart, fasFaHeart);

const Tweet = props => {
  const [liked, setLike] = React.useState(false);
  const toggleLike = React.useCallback(() => setLike(prev => !prev), [setLike]);

  return (
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
        <div className="status-action">
          <span onClick={toggleLike}>
            <FontAwesomeIcon
              icon={liked ? ["fas", "heart"] : ["far", "heart"]}
              style={liked ? { color: "red" } : null}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
