// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
}


export default Firebase