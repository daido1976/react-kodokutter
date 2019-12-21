/* eslint-disable react/prop-types */
import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-regular-svg-icons";

library.add(faUser);

const TweetInput = props => {
  const textareaRef = React.useRef(null);
  const sendTweet = React.useCallback(() => {
    if (textareaRef.current.value) {
      props.addTweet({
        id: new Date().getTime(),
        icon: ["far", "user"],
        displayName: "hoge",
        accountName: "fuga",
        content: textareaRef.current.value
      });
      textareaRef.current.value = null;
    } else {
      // eslint-disable-next-line no-undef
      alert("tweetを入力してください");
    }
  }, [props]);

  return (
    <div>
      <div>
        <textarea className="tweet-textarea" ref={textareaRef} />
      </div>
      <div>
        <button onClick={sendTweet} className="send-tweet">
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TweetInput;
