// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
import { TwitterAuthProvider, getAuth, signInWithPopup } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBnQS2h7oCDfERXpGdWQQFGa1AoQxdmwLc",
  authDomain: "tweetmarkweb.firebaseapp.com",
  projectId: "tweetmarkweb",
  storageBucket: "tweetmarkweb.appspot.com",
  messagingSenderId: "394296905189",
  appId: "1:394296905189:web:19e2c2ef9479d5b846f30c"
};

// Initialize Firebase
class Firebase{
  constructor(){
    this.app = initializeApp(firebaseConfig);
  }

  signUserIn = () =>{
    
    const provider = new this.app.auth.TwitterAuthProvider();
        this.app
        .auth()
        .signInWithPopup(provider)
    .then((user) => {
      console.log(user)
    })
  }
}


export default Firebase