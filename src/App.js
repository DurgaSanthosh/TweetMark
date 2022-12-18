import Landing from "./pages/Landing/Landing";
import Navbar from "./components/navbar/navbar";
import Feed from "./pages/Feed/Feed";
import About from "./pages/about/about";
import Contactus from "./pages/contactus/contactus";
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
     <Route path='/' element={<><Navbar/><Landing/></>}/>
     <Route path='/landing' element={<><Navbar/><Landing/></>}/>
     <Route path="/feed" element={<><Feed/></>}/>
     <Route path='/about' element={<><Navbar/><About/></>}/>
     <Route path='/contactus' element={<><Navbar/><Contactus/></>}/>
     </Routes>
      </Router>
    </div>
  );
}

export default App;
