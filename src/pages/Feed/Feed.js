import React, { useState, useEffect, useContext } from "react";
import Logo from "../../assets/logoblackbg.png";
import { AuthContext } from "../../utils/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Feed.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";
import { BaseContext } from "../../utils/baseContext";

const Feed = () => {
    const user = useContext(AuthContext)
    const firebaseContext = useContext(BaseContext)

    async function signOut () {
      console.log(' log out function called')
      await firebaseContext.signUserOut()
    }
    
  

  return (
    <div className="feed_container">
      <div className="feed_sidenav">
        <div className="sidenav_logo">
          <img src={Logo} style={{ height: 50 }} />
          <span>TweetMark</span>
        </div>
        <hr />
        <div className="sidenav_feeds">Feeds</div>
        <hr />
        <div className="sidenav_spaces">Spaces</div> <hr />
        <div className="sidenav_button">
          <button onClick={signOut}>Log out</button>
        </div>
      </div>
      <div className="feed_content">
        <div className="feedTweets">
          <TwitterTweetEmbed tweetId={"1602160019482742784"} />
          <TwitterTweetEmbed tweetId={"1601827190894899201"} />
          <TwitterTweetEmbed tweetId={"1604230908533305345"} />
          <TwitterTweetEmbed tweetId={"1604035545394708481"} />
        </div>
      </div>
    </div>
  );
};

export default Feed;
