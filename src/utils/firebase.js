 //Import the functions you need from the SDKs you need
 import app from "firebase/compat/app";
import "firebase/auth"
 import { TwitterAuthProvider, getAuth, signInWithPopup, getRedirectResult, signOut} from "firebase/auth";
import { Router } from "react-router-dom";



const firebaseConfig = {
  apiKey: "AIzaSyBnQS2h7oCDfERXpGdWQQFGa1AoQxdmwLc",
  authDomain: "tweetmarkweb.firebaseapp.com",
  projectId: "tweetmarkweb",
  storageBucket: "tweetmarkweb.appspot.com",
  messagingSenderId: "394296905189",
  appId: "1:394296905189:web:19e2c2ef9479d5b846f30c"
};



class Firebase{
  constructor(){
    this.app = app.initializeApp(firebaseConfig);
  }

  signUserIn = async () =>{
    const provider = new TwitterAuthProvider();
    const auth = getAuth();
    auth.languageCode = 'it'; 
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
    // You can use these server side with your app's credentials to access the Twitter API.
    const credential = TwitterAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const secret = credential.secret;

    // The signed-in user info.
    const user = result.user;

    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = TwitterAuthProvider.credentialFromError(error);
    // ...
  });

  }
  
 signUserOut = async() =>{
  const auth = getAuth();
signOut(auth).then(() => {
  console.log('signed out')
  window.location.assign('/landing')
}).catch((error) => {
  console.log(error)
});

 }
}


export default Firebase