import React from 'react'
import Logo from "../../assets/logoblackbg.png"
import "./Feed.css"

const Feed = () => {
  return (
    <div className='feed_container'>
        <div className='feed_sidenav'>
            <div className="sidenav_logo"><img src={Logo} style={{height :50}}/><span>TweetMark</span></div>
            <hr/><div className="sidenav_feeds">Feeds</div><hr/>
            <div className="sidenav_spaces">Spaces</div> <hr/>
            <div className="sidenav_button"><button>Log out</button></div>

        </div>
        <div className='feed_content'>
            <div>
                feed1
            </div>

        </div>

    </div>
  )
}

export default Feed