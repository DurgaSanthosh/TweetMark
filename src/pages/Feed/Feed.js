import React from 'react'

import "./Feed.css"

const Feed = () => {
  return (
    <div className='feed_container'>
        <div className='feed_sidenav'>
            <div className="sidenav_logo">logo</div>
            <div className="sidenav_feeds">Feeds</div>
            <div className="sidenav_spaces">Spaces</div>
            <div className="sidenav_button"><button>Button</button></div>

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