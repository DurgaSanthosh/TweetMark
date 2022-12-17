import React, {useState, useEffect, useContext} from 'react'
import { AuthContext } from '../../utils/AuthContext'
import { useNavigate } from 'react-router-dom'

import "./Feed.css"




const Feed = () => {
  const navigate = useNavigate()
  const [authDone, setAuthDone] = useState(false)
  const user = useContext(AuthContext)

 // useEffect((user)=>{
//  if(user != null){
//setAuthDone(true)
 // }
 // },[])


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
                <h1> feed </h1>
            </div>

        </div>

    </div>
  )



  
}

export default Feed
