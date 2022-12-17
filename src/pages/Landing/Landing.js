import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { BaseContext } from '../../utils/baseContext'
import "./Landing.css"

const Landing = () => {

  const firebaseContext = useContext(BaseContext)
 useEffect(()=>{
 console.log(firebaseContext)
 }, [])


  return (
    <div className='landing_container'>
    <div className='landing_title'>TweetMark</div>    
    <div className='landing_tagline'>Choose what u see, No distractions in the frame!</div>
    <div>
        <button className='landing_loginbtn' >Login with Twitter</button>
    </div>
    </div>
  )
}

export default Landing