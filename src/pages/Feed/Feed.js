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

const Feed = () => {
  //   const user = useContext(AuthContext)
  //   console.log(user)
  //  const userID = user.providerData[0].uid

  //  // const navigate = useNavigate()
  //  // const [authDone, setAuthDone] = useState(false)
  //  if(user.providerData[0]!= null)  {

  //      console.log(fetch(`https://api.twitter.com/2/users/${userID}/following`))
  //    }

  //  console.log(user)

  //  const url = `https://api.twitter.com/2/users/${userID}/following`;
  //  const bearerToken = "AAAAAAAAAAAAAAAAAAAAADoDkgEAAAAA0WfQi6F28ysL4Aay9kqNX3BynJQ%3DP3A9ItvcxRXJUgXxfU0PAh8RvfBXMQ2VUbdEwJNSYFyIf0Spyo";

  //  const getFollowing = async () =>{
  //   let params ={
  //     "max-results": 100
  //   }

  //  const options = {
  //   headers:{
  //     "Authorization":`Bearer ${bearerToken}`
  //   }
  //  }
  // try{
  //   let response = await response('get', url, params);
  //  if(response.statusCode != 200){
  //   console.log(`${response.statusCode} ${response.statusMessage}:\n${response.body}`)
  //  }
  // }
  // catch(error){
  // console.log(error)
  // }
  //  }

  // axios tweets

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
          <button>Log out</button>
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
