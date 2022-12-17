import React, { useEffect, useContext } from 'react'
import { BaseContext } from '../../utils/baseContext'
import "./Landing.css"
import { AuthContext } from '../../utils/AuthContext'



const Landing = () => {

  const user = useContext(AuthContext)
  const firebaseContext = useContext(BaseContext)

  async function signIn() {
    await firebaseContext.signUserIn()
  }
  useEffect(() => {
    console.log(firebaseContext)
    console.log(user)
   if (user?.providerData[0]?.uid) window.location.assign('/feed')
  }, [user])

  console.log(user)


  return (

    <div>
      <div className='landing_container'>
            <div className='landing_title'>TweetMark</div>
            <div className='landing_tagline'>Choose what u see, No distractions in the frame!</div>
            <div>
              <button onClick={signIn} className='landing_loginbtn' >Login with Twitter</button>
            </div>
            
          </div>
      

    </div>



  )

}

export default Landing