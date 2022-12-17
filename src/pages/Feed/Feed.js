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
   
    </div>
  )



  
}

export default Feed