import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { BaseContext } from '../../utils/baseContext'
import "./Landing.css"

const Landing = () => {

  const firebaseContext = useContext(BaseContext)

  async function signIn(){
    await firebaseContext.signUserIn()
  }
 useEffect(()=>{
 console.log(firebaseContext)
 }, [])
 


  return (
    <div className='Landing_container'>
        
    <div>
        <button onClick={signIn} className='landing_loginbtn' >Login with Twitter</button>
    </div>
    </div>
  )
}

export default Landing